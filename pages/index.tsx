import Image from "next/image";
import styles from "./index.module.scss";
import { goods } from "@/goods/goods";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { Credit } from "@/components/Credit/Credit";
import { Delivery } from "@/components/Delivery/Delivery";
import { Gurantee } from "@/components/Gurantee/Gurantee";
import { useState } from "react";
import { ProductModal } from "@/components/ProductModal/ProductModal";
import { ProductCard as ProductCardType} from "@/Types/ProductCard/ProductCard";
import { LinkWithMe } from "@/components/LinkWIthMe/LinkWithMe";

type OpenModalType = {
  ProductCard: boolean,
  LinkWithMe: boolean,
}

export default function Main() {
  const [selectedItem, setSelectedItem] = useState<ProductCardType>(goods[0])
  const [open, setOpen] = useState<OpenModalType>({
    LinkWithMe: false,
    ProductCard: false
  });
  const [type, setType] = useState<"Shop" | "LinkMe">();

  const handleOpenProductCard = (item: ProductCardType) => {
    setSelectedItem(item);
    setOpen(prev => ({...prev, ProductCard: true}));
  }

  const handleOpenLinkWithMe = (type?: "Shop" | "LinkMe") => {
    if(type) {
      setType(type);
      setOpen(prev => ({...prev, LinkWithMe: true}));
    }

    setOpen(prev => ({...prev, ProductCard: false}));
  }

  return (
    <>
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
            height={0}
            style={{
              maxHeight:"30px",
              alignSelf: "center"
            }}
            layout="intrinsic"
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
                  onClick={handleOpenProductCard}
                />
              )
            }
          </div>
          <Credit />
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexFlow: "row nowrap",
              gap: "20px"
            }}
          >
            <Gurantee />
            <Delivery />
          </div>
        </main>
        <footer
          className={styles["mobilix-block-footer"]}
        >
          <div
            className={styles["mobilix-block-footer-categories"]}
          >
            <span>
              Условия доставки
            </span>
            <span>
              Способы оплаты
            </span>
            <span>
              Наличие товара
            </span>
            <span>
              Программа Trade-IN
            </span>
          </div>
          <div
            className={styles["mobilix-block-footer-information"]}
          >
            <span>
              +7(988) 559 39 56
            </span>
            <span>
              +7(993) 309 39 56
            </span>
            <span>
              mobilx@gmail.com
            </span>
          </div>
        </footer>
      </div>
      <ProductModal
        open={open.ProductCard}
        setOpen={handleOpenLinkWithMe}
        CardData={selectedItem}
      />
      <LinkWithMe
        open={open.LinkWithMe}
        setOpen={setOpen.bind(null, prev => ({...prev, LinkWithMe: false }))}
        type={type}
      />
    </>
  );
}
