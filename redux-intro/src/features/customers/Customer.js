import { useSelector } from "react-redux";
function Customer() {
  const customer=useSelector((store) => store.customer.fullname);
  return <h2>👋 Welcome, {customer.fullname}</h2>;

}

export default Customer;
