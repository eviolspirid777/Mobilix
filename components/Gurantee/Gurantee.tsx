import { FC } from "react";
import styles from "./Gurantee.module.scss";
import Image from "next/image";

type GuranteeProps = {
  isMobile: boolean
}

export const Gurantee: FC<GuranteeProps> = ({
  isMobile
}) => {
  return (
    <div
      className={styles["gurantee-block"]}
    >
      <h3>Гарантия 365 дней</h3>
      <span>Бесплатно.</span>
      <Image
        className={styles["gurantee-block-image"]}
        src="/Tiles/Iphones.png"
        alt="Iphones"
        width={isMobile ? 332 : 392}
        height={186}
      />
    </div>
  )
}