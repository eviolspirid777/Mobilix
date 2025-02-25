import { type ProductCard as ProductCardType } from "@/Types/ProductCard/ProductCard";
import Image from "next/image";
import { FC, useState } from "react";

import styles from "./ProductCard.module.scss"

type ProductCardProps = {
  CardData: ProductCardType,
  onClick: (card: ProductCardType) => void;
}

export const ProductCard: FC<ProductCardProps> = ({
  CardData,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = () => {
    return new Intl.NumberFormat("ru").format(CardData.price)
  }

  return (
    <div
      className={styles["product-card-container"]}
      onMouseEnter={setIsHovered.bind(this, true)}
      onMouseLeave={setIsHovered.bind(this, false)}
    >
      <Image
        className={styles["product-card-container-image"]}
        src={CardData.image}
        alt={CardData.name}
        width={500}
        height={200}
      />
      { isHovered ?
        <>
          <button
            onClick={onClick.bind(null, CardData)}
          >
            Купить
          </button>
        </> :
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
      }
    </div>
  )
}