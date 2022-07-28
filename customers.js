import {
    ADD_CUSTOMER,
  RETRIEVE_CUSTOMERS,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
  } from "../actions/types";
  const initialState = [];
  function customerReducer(customers = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case ADD_CUSTOMER:
        return [...customers, payload];
      case RETRIEVE_CUSTOMERS:
        return payload;
      case UPDATE_CUSTOMER:
        return customers.map((customer) => {
          if (customer.id === payload.id) {
            return {
              ...customer,
              ...payload,
            };
          } else {
            return customer;
          }
        });
      case DELETE_CUSTOMER:
        return customers.filter(({ id }) => id !== payload.id);
      
      default:
        return customers;
    }
  };
  export default customerReducer;