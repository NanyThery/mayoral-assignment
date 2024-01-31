import { render, screen } from '@testing-library/react';
import { ProductGrid } from './ProductGrid.tsx';
import data from '../../mocks/products.json';

describe('ProductGrid', () => {
  it('should apply zoomIn class when zoomIn is true', () => {
    render(<ProductGrid zoomIn={true} products={data} />);
    expect(screen.getByTestId('product-grid')).toHaveClass('gridSizeZoomIn');
  });
  it('should apply zoomOut class when zoomIn is false', () => {
    render(<ProductGrid zoomIn={false} products={data} />);
    expect(screen.getByTestId('product-grid')).toHaveClass('gridSizeZoomOut');
  });
});
