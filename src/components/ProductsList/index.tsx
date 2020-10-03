import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ProductsList.module.scss";
import { fetchProducts } from "../../store/products/actions";
import { Product } from "../Product";

export const ProductsList = () => {
  const products: ProductsState = useSelector(
    (state: CatalogState) => state.products
  );
  const dispatch = useDispatch();

  const getProducts = () => dispatch(fetchProducts());

  React.useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <div className={styles.wrapper}>
      {products.map((product: IProduct) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
