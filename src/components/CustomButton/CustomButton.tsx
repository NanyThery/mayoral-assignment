import styles from './CustomButton.module.css';
interface CustomButtonProps {
  onClick: () => void;
  title: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export default function CustomButton({
  onClick = () => {},
  title,
  disabled,
  variant = 'primary',
}: CustomButtonProps) {
  return (
    <button className={`${styles[variant]}`} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
}
