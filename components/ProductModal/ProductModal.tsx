"use client"
import { FC, MouseEvent} from "react"

import styles from "./ProductModal.module.scss";
import { ProductCard } from "@/Types/ProductCard/ProductCard";
import Image from "next/image";

type ProductModalProps = {
  setOpen: (type?: "Shop" | "LinkMe") => void;
  open: boolean,
  CardData: ProductCard,
}

export const ProductModal: FC<ProductModalProps> = ({
  open,
  setOpen,
  CardData
}) => {
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
            <div>
              <Image
                className={styles["modal__content-photo-image"]}
                src={CardData.image}
                alt={CardData.name}
                width={950}
                height={200}
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