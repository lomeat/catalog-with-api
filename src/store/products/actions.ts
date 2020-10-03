import { Dispatch } from "redux";

const baseUri = "https://my-json-server.typicode.com/aero-frontend/test-task";

const makeUrl = (query: string) => `${baseUri}/${query}`;

export const fetchProducts = () => async (dispatch: any) => {
  const res = await fetch(makeUrl("PRODUCTS_SUCCESS"));
  const { data } = await res.json();

  dispatch({
    type: "PRODUCTS_SUCCESS",
    products: data.products,
  });
};

export const postFavoriteFail = (productId: ProductId) => async (
  dispatch: Dispatch
) => {
  await fetch(makeUrl("FAVORITE_FAIL"), {
    method: "PUT",
    body: JSON.stringify(productId),
  });

  const res = await fetch(makeUrl("FAVORITE_FAIL"));
  const { data } = await res.json();

  dispatch({
    type: "FAVORITE_FAIL",
    message: data.message,
    productId,
  });
};

export const postFavoriteSuccess = (productId: ProductId) => async (
  dispatch: Dispatch
) => {
  await fetch(makeUrl("FAVORITE_SUCCESS"), {
    method: "PUT",
    body: JSON.stringify(productId),
  });

  const res = await fetch(makeUrl("FAVORITE_SUCCESS"));
  const { data } = await res.json();

  dispatch({
    type: "FAVORITE_SUCCESS",
    inFav: data.inFav,
    message: data.message,
    productId,
  });
};

export const postFilterFail = (filters: FiltersState) => async (
  dispatch: Dispatch
) => {
  await fetch(makeUrl("FILTER_FAIL"), {
    method: "PUT",
    body: JSON.stringify(filters),
  });

  const res = await fetch(makeUrl("FILTER_FAIL"));
  const { data } = await res.json();

  dispatch({
    type: "FILTER_FAIL",
    message: data.message,
  });
};

export const postFilterSuccess = (filters: FiltersState) => async (
  dispatch: Dispatch
) => {
  await fetch(makeUrl("FILTER_SUCCESS"), {
    method: "PUT",
    body: JSON.stringify(filters),
  });

  const res = await fetch(makeUrl("FILTER_SUCCESS"));
  const { data } = await res.json();

  dispatch({
    type: "FILTER_SUCCESS",
    products: data.products,
  });
};
