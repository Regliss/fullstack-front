import React, { UseState } from "react";
import authService from "../../services/auth.service";
import AccueilTitle from "../../components/UI/AccueilTitle/AccueilTitle";
import Input from "../../components/UI/Input/Input";
import CheckboxInput from "../../components/UI/CheckboxInput";
import AccueilButton from "../../components/UI/AccueilButton/AccueilButton";
import styles from "./index.module.scss";
import { UseRouter } from "next/router";

const index = () => {
  const router = UseRouter();
  const [user, setUser] = UseState({ isAdmin: false, subscribeDate: "" });

  const handleSubmit = (e) => {
    console.log(user);
    e.preventDefault();
    authService
      .addAdminUser(user)
      .then((data) => {
        localStorage.setItem("token", JSON.stringify(data.token));
        console.log(data);
        router.push("/userAdmin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.add_user}>
      <form className={styles.add_user_form} onSubmit={(e) => handleSubmit(e)}>
        <AccueilTitle title="Create a new user" />
        <Input
          type="text"
          label="firstName"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <Input
          type="text"
          label="lastName"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
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
        <CheckboxInput
          label="Is Admin"
          id="isAdmin"
          name="isAdmin"
          value={user.isAdmin}
          onChange={(e) => setUser({ ...user, isAdmin: !user.isAdmin })}
        />
        <AccueilButton label="Create" onClick={()=>handleSubmit}/>
      </form>
    </div>
  );
};

export default index;