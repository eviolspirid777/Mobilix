"use client"
import { FC, MouseEvent} from "react"

import styles from "./LinkWithMe.module.scss";
import Image from "next/image";

type LinkWithMeProps = {
  setOpen: () => void;
  open: boolean,
  type?: "Shop" | "LinkMe"
}

export const LinkWithMe: FC<LinkWithMeProps> = ({
  open,
  setOpen,
  type = "LinkMe"
}) => {
  const handleOuterClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setOpen();
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
            className={styles["modal__content-information"]}
          >
            <h3>
              {type === "LinkMe" ? "Расскажем в WhatsApp о лучших условиях" : "Товар добавлен в корзину!"}
            </h3>
            <span>
              {
                type === "LinkMe" ?
                "Об условиях рассрочки, Trade-IN и действующих скидках и акциях!" :
                "Мы уточним удобное время доставки, просто оставьте номер телефона"
              }
            </span>
            <input type="text" placeholder="Номер"/>
            <input type="text" placeholder="Имя"/>
            <input type="text" placeholder="Пожелания"/>
            <button>
              Свяжитесь со мной
            </button>
          </div>
          <div
            className={styles["modal__content-photo"]}
          >
            <Image
              className={styles["modal__content-photo-image"]}
              src="/Hand/hand.png"
              alt="Рука"
              width={900}
              height={500}
            />
          </div>
        </div>
      </div>
    )
}