"use client"
import { FC, MouseEvent, useState} from "react"

import { ProductCard as ProductCardType} from "@/Types/ProductCard/ProductCard";
import styles from "./LinkWithMe.module.scss";
import Image from "next/image";
import axios from "axios";

type LinkWithMeProps = {
  setOpen: () => void;
  open: boolean,
  type?: "Shop" | "LinkMe",
  isMobile: boolean,
  item?: ProductCardType,
}

export const LinkWithMe: FC<LinkWithMeProps> = ({
  open,
  setOpen,
  type = "LinkMe",
  item,
  isMobile
}) => {
  const [name, setName] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [wishes, setWishes] = useState<string>();

  const handleOuterClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setOpen();
  }

  const handleSubmit = async () => {
    const botToken = "7072850601:AAH2MhtYa3SzxfoxDYt4xtAa2FOGb_pHlf4"; // Замените на токен вашего бота
    const chatId = "1175000586"; // Замените на ID вашего чата

    const message = `Новая заявка!\nИмя: ${name}\nТелефон: ${phone}\nПожелания: ${wishes}\nНаименование товара: ${item?.name}`;

    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
      setOpen();
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
    }
  };

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
            <h3
              style={(isMobile && type === "LinkMe") ? {
                fontSize: "1.3rem"
              } : {
                fontSize: "1.8rem"
              }}
            >
              {type === "LinkMe" ? "Расскажем в WhatsApp о лучших условиях" : "Товар добавлен в корзину!"}
            </h3>
            <span>
              {
                type === "LinkMe" ?
                "Об условиях рассрочки, Trade-IN и действующих скидках и акциях!" :
                "Мы уточним удобное время доставки, просто оставьте номер телефона"
              }
            </span>
            <input
              type="text"
              placeholder="Номер"
              onChange={event => setPhone(event.target.value)}
            />
            <input
              type="text"
              placeholder="Имя"
              onChange={event => setName(event.target.value)}
            />
            <input
              type="text"
              placeholder="Пожелания"
              onChange={event => setWishes(event.target.value)}
            />
            <button
              onClick={handleSubmit}
              style={(isMobile && type === "LinkMe") ? {
                marginTop: "0px"
              } : {}
              }
            >
              Свяжитесь со мной
            </button>
            {
              isMobile && 
              <span
                className={styles["modal__content-information__tile"]}
                style={(isMobile && type === "LinkMe") ? {
                  marginTop: "0px"
                } : {
  
                }}
              >
                Оплата после получения
              </span>
            }
          </div>
          {
            !isMobile &&
            <div
              className={styles["modal__content-photo"]}
            >
              <Image
                className={styles["modal__content-photo-image"]}
                src="/Hand/hand.png"
                alt="Рука"
                width={500}
                height={500}
              />
              <h2>
                Мобиликс
              </h2>
              <div
                className={styles["modal__content-photo-text-block"]}
                data-text="1"
              >
                Бесплатная доставка
              </div>
              <div
                className={styles["modal__content-photo-text-block"]}
                data-text="2"
              >
                Оплата после получения
              </div>
              <div
                className={styles["modal__content-photo-text-block"]}
                data-text="3"
              >
                Гарантийное обслуживание
              </div>
            </div>
          }
        </div>
      </div>
    )
}