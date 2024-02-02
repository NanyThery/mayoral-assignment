import { useRouter } from 'next/router';

/* Since we are calling search and sort logic from the server, we need to update the URL params and navitage to the new URL to retrieve the info from GetServerSideProps*/

interface UpdateParams {
  query?: string;
  sort?: string;
}

export default function useUpdateParams() {
  const router = useRouter();

  const updateUrlParams = (params: Record<string, string>) => {
    const { pathname, query } = router;

    const updatedParams: UpdateParams = { ...query, ...params };

    // Filter out properties that are empty strings or null
    const filteredParams = Object.fromEntries(
      Object.entries(updatedParams).filter(([, value]) => value !== '' && value !== null),
    );
    if (Object.keys(filteredParams).length === 0) {
      router.replace(pathname);
      return;
    }

    router.replace(
      `${pathname}?${new URLSearchParams(updatedParams as Record<string, string>).toString()}`,
    );
  };

  return {
    query: router.query?.query,
    sort: router.query?.sort,
    updateUrlParams,
  };
}
