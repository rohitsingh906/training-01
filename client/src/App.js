import "./App.scss";
import { useState } from "react";
import LoginRegisterForm from "./components/LoginRegisterContainer/LoginRegisterContainer"
import AdminCustomerContainer from "./components/AdminCustomerContainer/AdminCustomerContainer";

function App() {
  let [isUserAuthenticated, setUserAuthorization] = useState(
    sessionStorage.getItem("isUserAuthenticated") === "true" || false
  );
  let [isAdmin, setAdmin] = useState(
    sessionStorage.getItem("isAdmin") === "true" || false
  );
  let [customerId, setCustomerId] = useState(
    sessionStorage.getItem("customerId") || undefined
  );

  const setUserAuthenticatedStatus = (isAdmin, customerId) => {
    setUserAuthorization(true);
    setAdmin(isAdmin);
    setCustomerId(customerId);
  };
  const handleLogout = () => {
    sessionStorage.removeItem("isUserAuthenticated");
    sessionStorage.removeItem("isAdmin");
    sessionStorage.removeItem("customerId");
    sessionStorage.removeItem("jwt_token");
    sessionStorage.removeItem("jwt_refresh_token");
    setUserAuthorization(false);
    setAdmin(false);
    setCustomerId(undefined);
  };
  return (
    <div class="background">
      {!isUserAuthenticated ? (
        <LoginRegisterForm setUserAuthenticatedStatus={setUserAuthenticatedStatus} />
      ) : (
        <>
            <div className="product-list-container1">
            <button onClick={handleLogout} className="login-button"><i class="fa fa-power-off"></i>Logout</button>
            {/* <a onClick={handkeLogiut} className="login-button"><i class="fa fa-power-off"></i>Log out</a> */}
            </div>

          <AdminCustomerContainer isAdmin={isAdmin} customerId={customerId} />
        </>

      )}
    </div>
  );
}

export default App;
