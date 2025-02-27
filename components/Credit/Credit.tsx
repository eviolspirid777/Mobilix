import Image from "next/image";
import styles from "./Credit.module.scss";
import { FC } from "react";

type CreditProps = {
  isMobile: boolean
}

export const Credit: FC<CreditProps> = ({
  isMobile
}) => {
  return (
    <div
      className={styles["credit-container"]}
    >
      <div
        className={styles["credit-container-info"]}
      >
        <div
          className={styles["credit-container-info-headers"]}
        >
          <h1>Рассрочка</h1>
          <h1>24 месяца</h1>
        </div>
        <span>Подробнее по телефону</span>
      </div>
      <Image
        className={styles["credit-container-image"]}
        src="/Credit/Watch.png"
        alt="Apple watch ultra"
        width={isMobile ? 317 : 1000}
        height={140}
      />
    </div>
  )
}