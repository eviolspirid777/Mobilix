import { ProductCard } from "@/Types/ProductCard/ProductCard";
import { ConfigProvider, Carousel } from "antd";
import { FC, MouseEvent } from "react";
import Image from "next/image";

import styles from "./ProductModalMobile.module.scss"

type ProductModalMobileProps = {
  setOpen: (type?: "Shop" | "LinkMe") => void;
  open: boolean,
  CardData: ProductCard,
}

export const ProductModalMobile: FC<ProductModalMobileProps> = ({
  open,
  setOpen,
  CardData,
}) => {
  const handleOuterClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setOpen(undefined);
  }

  const handleBuy = () => {
    if("ym" in window && typeof window.ym === "function") {
      window.ym(100313407,'reachGoal','onclick')
    }
    setOpen("Shop")
  }

  const handleCredit = () => {
    if("ym" in window && typeof window.ym === "function") {
      window.ym(100313407,'reachGoal','installment')
    }
    setOpen("LinkMe")
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
              <ConfigProvider
                theme={{
                  components: {
                    Carousel: {
                      dotHeight: 3,
                      dotWidth: 10,
                      dotActiveWidth: 25,
                      colorBgContainer: "#4D85FF"
                    }
                  }
                }}
              >
                <Carousel
                  key={CardData.images.length}
                  adaptiveHeight
                  style={{
                    maxHeight: "40vh",
                    maxWidth: "100%",
                    width: "100%",
                    overflow: "hidden"
                  }}
                >
                {
                  CardData.images.map((image, index) => {
                    return (
                      <Image
                        className={styles["modal__content-photo-block-image"]}
                        key={index}
                        src={image}
                        alt={CardData.name}
                        width={55}
                        height={80}
                      />
                    )
                  })
                }
                </Carousel>
              </ConfigProvider>
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
                onClick={handleBuy}
              >
                Купить
              </button>
              <button
                className={styles["modal__button-credit"]}
                onClick={handleCredit}
              >
                В рассрочку
              </button>
            </div>
            <span
              className={styles["modal__available"]}
            >
              ✓ В наличии
            </span>
            <div
              className={styles["modal__content-photo-undertext"]}
            >
              <span>
                Доставка сегодня 
              </span>
              <strong>бесплатно</strong>
            </div>
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