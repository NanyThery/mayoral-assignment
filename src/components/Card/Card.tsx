import { Clothes } from 'types/clothes.interface';
import styles from './Card.module.css';
import Image from 'next/image';
import formatEuro from 'components/Utils/formatEuro';
import calculateDifferencePercentage from 'components/Utils/calculateDifferencePercentage';
import CustomButton from 'components/CustomButton/CustomButton';

interface CardProps {
  product: Clothes;
}

export function Card({ product }: CardProps) {
  const showReduced = product.comparedPrice > product.price;
  const buttonText = 'AÑADIR';
  const moreColorsText = 'más colores';

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image className={styles.image} src={product.featuredImage} layout="fill"></Image>
      </div>
      <div className={styles.infoWrapper}>
        <p className={`small ${styles.productTitle}`}>{product.title}</p>
        <div className={styles.productPriceContainer}>
          {showReduced && (
            <span className={`${styles.productPrice} ${styles.comparedPrice}`}>
              {formatEuro(product.comparedPrice)}
            </span>
          )}
          <span className={`${styles.productPrice} ${showReduced && styles.productPriceReduced}`}>
            {formatEuro(product.price)}
            {showReduced &&
              `(${calculateDifferencePercentage(product.price, product.comparedPrice)})`}
          </span>
        </div>
        <p className={styles.secondaryText}>{product.colors.length > 0 && moreColorsText}</p>

        <CustomButton title={buttonText} onClick={() => {}} variant="primary" />
      </div>
    </div>
  );
}
