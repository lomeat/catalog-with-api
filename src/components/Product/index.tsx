import * as React from "react";
import { useDispatch } from "react-redux";

import {
  postFavoriteFail,
  postFavoriteSuccess,
} from "../../store/products/actions";
import styles from "./Product.module.scss";
import CartIcon from "../../assets/icons/cart.svg";
import CheckIcon from "../../assets/icons/check-2.svg";
import ComparsionIcon from "../../assets/icons/comparsion.svg";
import FavoriteIcon from "../../assets/icons/favorite.svg";
import FavoriteActiveIcon from "../../assets/icons/favorite-active.svg";
import StarIcon from "../../assets/icons/star.svg";
import productImage from "../../assets/icons/image.jpg";

type Props = {
  product: IProduct;
};

export const Product = ({ product }: Props) => {
  const dispatch = useDispatch();

  const addProductToFavorite = (productId: ProductId) =>
    dispatch(postFavoriteSuccess(productId));
  const failAddProductToFavorite = (productId: ProductId) =>
    dispatch(postFavoriteFail(productId));

  const toggleFavorite = (product: IProduct) => {
    if (product.inFav) {
      // Preview for fail request instead of removing from favorite
      failAddProductToFavorite(product.id);
    } else {
      addProductToFavorite(product.id);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles["stars"]}>
          <StarIcon className={`${styles["star-yellow"]} ${styles.star}`} />
          <StarIcon className={`${styles["star-yellow"]} ${styles.star}`} />
          <StarIcon className={`${styles["star-yellow"]} ${styles.star}`} />
          <StarIcon className={`${styles["star-gray"]} ${styles.star}`} />
          <StarIcon className={`${styles["star-gray"]} ${styles.star}`} />
        </div>
        <div className={styles.article}>Арт. 34534345</div>
      </div>
      <div className={styles.image}>
        <img src={productImage} alt="photo" />
      </div>
      <div className={styles["in-stock"]}>
        <CheckIcon />
        <span>В наличии</span>
      </div>
      <h3 className={styles.title}>
        Canon PowerShot SX400 IS с улучшенной матрицей и объективом
      </h3>
      <div className={styles.description}>
        <label>
          <span className={styles.name}>Физический размер</span>
          <span className={styles.value}>23.2 x 15.2 мм</span>
        </label>
        <label>
          <span className={styles.name}>Диафрагма</span>
          <span className={styles.value}>CMOS</span>
        </label>
        <label>
          <span className={styles.name}>Формат записи</span>
          <span className={styles.value}>RAW, JPEG, MP4 и другие</span>
        </label>
        <label>
          <span className={styles.name}>Фокусное расстояние</span>
          <span className={styles.value}>18-55 мм.</span>
        </label>
      </div>
      <div className={styles.price}>49 999 руб.</div>
      <div className={styles.bonuses}>+490 бонусов</div>
      <div className={styles["buttons"]}>
        <button className={`${styles["button-cart"]} ${styles.button}`}>
          <CartIcon />
          <span>Купить</span>
        </button>
        <div className={styles["buttons-other"]}>
          <button
            onClick={() => toggleFavorite(product)}
            className={`${styles["button-other"]} ${styles.button}`}
          >
            {product.inFav ? <FavoriteActiveIcon /> : <FavoriteIcon />}
          </button>
          <button
            className={`${styles["margin-left-20"]} ${styles["button-other"]} ${styles.button}`}
          >
            <ComparsionIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
