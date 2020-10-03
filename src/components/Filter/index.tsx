import * as React from "react";

import styles from "./Filter.module.scss";
import CheckboxIcon from "../../assets/icons/check.svg";

type Props = {
  filter: IFilter;
  toggleFilterChecked: (filter: IFilter) => void;
};

export const Filter = ({ filter, toggleFilterChecked }: Props) => {
  return (
    <label
      className={styles.wrapper}
      onClick={() => toggleFilterChecked(filter)}
    >
      <div
        className={
          filter.checked
            ? `${styles["checkbox-active"]} ${styles.checkbox}`
            : styles.checkbox
        }
      >
        {filter.checked ? <CheckboxIcon /> : ""}
      </div>
      <span className={styles.title}>{filter.title}</span>
    </label>
  );
};
