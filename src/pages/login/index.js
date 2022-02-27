import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import authService from "../../services/auth.service";
import Input from "../../components/UI/Input/Input";
import styles from "./index.module.scss";
import FormTitle from "../../components/UI/AccueilTitle/AccueilTitle";
import FormButton from "../../components/UI/AccueilButton/AccueilButton";

const Index = () => {
  const router = useRouter();
  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    authService
      .login(user)
      .then((data) => {
        console.log(data);
        if (data.message) {
          return false;
        }
        localStorage.setItem("token", data.token);
        router.push("/movies");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.login}>
      <form className={styles.login_form} onSubmit={(e) => handleSubmit(e)}>
        <FormTitle title="Log in"/>
        <Input
          type="email"
          label="email"
          id="email"
          name="email"
          placeholder="Email address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Input
          type="password"
          label="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <FormButton label="Sign in"/>
        <p className={styles.login_form_text}>
            New to Netflix ?
            <Link href="/register">
              <a>Sign up now.</a>
            </Link>
        </p>
        <p className={styles.login_form_captcha}>
            This page is protected by Google reCAPTCHA to ensure you are not a bot.
        </p>
      </form>
    </div>
  );
};

export default Index;