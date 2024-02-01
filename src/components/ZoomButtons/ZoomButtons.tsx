import { PlusIcon, MinusIcon } from '../UI/Icons/Icons';
import CustomButton from '../UI/CustomButton/CustomButton';

export default function ZoomButtons({ onZoomIn = () => {}, onZoomOut = () => {}, isZoomEnabled }) {
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
