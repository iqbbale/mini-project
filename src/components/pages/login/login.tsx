import styles from "./login.module.css";
import Input from "../../ui/input";
import type { FormEvent } from "react";
import Button from "../../ui/button";
import { login } from "../../../services/auth.service";
import { setLocalStorage } from "../../../utils/LocalStorage";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const Payload = {
      email: form.email.value,
      password: form.password.value,
    };

    const result = await login(Payload);
    setLocalStorage('auth', result.token);

    return navigate('/orders')
  };
  return (
    <main className={styles.login}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form} onSubmit={handleLogin}>
          <Input
            label="Email"
            name="email"
            id="email"
            type="email"
            placeholder="Insert Email"
            required
          />
          <Input
            label="Password"
            name="password"
            id="password"
            type="password"
            placeholder="Insert password"
            required
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </main>
  );
};

export default Login;
