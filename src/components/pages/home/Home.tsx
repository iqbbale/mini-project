import style from "./home.module.css"
import { Link } from "react-router-dom"
import Button from "../../ui/button"

const Home = () => {
    return (
        <main className={style.home}>
            <h1>Welcome to wpu cafe</h1>
            <Link to="/login">
                <Button>Login</Button>
            </Link>
        </main>
    );
}

export default Home;