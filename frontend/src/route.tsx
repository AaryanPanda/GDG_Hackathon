import { Routes, Route } from "react-router-dom";
import App from "./App";
import  SignIn  from "./Pages/Signin";
import  SignUp  from "./Pages/Singup";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    )
}

export default Router