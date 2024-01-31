import styles from './CustomButton.module.css';
interface CustomButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'neutral';
  children?: React.ReactNode;
}

export default function CustomButton({
  onClick = () => {},
  disabled,
  children,
  variant = 'primary',
}: CustomButtonProps) {
  return (
    <button className={`${styles[variant]}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
