const initState: ProductsState = [
  {
    id: 1,
    link: "#",
    code: 34534345,
    imgUrl: "product.jpg",
    availability: true,
    title: "Canon PowerShot SX400 IS с улучшенной матрицей и объективом",
    params: [
      {
        name: "Физический размер",
        value: "23.2 x 15.2 мм",
      },
      {
        name: "Диафрагма",
        value: "CMOS",
      },
      {
        name: "Формат записи",
        value: "RAW, JPEG, MP4 и другие",
      },
      {
        name: "Фокусное расстояние",
        value: "18-55 мм",
      },
    ],
    inFav: true,
    inComparsion: false,
  },
];

export const productsReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case "PRODUCTS_SUCCESS":
      return action.products;
    case "FAVORITE_SUCCESS":
      return state.map((item) =>
        item.id === action.productId ? { ...item, inFav: action.inFav } : item
      );
    case "FAVORITE_FAIL":
      return state;
    case "FILTER_SUCCESS":
      return action.products;
    case "FILTER_FAIL":
      return state;
    default:
      return state;
  }
};
