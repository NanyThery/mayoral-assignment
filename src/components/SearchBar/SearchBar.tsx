import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchImage() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
    </svg>
  );
}

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
          icon={<SearchImage />}
          value={searchTerm}
          onChange={(term) => {
            setSearchTerm(term);
          }}
        />
      </form>
    </div>
  );
}
