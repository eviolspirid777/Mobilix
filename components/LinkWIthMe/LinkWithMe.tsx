"use client"
import { FC, MouseEvent, useState} from "react"
import { ProductCard as ProductCardType} from "@/Types/ProductCard/ProductCard";
import { PatternFormat } from "react-number-format"; // Импортируем NumericFormat
import styles from "./LinkWithMe.module.scss";
import Image from "next/image";
import axios from "axios";
import { TelegramIcon } from "../shared/TelegramIcon";
import { WhatsappIcon } from "../shared/WhatsappIcon";

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
  const [phoneValidationString, setPhoneValidationString] = useState<string>();
  const [wishes, setWishes] = useState<string>();
  const [isPhoneError, setIsPhoneError] = useState<boolean>(false); // Состояние ошибки для телефона

  const handleOuterClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setOpen();
  }

  const handleSubmit = async () => {
    if (!phone || phone.trim() === "") {
      setIsPhoneError(true);
      return;
    }

    if(phoneValidationString?.length !== 10) {
      setIsPhoneError(true);
      return;
    }

    try {
      const response = await axios.post("/api/telegramProxy", {
        phone,
        name,
        wishes,
        itemName: item?.name,
      });
      if (response.data.success) {
        setOpen();
      }
      if("ym" in window && typeof window.ym === "function") {
        window.ym(100313407,'reachGoal','forma')
      }
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
    }
  };

  const handlePhoneNumber = (values: {formattedValue: string ,value: string}) => {
    setPhoneValidationString(values.value)
    setPhone(values.formattedValue);
    setIsPhoneError(false);
  };

  const handleRedirectClick = (key: "whatsapp" | "telegram") => {
    if(typeof window !== "undefined") {
      switch (key) {
        case "telegram": {
          window.open('https://t.me/mobilx_23', '_blank');
          break;
        }
        case "whatsapp": {
          window.open('https://wa.me/79933093956', '_blank');
        }
      }
    }
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
          <div style={{
            width:"100%",
            position:"relative"
          }}>
            <PatternFormat
              prefix="+7 "
              format="+7 (###) ###-##-##"
              placeholder={"+7 (___) ___-__-__ *"}
              onValueChange={handlePhoneNumber}
              value={phone}
              className={`${styles["input"]}`}
            />
            { isPhoneError &&
              <p
                className={styles["warning"]}
              >
                Неправильно введен номер телефона!
              </p>
            }
          </div>
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
            } : {
              marginTop: "-10px"
            }
            }
          >
            Свяжитесь со мной
          </button>
          <div
            className={styles["modal__content-information-contacts-block"]}
          >
            <a href="tel:+79885593956">+7(988) 559 39 56</a>
            <div
              className={styles["modal__content-information-contacts-block-icons-block"]}
            >
              <TelegramIcon
                onClick={handleRedirectClick.bind(null, "telegram")}
              />
              <WhatsappIcon
                onClick={handleRedirectClick.bind(null, "whatsapp")}
              />
            </div>
          </div>
          {
            isMobile && 
            <span
              className={styles["modal__content-information__tile"]}
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