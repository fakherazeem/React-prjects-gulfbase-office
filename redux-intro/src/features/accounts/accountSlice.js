const initialStateAccount = {
  balance: 0,
  loan: 0, // <-- 'laon' ko 'loan' kar diya
  loanPurpose: "",
};

export default function reducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "loan/request":
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    // FIX: Type ko Action Creator se match kiya
    case "loan/payLoan": 
      return { 
        ...state, 
        balance: state.balance - state.loan, // Loan pay karne par balance kam hona chahiye
        loan: 0, 
        loanPurpose: "" 
      };
    default:
      return state;
  }
}

// Actions
export function deposit(amount, currency = "USD") {
  const parsedAmount = Number(amount);
  if (!parsedAmount || parsedAmount <= 0) {
    return { type: "account/deposit", payload: 0 };
  }

  if (currency === "USD") {
    return { type: "account/deposit", payload: parsedAmount };
  }

  return async function (dispatch, getState) {
    try {
      const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
      const data = await res.json();
      const rate = data.rates?.USD;
      if (!rate) throw new Error("Currency rate not available");

      dispatch({ type: "account/deposit", payload: parsedAmount * rate });
    } catch (error) {
      console.error("Deposit currency conversion failed:", error);
      // falls back to USD amount if conversion fails
      dispatch({ type: "account/deposit", payload: parsedAmount });
    }
  };
}

export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

export function requestLoan(amount, purpose) {
  return {
    type: "loan/request",
    payload: { amount, purpose },
  };
}

export function payLoan() {
  return {
    type: "loan/payLoan", // <-- Ye wahi hona chahiye jo reducer mein hai
  };
}