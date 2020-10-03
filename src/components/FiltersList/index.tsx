import * as React from "react";
import { useDispatch } from "react-redux";

import styles from "./FiltersList.module.scss";
import {
  postFilterFail,
  postFilterSuccess,
} from "../../store/products/actions";
import mock from "./filtersMock";
import { Filter } from "../Filter";

export const FiltersList = () => {
  const dispatch = useDispatch();

  const getProductsWithFilters = (filters: FiltersState) =>
    dispatch(postFilterSuccess(filters));

  const failGetProductsWithFilters = (filters: FiltersState) =>
    dispatch(postFilterFail(filters));

  const [filters, setFilters] = React.useState(mock);

  const showResults = (filters: FiltersState) => {
    getProductsWithFilters(filters);
  };

  const clearFilters = (filters: FiltersState) => {
    setFilters(mock);
    // Preview of fail request
    failGetProductsWithFilters(filters);
  };

  const toggleFilterChecked = (filter: IFilter) => {
    setFilters((state) =>
      state.map((item) =>
        item.id === filter.id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles["button-show"]} ${styles.button}`}
        onClick={() => showResults(filters)}
      >
        Показать результаты
      </button>
      <button
        className={`${styles["button-clear"]} ${styles.button}`}
        onClick={() => clearFilters(filters)}
      >
        Очистить фильтр
      </button>
      <span className={styles.manufacturer}>Производитель</span>
      <div className={styles["filters-list"]}>
        {filters.map((filter: IFilter) => (
          <Filter
            key={filter.id}
            filter={filter}
            toggleFilterChecked={toggleFilterChecked}
          />
        ))}
      </div>
    </div>
  );
};
