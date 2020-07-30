import { apiUrl } from "../../config/constants";
import axios from "axios";

export function totalPrice(totalPrice) {
  return {
    type: "TOTAL_PRICE",
    payload: totalPrice,
  };
}
export function invoicePaid(data) {
  return {
    type: "INVOICE_PAID",
    payload: data,
  };
}

export function pricingFetched(price) {
  return {
    type: "PRICING_FETCHED",
    payload: price,
  };
}

export const fetchPricing = (profileId) => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `${apiUrl}/pricing?profileId=${profileId}`
    );
    console.log("response?", response.data.pricing);
    dispatch(pricingFetched(response.data.pricing.centsPerWord));
  };
};
