import { useContext } from "react"
import { AuthContext } from "@/security/AuthProvider"
import NavPreLogin from "./NavPreLogin"
import NavIsLogin from "./NavIsLogin"

const LoginComponent = () => {
    const { user } = useContext(AuthContext);
    return (user) ? <NavIsLogin /> : <NavPreLogin />
}

export default LoginComponent