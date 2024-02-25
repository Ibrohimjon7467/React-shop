import { useContext } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import NoResults from "@/components/empty-states/NoResults/NoResults";
import { CartContext, Init, ProductWeb, QuickPreview } from "@/context/ShoppingCart";

import ProductItem from "./ProductItem/ProductItem";
import styles from "./Products.module.scss";

type Props = {
  searchTerm: string;
  productsList: ProductWeb[];
  openModal: (prodect: QuickPreview) => void;
};

const Products = ({ searchTerm, productsList, openModal }: Props) => {
  const { addProduct } = useContext<Init>(CartContext);

  const term = searchTerm;

  const searchingFor = (searchText: string) => {
    return (x) => {
      return (
        x.name.toLowerCase().includes(searchText.toLowerCase()) || !searchText
      );
    };
  };

  const productsData = productsList
    .filter(searchingFor(term))
    .map((product) => {
      return (
        <CSSTransition
          key={product.id}
          classNames="fadeIn"
          timeout={{
            enter: 300,
            exit: 500,
          }}
        >
          <ProductItem
            price={product.price}
            name={product.name}
            image={product.image}
            id={parseInt(product.id, 10)}
            unit={product.unit}
            addToCart={addProduct}
            openModal={openModal}
          />
        </CSSTransition>
      );
    });

  let view;
  if (productsData.length <= 0 && term) {
    view = <NoResults />;
  } else {
    view = (
      <TransitionGroup component="div" className={styles.products}>
        {productsData}
      </TransitionGroup>
    );
  }
  return <div className={styles.productsWrapper}>{view}</div>;
};

export default Products;
