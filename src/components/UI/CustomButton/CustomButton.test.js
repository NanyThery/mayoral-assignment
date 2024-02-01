import { render, screen } from '@testing-library/react';
import CustomButton from './CustomButton';

//TODO apply typescript to jest
describe('button on click must have been called', () => {
  it('should call onClick when clicked', () => {
    const mockedClick = jest.fn();
    render(<CustomButton onClick={mockedClick} title="My test button" />);
    screen.getByRole('button').click();
    expect(mockedClick).toHaveBeenCalledTimes(1);
  });

  it('should not do anything when disabled', () => {
    const mockedClick = jest.fn();
    render(<CustomButton onClick={mockedClick} title="My test button" disabled={true} />);
    screen.getByRole('button').click();
    expect(mockedClick).toHaveBeenCalledTimes(0);
  });
});
