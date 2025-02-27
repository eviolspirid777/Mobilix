import { FC } from "react";
import styles from "./Delivery.module.scss";
import Image from "next/image";

type DeliveryProps = {
  isMobile: boolean
}

export const Delivery: FC<DeliveryProps> = ({
  isMobile
}) => {
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
        width={isMobile ? 182.56 : 275}
        height={196}
      />
    </div>
  )
}