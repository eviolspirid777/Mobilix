import { type ProductCard as ProductCardType } from "@/Types/ProductCard/ProductCard";
import Image from "next/image";
import { FC } from "react";

import styles from "./ProductCard.module.scss"

type ProductCardProps = {
  CardData: ProductCardType,
  onClick: (card: ProductCardType) => void;
}

export const ProductCard: FC<ProductCardProps> = ({
  CardData,
  onClick
}) => {
  const formatPrice = () => {
    return new Intl.NumberFormat("ru").format(CardData.price)
  }

  return (
    <div
      className={styles["product-card-container"]}
    >
      <div
        className={styles["product-card-container-image-block"]}
      >
        {
          CardData.images[0] && 
          <Image
            src={CardData.images[0]}
            alt={CardData.name}
            width={500}
            height={200}
          />
        }
      </div>
      <div
        className={styles["product-card-container-information"]}
      >
        <strong>
          {CardData.name}
        </strong>
        <span>
          {CardData.memory}
        </span>
        <span>
          {formatPrice()} ₽
        </span>
      </div>
      <button
        onClick={onClick.bind(null, CardData)}
      >
        Купить
      </button>
    </div>
  )
}