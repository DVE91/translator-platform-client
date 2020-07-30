const initialState = {
  totalPrice: null,
  paid: false,
};

export default function PaymentSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "TOTAL_PRICE_FETCHED":
      return { ...state, languages: action.payload };
    case "PAID":
      return { ...state, profiles: action.payload };
    default:
      return state;
  }
}
