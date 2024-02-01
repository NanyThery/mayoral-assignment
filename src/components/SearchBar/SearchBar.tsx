import CustomTextInput from '../UI/CustomTextInput/CustomTextInput';
import { useCallback, useState } from 'react';
import styles from './SearchBar.module.css';
import { SearchIcon } from '../UI/Icons/Icons';
import useUpdateParams from 'hooks/useUpdateParams';
import { useDebouncedCallback } from 'use-debounce';

type SearchTerm = string;

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<SearchTerm>('');
  const { updateUrlParams } = useUpdateParams();
  const debouncedUpdateUrlParams = useDebouncedCallback(updateUrlParams, 300);

  const handleChange = useCallback(
    (value: string) => {
      setSearchTerm(value);
      debouncedUpdateUrlParams({ query: value });
    },
    [setSearchTerm, updateUrlParams],
  );

  return (
    <div className={styles.container}>
      <CustomTextInput
        placeholder="Buscar"
        icon={<SearchIcon />}
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}
