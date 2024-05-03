import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase/config'


const LoginPage = ({ setIsAuth }) => {

    const handleLogin = () => {
        signInWithPopup(auth, provider).then((data) => {
            setIsAuth(true);
            localStorage.setItem('token', data.user.refreshToken)
        })
    }
    return (
        <div className="container ">
            <div className="login">
                <h1>Chat Odası</h1>
                <p>Devam Etmek için Giriş Yapınız</p>

                <button onClick={handleLogin}>
                    <FcGoogle className="icon" />
                    <span>Google ile gir</span>
                </button>
            </div>
        </div>
    )

}
export default LoginPage;
