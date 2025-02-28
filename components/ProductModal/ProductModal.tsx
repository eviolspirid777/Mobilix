"use client"
import { FC, MouseEvent, useLayoutEffect, useState} from "react"

import styles from "./ProductModal.module.scss";
import { ProductCard } from "@/Types/ProductCard/ProductCard";
import Image from "next/image";

type ProductModalProps = {
  setOpen: (type?: "Shop" | "LinkMe") => void;
  open: boolean,
  CardData: ProductCard,
  isMobile: boolean,
}

export const ProductModal: FC<ProductModalProps> = ({
  open,
  setOpen,
  CardData,
  isMobile
}) => {
  const [selectedImage, setSelectedImage] = useState<string>()

  useLayoutEffect(() => {
    setSelectedImage(CardData.images[0])
  }, [CardData])

  const handleOuterClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setOpen(undefined);
  }

    return (
      <div
        className={`${styles["modal"]} ${open && styles["active"]}`}
        onClick={handleOuterClick}
      >
        <div
          className={styles["modal__content"]}
          onClick={event => event.stopPropagation()}
        >
          <div
            className={styles["modal__content-photo"]}
          >
            <div
              className={styles["modal__content-photo-block"]}
            >
              <div
                className={styles["modal__content-photo-block-minies"]}
              >
                {
                  CardData.images.map((image, index) => 
                  <Image
                    key={index}
                    src={image}
                    alt={CardData.name}
                    width={65}
                    height={80}
                    onClick={setSelectedImage.bind(null, image)}
                    style={selectedImage === image ? {
                    } : {
                      opacity: "0.5"
                    }}
                  />)
                }
              </div>
              <Image
                className={styles["modal__content-photo-block-image"]}
                src={selectedImage ?? ""}
                alt={CardData.name}
                width={isMobile ? 100 : 950}
                height={100}
              />
            </div>
            <div
              className={styles["modal__content-photo-undertext"]}
            >
              <span>
                Доставка сегодня 
              </span>
              <strong>бесплатно</strong>
            </div>
          </div>
          <div
            className={styles["modal__content-information"]}
          >
            <div className={styles["modal__header"]}>{CardData.name}</div>
            <div className={styles["modal__price"]}>{new Intl.NumberFormat("ru").format(CardData.price)} ₽</div>
            <div
              className={styles["modal__content-information__btn-block"]}
            >
              <button
                className={styles["modal__button-buy"]}
                onClick={setOpen.bind(null, "Shop")}
              >
                Купить
              </button>
              <button
                className={styles["modal__button-credit"]}
                onClick={setOpen.bind(null, undefined)}
              >
                В рассрочку
              </button>
            </div>
            <span
              className={styles["modal__available"]}
            >
              ✓ В наличии
            </span>
            <ul
              className={styles["modal__list"]}
            >
              <li>
                <h5>Характеристики</h5>
              </li>
              <li>
                <strong>
                  Цвет
                </strong>
                &mdash;
                <span>
                  {CardData.color}
                </span>
              </li>
              <li>
                <strong>
                  Встроенная память
                </strong>
                &mdash;
                <span>
                  {CardData.memory}
                </span>
              </li>
              <li>
                <strong>
                  Количество SIM-карт
                </strong>
                &mdash;
                <span>
                  {CardData.simCard}
                </span>
              </li>
              <li>
                <strong>
                  Основная камера
                </strong>
                &mdash;
                <span>
                  {CardData.camera?.back}
                </span>
              </li>
              <li>
                <strong>
                  Фронтальная камера
                </strong>
                &mdash;
                <span>
                  {CardData.camera?.front}
                </span>
              </li>
              <li>
                <strong>
                  Аккумулятор
                </strong>
                &mdash;
                <span>
                  {CardData.accumulator}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}