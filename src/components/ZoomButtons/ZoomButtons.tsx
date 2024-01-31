import CustomButton from '../CustomButton/CustomButton';

function PlusImage() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z" />
    </svg>
  );
}

function MinusImage() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 9h24v6h-24z" />
    </svg>
  );
}

export default function ZoomButtons({ onZoomIn = () => {}, onZoomOut = () => {}, isZoomEnabled }) {
  return (
    <div>
      <CustomButton onClick={onZoomIn} disabled={isZoomEnabled} variant="neutral">
        <PlusImage />
      </CustomButton>
      <CustomButton onClick={onZoomOut} disabled={!isZoomEnabled} variant="neutral">
        <MinusImage />
      </CustomButton>
    </div>
  );
}
