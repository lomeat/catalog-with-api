type ProductId = number;
type FilterId = number;

type Param = {
  name: string;
  value: string;
};

interface IProduct {
  id: ProductId;
  link: string;
  code: number;
  imgUrl: string;
  availability: boolean;
  title: string;
  params: Param[];
  inFav: boolean;
  inComparsion: boolean;
}

interface IFilter {
  id: FilterId;
  title: string;
  checked: boolean;
}

type FiltersState = Filter[];
type ProductsState = Product[];

interface CatalogState {
  products: ProductsState;
}

interface FetchProductsSuccessAction {
  type: "PRODUCTS_SUCCESS";
  products: ProductsState;
}

interface PostFavoriteSuccessAction {
  type: "FAVORITE_SUCCESS";
  productId: ProductId;
  message: string;
  inFav: boolean;
}

interface PostFavoriteFailAction {
  type: "FAVORITE_FAIL";
  productId: ProductId;
  message: string;
}

interface PostFilterSuccessAction {
  type: "FILTER_SUCCESS";
  products: ProductsState;
}

interface PostFilterFailAction {
  type: "FILTER_FAIL";
  message: string;
}

type Action =
  | PostFavoriteFailAction
  | PostFavoriteSuccessAction
  | PostFilterFailAction
  | PostFilterSuccessAction
  | FetchProductsSuccessAction;
