"use client"
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
import { useMedia } from "react-use";

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
  const isMobile = useMedia('(max-width: 768px)');
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

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

  const handleBurgerMenuToggle = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <>
      <div
        className={styles["mobilix-block"]}
      >
        {
          isMobile ? 
          <header className={styles["mobilix-block-header"]}>
            <button onClick={handleBurgerMenuToggle}>
              {isBurgerMenuOpen ? "𐄂" : "☰"}
            </button>
            <Image
              className={styles["mobilix-block-header-photo"]}
              src="/Logo.png"
              alt="Mobilix"
              width={128}
              height={0}
              style={{
                maxHeight: "30px",
                alignSelf: "center",
              }}
              layout="intrinsic"
            />
            {isBurgerMenuOpen && (
              <nav className={styles["mobilix-block-header-nav-menu-mobile"]}>
                <ul>
                  <li>Каталог</li>
                  <li>Акции</li>
                  <li>Рассрочка</li>
                  <li>Trade-IN</li>
                  <li><span>+7(988) 559 39 56</span></li>
                </ul>
              </nav>
            )}
          </header> :
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
        }
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
            { isMobile ? 
              goods.map((good, index) => {
                return index < 6 ? 
                <ProductCard
                  key={index}
                  CardData={good}
                  onClick={handleOpenProductCard}
                /> : 
                null
              }) :
              goods.map((good, index) => 
                <ProductCard
                  key={index}
                  CardData={good}
                  onClick={handleOpenProductCard}
                />
              )
            }
          </div>
          {
            isMobile && 
            <div
              className={styles["mobilix-block-main-products-mobile__more-button-block"]}
            >
              <button>
                Еще
              </button>
            </div>
          }
          <Credit
            isMobile={isMobile}
          />
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              flexFlow: "row nowrap",
              gap: "20px"
            }}
          >
            <Gurantee
              isMobile={isMobile}
            />
            <Delivery
              isMobile={isMobile}
            />
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
        isMobile={isMobile}
      />
      <LinkWithMe
        open={open.LinkWithMe}
        setOpen={setOpen.bind(null, prev => ({...prev, LinkWithMe: false }))}
        type={type}
      />
    </>
  );
}
