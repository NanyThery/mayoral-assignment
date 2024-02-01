import { useRouter } from 'next/router';

/* Since we are calling search and sort logic from the server, we need to update the URL params and navitage to the new URL to retrieve the info from GetServerSideProps*/

export default function useUpdateParams() {
  const router = useRouter();

  const updateUrlParams = (params: Record<string, string>) => {
    const { pathname, query } = router;

    const updatedParams = { ...query, ...params };

    router.replace(
      `${pathname}?${new URLSearchParams(updatedParams as Record<string, string>).toString()}`,
    );
  };

  return {
    updateUrlParams,
  };
}
