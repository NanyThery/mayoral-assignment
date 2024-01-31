import { Clothes } from 'types/clothes.interface';
import styles from './ProductGrid.module.css';

interface GridParams {
  products: Clothes[];
  zoomIn: boolean;
}

export function ProductGrid(params: GridParams) {
  return (
    <div
      className={`${styles.gridContainer} ${
        params.zoomIn ? styles.gridSizeZoomIn : styles.gridSizeZoomOut
      }`}
      data-testid="product-grid"
    >
      {params.products.map((product) => {
        return (
          <div key={product.id}>
            <p style={{ whiteSpace: 'nowrap' }}>Here a card</p>
          </div>
        );
      })}
    </div>
  );
}
