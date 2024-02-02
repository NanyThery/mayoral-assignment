import { useCallback, useState } from 'react';
import useUpdateParams from '../../hooks/useUpdateParams';
import { useDebouncedCallback } from 'use-debounce';
import styles from './Filters.module.css';

const filters = [
  {
    value: 'relevance',
    label: 'Relevancia',
  },
  {
    value: 'priceAsc',
    label: 'Precio Asc.',
  },
  {
    value: 'priceDesc',
    label: 'Precio Desc.',
  },
];

export default function Filters() {
  const [selectedFilter, setSelectedFilter] = useState('relevance');

  const { updateUrlParams } = useUpdateParams();
  const debouncedUpdateUrlParams = useDebouncedCallback(updateUrlParams, 300);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const filterValue = event.target.value;
      setSelectedFilter(filterValue);
      debouncedUpdateUrlParams({ sort: filterValue });
    },
    [setSelectedFilter, updateUrlParams],
  );

  return (
    <div className={styles.filtersContainer}>
      <label className={styles.selectLabel}>Ordenar por:</label>
      <select className={styles.selectInput} onChange={handleChange} value={selectedFilter}>
        {filters.map((filter) => {
          return (
            <option className={styles.selectOption} key={filter.value} value={filter.value}>
              {filter.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
