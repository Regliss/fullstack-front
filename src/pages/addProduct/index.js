import React, { useState } from "react";
import styles from "./index.module.scss";
import Titlepage from "../../components/UI/Title/TitlePage";
import productService from "../../services/product.service";


const Index = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
//   const [isSubscribe, setIsSubscribe] = useState("");
//   const [isPremium, setIsPremium] = useState("");
//   const [subscribeDate, setSubscribeDate] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

//   const handleIsSubscribeChange = (event) => {
//     setIsSubscribe(event.target.value);
//   };

//   const handleIsPremiumChange = (event) => {
//     setIsPremium(event.target.value);
//   };

//   const handleSubscribeDateChange = (event) => {
//     setSubscribeDate(event.target.value);
//   };

  const handleIsAdminChange = (event) => {
    setIsAdmin(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    productService.addAdminProdyct(product)
    .then((data) => {
        console.log(data);
        router.push("/productAdmin");
      })
      .catch((err) => {
        console.log(err);
      });
}

  return (
    <div>
        <div>
            <Titlepage title="Add movie" />
        </div>
        <div className={styles.register}>
          <div className={styles.step_context}>
          </div>
          <form className={styles.form}>
            <div>
                <div><label for="lastName">LastName: </label></div>
                <div>
                    <input
                    type="text"
                    placeholder="LastName"
                    name="lastName"
                    id="lastName"
                    autoComplete="off"
                    value={lastName}
                    onChange={handleLastNameChange}
                    />
                </div>
              </div>
              <div><label for="firstname">FirstName: </label></div>
                <div>
                    <input
                    type="text"
                    placeholder="FirstName"
                    name="firstname"
                    id="firstName"
                    autoComplete="off"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    />
                </div>
            {/* <input
              type="checkbox"
              placeholder="IsSubscribe"
              name="isSubscribe"
              id="isSubscribe"
              autoComplete="off"
              value={isSubscribe}
              onChange={handleIsSubscribeChange}
            />
            <input
              type="checkbox"
              placeholder="IsPremium"
              name="isPremium"
              id="isPremium"
              autoComplete="off"
              value={isPremium}
              onChange={handleIsPremiumChange}
            />
            <input
              type="texte"
              placeholder="SubscribeDate"
              name="subscribeDate"
              id="subscribeDate"
              autoComplete="off"
              value={subscribeDate}
              onChange={handleSubscribeDateChange}
            /> */}
            <div>
                <div><label for="isAdmin">IsAdmin: </label></div>
                <div>
                <input
                type="checkbox"
                placeholder="IsAdmin"
                name="isAdmin"
                id="isAdmin"
                autoComplete="off"
                value={isAdmin}
                onChange={handleIsAdminChange}
                />
                </div>
            </div>
            <div>
                <div><label for="email">Email: </label></div>
                <div>
                <input
                type="text"
                placeholder="Email"
                name="email"
                id="email"
                autoComplete="off"
                value={email}
                onChange={handleEmailChange}
                />
                </div>
            </div>
            <div>
                <div><label for="password">Password: </label></div>
                <div>
                <input
                type="password"
                placeholder="Add a password"
                name="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                />
                </div>
            </div>
             <button className={styles.step_button} onClick={handleSubmit}>
            Create
          </button>
          </form>
        <></>
        </div>
    </div>
  );
};

export default Index;