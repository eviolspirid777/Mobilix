"use client"
import { FC, useEffect, useState } from "react"
import { createPortal } from "react-dom"

import styles from "./ProductModal.module.scss";

type ProductModalProps = {
  setOpen: () => void;
  open: boolean
}

export const ProductModal: FC<ProductModalProps> = ({
  open,
  setOpen
}) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, [])

  if(isRendered) {
    return (
      createPortal(
        <div className={styles["modal"]} id="productModal">
          <div className={styles["modal__content"]}>
            <span className={styles["modal__close"]} id="closeModal">&times;</span>
            <div className={styles["modal__header"]}>iPhone 16 Pro Max</div>
            <div className={styles["modal__body"]}>
              <p><strong>Цена:</strong> 119 490 ₽</p>
              <p><strong>Цвет:</strong> Золотой</p>
              <p><strong>Встроенная память:</strong> 256 ГБ</p>
              <p><strong>Основная камера:</strong> 48 Мп</p>
              <p><strong>Фронтальная камера:</strong> 12 Мп</p>
              <p><strong>Аккумулятор:</strong> 4685 мАч</p>
            </div>
            <div className={styles["modal__actions"]}>
              <button className={styles["buy"]}>Купить</button>
              <button className={styles["reserve"]}>В резерв</button>
            </div>
          </div>
        </div>,
        document.body
      )
    )
  }

  return (
    <>
    </>
  )
}