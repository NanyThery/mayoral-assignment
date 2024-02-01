import { PlusIcon, MinusIcon } from '../UI/Icons/Icons';
import CustomButton from '../UI/CustomButton/CustomButton';

interface ZoomButtonsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  isZoomEnabled: boolean;
}

export default function ZoomButtons({ onZoomIn, onZoomOut, isZoomEnabled }: ZoomButtonsProps) {
  return (
    <div>
      <CustomButton onClick={onZoomOut} disabled={!isZoomEnabled} variant="neutral">
        <MinusIcon />
      </CustomButton>
      <CustomButton onClick={onZoomIn} disabled={isZoomEnabled} variant="neutral">
        <PlusIcon />
      </CustomButton>
    </div>
  );
}
