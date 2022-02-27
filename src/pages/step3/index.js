import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Step from "./Step";
import styles from "./index.module.scss";
import { loadStripe } from "@stripe/stripe-js";
import stripeService from "../../services/stripe.service";
import RegisterButton from "../../components/UI/RegisterButton/RegisterButton"
import Input from "../../components/UI/Input/Input";

const stripePromise = loadStripe("pk_test_51IYB3kKHE4A4HHrOPwry6jr7QSnFpODKJliEseS4NYAxmsuAnRfVkNgfdDcSEsMPPOqCEc5NhCGowDFhoy5D9zlu00jW1rgElH");

const Index = () => {

  const stepsData = {
    one: {
      image: {
        src: "https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png",
        alt: "step-1 image",
      },
      indicator: "STEP 1 OF 3",
      title: "Finish setting up your account",
      context:
        "Netflix is personalized for you. Create a password to watch on any device at any time.",
      icon: "",
      list: [],
    },
    two: {
      image: {},
      indicator: "STEP 1 OF 3",
      title: "Create a password to start your membership",
      context: "Just a few more steps and you're done! We hate paperwork, too.",
      icon: "",
      list: [],
    },
    three: {
      image: {
        src: "https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png",
        alt: "step-2 image",
      },
      indicator: "STEP 2 OF 3",
      title: "Choose your plan.",
      context: "",
      icon: "akar-icons:check",
      list: [
        "No commitments, cancel anytime.",
        "Everything on Netflix for one low price.",
        " Unlimited viewing on all your devices.",
      ],
    },
    four: {
      image: {
        src: "https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png",
        alt: "step-2 image",
      },
      indicator: "STEP 2 OF 3",
      title: "Choose the plan that’s right for you",
      context: "",
      icon: "akar-icons:check",
      list: [
        "Watch all you want. Ad-free.",
        "Recommendations just for you.",
        "Change or cancel your plan anytime.",
      ],
    },
  };

  const [account, setAccount] = useState({});
  const [plan, setPlan] = useState({label:"standard", price: 30});
  const [step, setStep] = useState(3);

  const handleConfirmation = async () => {
    // const token = localStorage.getItem('token');
    const payload = {
      total: 8.99,
      // count: count,
      // cart: cart
    }
    try {
      setStep(step + 1);
      const stripe = await stripePromise;
      const response = await stripeService.createSession(payload, plan);
      await stripe.redirectToCheckout({
        sessionId: response.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    console.log(`account ${account.email} ${account.password}`)
    console.log(step);
  },[account, step])

  const handleEmailChange = (event) => {
    //console.log({handleEmailChange});
    setAccount({ ...account, email: event.target.value })
  };

  const handlePasswordChange = (event) => {
    setAccount({ ...account, password: event.target.value })
  };

  const handleregister = (e) => {
    if (account.email!=="" && account.password!=="") {
      return console.log("FUCK YOU");
    }
      console.log(step)
      setStep(step + 1);
      console.log(step)
  }

  return (
    <div className={styles.register}>
      {step === 3 ? (
        <Step
          image={stepsData.three.image}
          indicator={stepsData.three.indicator}
          title={stepsData.three.title}
          className={styles.signup_list_icon}
        >
          <ul className={styles.step_list}>
            <li>
              <Icon icon="akar-icons:check" className={styles.check_icon} />
              No commitments, cancel anytime.
            </li>
            <li>
              <Icon icon="akar-icons:check" className={styles.check_icon} />
              Everything on Netflix for one low price.
            </li>
            <li>
              <Icon icon="akar-icons:check" className={styles.check_icon} />
              Unlimited viewing on all your devices.
            </li>
          </ul>
          <RegisterButton onClick={() => setStep(step + 1)} />
        </Step>
      ) : (
        <></>
      )}

      {step === 4 ? (
        <Step
          image={stepsData.four.image}
          indicator={stepsData.four.indicator}
          title={stepsData.four.title}
          className={styles.signup_list_icon}
        >
          <ul className={styles.step_list}>
            <li>
              <Icon icon="akar-icons:check" className={styles.check_icon} />
              Watch all you want. Ad-free.
            </li>
            <li>
              <Icon icon="akar-icons:check" className={styles.check_icon} />
              Recommendations just for you.
            </li>
            <li>
              <Icon icon="akar-icons:check" className={styles.check_icon} />
              Change or cancel your plan anytime.
            </li>
          </ul>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td></td>
                
                <td className={styles.radio}>
                  <input
                    type="radio"
                    name="input_radio"
                    className={styles.input_radio}
                    checked={plan === "standard"}
                    value="standard"
                    id="standard"
                    onChange={() => setPlan({label: "standart", price: 30 })}
                  />
                  <label htmlFor="standard">Standard</label>
                </td>
                <td className={styles.radio}>
                  <input
                    type="radio"
                    name="input_radio"
                    className={styles.input_radio}
                    checked={plan === "premium"}
                    value="premium"
                    id="premium"
                    onChange={() => setPlan({label: "premium", price: 60 })}
                  />
                  <label htmlFor="premium">Premium</label>
                </td>
              </tr>
              <tr>
                <td>Monthly price</td>
                <td>EUR30.</td>
                <td>EUR60.00</td>
              </tr>
              <tr>
                <td>Video quality</td>
                <td>Better</td>
                <td>Best</td>
              </tr>
              <tr>
                <td>Resolution</td>
                <td>1080p</td>
                <td>4K+HDR</td>
              </tr>
              <tr>
                <td>Watch on your TV, computer, mobile phone and tablet</td>
                <td>
                  <span>Yes</span>
                </td>
                <td>
                  <span>Yes</span>
                </td>
              </tr>
            </tbody>
          </table>
          <RegisterButton onClick={() => setStep(step + 1)} />
        </Step>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Index;