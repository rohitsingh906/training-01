// // import logo from "./logo.svg";
// import "./LoginRegisterContainer.scss";
// import Login from "../Login/Login"
// import logo from "../../E-Cart.png"
// import Register from "../Register/Register";
// import { useState } from "react";

// function LoginRegisterContainer(props) {
//     const [isRegisterUser, setRegisteredUser] = useState(true)
//     const navigateToLoginPage = () => {
//         setRegisteredUser(true);
//     };

//     const navigateToRegisterPage = () => {
//         setRegisteredUser(false);
//     };
//     return (
//         <div className="login-Register-container">
//             <div className="form-container">
//                 <div className="logo">
//                     <img src={logo} alt="Logo" />
//                 </div>
//                     {isRegisterUser ? (
//                         <Login navigateToRegisterPage={navigateToRegisterPage} setUserAuthenticatedStatus={props.setUserAuthenticatedStatus} />
//                     ) : (
//                         <Register navigateToLoginPage={navigateToLoginPage} />
//                     )}
//             </div>
//         </div>
//     );
// }

// export default LoginRegisterContainer;



import { useState } from "react";
import "./LoginRegisterContainer.scss";
import Login from "../Login/Login";
import Register from "../Register/Register";
import logo from "../../E-Cart.png";

function LoginRegisterContainer({ setUserAuthenticatedStatus }) {
    const [isRegisterUser, setRegisteredUser] = useState(true);

    return (
        <div className="auth-container">
            {/* Left Side - Branding Section */}
            <div className="auth-branding">
                <img src={logo} alt="E-Cart Logo" className="auth-logo" />
                <h1>Welcome to E-Cart</h1>
                <p>Your one-stop shopping destination.</p>
            </div>

            {/* Right Side - Login/Register Form Section */}
            <div className="auth-form-container">
                <div className="auth-toggle">
                    <button
                        className={`toggle-btn ${isRegisterUser ? "active" : ""}`}
                        onClick={() => setRegisteredUser(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`toggle-btn ${!isRegisterUser ? "active" : ""}`}
                        onClick={() => setRegisteredUser(false)}
                    >
                        Register
                    </button>
                </div>

                <div className={`auth-form ${isRegisterUser ? "fade-in" : "fade-out"}`}>
                    {isRegisterUser ? (
                        <Login 
                            navigateToRegisterPage={() => setRegisteredUser(false)} 
                            setUserAuthenticatedStatus={setUserAuthenticatedStatus} 
                        />
                    ) : (
                        <Register 
                            navigateToLoginPage={() => setRegisteredUser(true)} 
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default LoginRegisterContainer;

