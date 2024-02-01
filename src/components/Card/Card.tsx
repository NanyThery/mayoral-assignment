import { Clothes } from 'types/clothes.interface';
import styles from './Card.module.css';
import Image from 'next/image';

import CustomButton from '../UI/CustomButton/CustomButton';

interface CardProps {
  product: Clothes;
}

export function Card({ product }: CardProps) {
  const {
    isReduced,
    title,
    priceEur,
    comparedPriceEur,
    colors,
    featuredImage,
    differencePercentage,
  } = product;
  const buttonText = 'AÑADIR';
  const moreColorsText = 'más colores';

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image className={styles.image} src={featuredImage} layout="fill"></Image>
      </div>
      <div className={styles.infoWrapper}>
        <p className={`small ${styles.productTitle}`}>{title}</p>
        <div className={styles.productPriceContainer}>
          {isReduced && (
            <span className={`${styles.productPrice} ${styles.comparedPrice}`}>
              {comparedPriceEur}
            </span>
          )}
          <span className={`${styles.productPrice} ${isReduced && styles.productPriceReduced}`}>
            {priceEur}
            {isReduced && `(${differencePercentage})`}
          </span>
        </div>
        <p className={styles.secondaryText}>{colors.length > 0 && moreColorsText}</p>

        <CustomButton onClick={() => {}} variant="primary">
          <p>{buttonText}</p>
        </CustomButton>
      </div>
    </div>
  );
}
