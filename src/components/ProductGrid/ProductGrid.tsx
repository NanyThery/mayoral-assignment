import { Clothes } from 'types/clothes.interface';
import styles from './ProductGrid.module.css';
import { Card } from 'components/Card/Card';

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
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
}
