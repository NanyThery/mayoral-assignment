import Image from 'next/image';
import styles from './NoResults.module.css';
import useUpdateParams from '../../../hooks/useUpdateParams';

export default function NoResults() {
  const { query } = useUpdateParams();
  return (
    <div className={styles.wrapper} data-testid="no-results">
      <div className={styles.container}>
        <Image src={'/images/404.png'} height={300} width={300} />
        <h2>No hemos encontrado productos para "{query}"</h2>
      </div>
    </div>
  );
}
