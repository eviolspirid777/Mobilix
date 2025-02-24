import Image from "next/image";
import styles from "./index.module.scss";
import { goods } from "@/goods/goods";
import { ProductCard } from "@/components/ProductCard/ProductCard";

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
          width={184}
          height={28}
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
        <div
          className={styles["mobilix-block-main-slider"]}
        >
          <h3>iPhone 16 Pro Max</h3>
          <h4>
            Технологии будущего
          </h4>
          <button>
            Купить
          </button>
        </div>
        <div
          className={styles["mobilix-block-main-products"]}
        >
          {
            goods.map((good, index) => 
              <ProductCard
                key={index}
                CardData={good}
              />
            )
          }
        </div>
      </main>
      <footer
        className={styles["mobilix-block-footer"]}
      >
      
      </footer>
    </div>
  );
}
