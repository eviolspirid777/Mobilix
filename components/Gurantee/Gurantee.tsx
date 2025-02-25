import styles from "./Gurantee.module.scss";
import Image from "next/image";

export const Gurantee = () => {
  return (
    <div
      className={styles["gurantee-block"]}
    >
      <h3>Гарантия 365 дней</h3>
      <span>Бесплатно.</span>
      <Image
        src="/Tiles/Iphones.png"
        alt="Iphones"
        width={392}
        height={186}
      />
    </div>
  )
}