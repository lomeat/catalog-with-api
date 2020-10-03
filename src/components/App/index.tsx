import * as React from "react";

import styles from "./App.module.scss";
import { ProductsList } from "../ProductsList";
import { FiltersList } from "../FiltersList";

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ProductsList />
        <FiltersList />
      </div>
    </div>
  );
};
