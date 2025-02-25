import styles from "./Delivery.module.scss";
import Image from "next/image";


export const Delivery = () => {
  return (
    <div
      className={styles["delivery-block"]}
    >
      <h3>Доставка по Краснодару</h3>
      <span>Бесплатно.</span>
      <Image
        className={styles["delivery-block-image"]}
        src="/Tiles/Airpods.png"
        alt="Iphones"
        width={275}
        height={196}
      />
    </div>
  )
}