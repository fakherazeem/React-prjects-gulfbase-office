import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit } from "./accountSlice";
import { withdraw } from "./accountSlice";
import { requestLoan } from "./accountSlice";
import { payLoan } from "./accountSlice";
function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");
  const { loan: currentLoan, loanPurpose: currentLoanPurpose } = useSelector(
    (store) => store.account,
  );
  const dispatch = useDispatch();

  function handleDeposit() {
    if (!depositAmount) return;
    dispatch(deposit(depositAmount, currency)); // Currency bhi bhejna zaroori hai agar logic hai
    setDepositAmount(""); // Input clear karne ke liye
    setCurrency("USD"); // Currency ko default par reset karne ke liye
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) return;
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount(""); // Input clear karne ke liye
  }

  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) return;
    dispatch(requestLoan(loanAmount, loanPurpose));
    // Loan request ke baad inputs khali kar dein
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    dispatch(payLoan());
    // Agar pay karne ke baad bhi kuch local fields hain to unhein yahan reset karein
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
          <option value="EUR">Euro</option>
          <option value="GBP">British Pound</option>
          <option value="JPY">Japanese Yen</option>
          <option value="INR">Indian Rupee</option>
          <option value="AUD">Australian Dollar</option>
          <option value="CAD">Canadian Dollar</option>
          <option value="CHF">Swiss Franc</option>
          <option value="CNY">Chinese Yuan</option>

        </select>

        <button onClick={handleDeposit}>Deposit {depositAmount}</button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        <div>
          <span>
            Pay back {currentLoan} {currentLoanPurpose}
          </span>
          <button onClick={handlePayLoan}>Pay loan</button>
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;
