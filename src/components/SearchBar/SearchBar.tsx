import CustomTextInput from '../UI/CustomTextInput/CustomTextInput';
import { useState } from 'react';
import styles from './SearchBar.module.css';
import { SearchIcon } from '../UI/Icons/Icons';

interface SearchBarProps {
  onSearch: (value: SearchTerm) => void;
}

type SearchTerm = string;

export default function SearchBar({ onSearch = () => {} }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState<SearchTerm>('');

  return (
    <div className={styles.container}>
      <form>
        <CustomTextInput
          placeholder="Buscar"
          icon={<SearchIcon />}
          value={searchTerm}
          onChange={(term) => {
            setSearchTerm(term);
          }}
        />
      </form>
    </div>
  );
}
