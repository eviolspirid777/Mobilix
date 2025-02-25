import Image from "next/image";
import styles from "./Credit.module.scss";

export const Credit = () => {
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
        src="/Credit/Watch.png"
        alt="Apple watch ultra"
        width={1000}
        height={40}
      />
    </div>
  )
}