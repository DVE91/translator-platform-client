const initialState = {
  pricing: null,
  totalPrice: null,
  paid: false,
};

export default function PaymentSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "PRICING_FETCHED":
      return { ...state, pricing: action.payload };
    case "TOTAL_PRICE":
      return { ...state, totalPrice: action.payload.toFixed(2) };
    case "INVOICE_PAID":
      return { ...state, paid: action.payload };
    default:
      return state;
  }
}
