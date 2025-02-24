import Image from "next/image";
import styles from "./index.module.scss";

export default function Main() {
  

  return (
    <div
      className={styles["mobilix-block"]}
    >
      <header
        className={styles["mobilix-block-header"]}
      >
        <Image
          src="/Logo.png"
          alt="Mobilix"
        />
        <nav
          className={styles["mobilix-block-header-nav-menu"]}
        >
          <ul>
            <li>Каталог</li>
            <li>Акции</li>
            <li>Рассрочка</li>
          </ul>
        </nav>
        <span>+7(988) 559 39 56</span>
      </header>
      <main
        className={styles["mobilix-block-main"]}
      >
        <Image
          src="/Swiper_Slide.jpg"
          alt="Айфон"
        />
        <h3>iPhone 16 Pro Max</h3>
        <h4>Технологии будущего</h4>
        <button>Купить</button>
      </main>
      <footer
        className={styles["mobilix-block-footer"]}
      >
      
      </footer>
    </div>
  );
}
