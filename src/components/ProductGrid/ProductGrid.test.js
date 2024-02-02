import { render, screen } from '@testing-library/react';
import { ProductGrid } from './ProductGrid.tsx';
import data from '../../mocks/products.json';
import useUpdateParams from '../../hooks/useUpdateParams.tsx';

jest.mock('../../hooks/useUpdateParams');

describe('ProductGrid', () => {
  it('should apply zoomIn class when zoomIn is true', () => {
    render(<ProductGrid zoomIn={true} products={data} />);
    expect(screen.getByTestId('product-grid')).toHaveClass('gridSizeZoomIn');
  });
  it('should apply zoomOut class when zoomIn is false', () => {
    render(<ProductGrid zoomIn={false} products={data} />);
    expect(screen.getByTestId('product-grid')).toHaveClass('gridSizeZoomOut');
  });

  it('should show the NoResults component when there are no products', () => {
    useUpdateParams.mockReturnValue({ query: 'test', sort: '', updateUrlParams: () => undefined });
    render(<ProductGrid zoomIn={false} products={[]} />);
    expect(screen.getByTestId('no-results')).toBeInTheDocument();
  });
});
