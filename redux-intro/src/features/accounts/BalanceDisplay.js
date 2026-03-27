import { useSelector } from "react-redux";

const selectBalance = (state) => state.account.balance;

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const balance = useSelector(selectBalance);

  return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;
