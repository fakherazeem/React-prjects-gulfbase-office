const intialCustomerState = {
  fullname: "",
  nationalId: "",
  createdAt: "",
};
export default function customerReducer(state = intialCustomerState, action) {
  switch (action.type) {
    case "customer/create":
      return {
        ...state,
        fullname: action.payload,
      };
    case "customer/update":
      return {
        ...state,
        fullname: action.payload.fullname || state.fullname,
        nationalId: action.payload.nationalId || state.nationalId,
      };
    default:
      return state;
  }
}

export function createCustomer(fullname, nationalId) {
  return {
    type: "customer/create",
    payload: {
      fullname,
      nationalId,
      createdAt: new Date().toISOString(),
    },
  };
}