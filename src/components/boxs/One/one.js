import React from "react";
import Item from "../One/item";
import styles from "./One.module.scss";
import Signup from "../../UI/Button/Signup";

const One = () => {
  let ones = [
    {
      title: "Enjoy on your TV.",
      subtitle:
        "Watch on smart TVs, PlayStation, Xbox, Chrome-cast, Apple TV, Blu-ray players and more.",
      image: {
        src: "/images/home/home-tv.jpg",
        alt: "Tiger King on Netflix",
      },
    },
    {
      title: "Download your programmes to watch on the go.",
      subtitle: "Save your data and watch all your favourites offline.",
      image: {
        src: "/images/home/home-mobile.jpg",
        alt: "Watch Netflix on mobile ",
      },
    },
    {
      title: "Watch everywhere.",
      subtitle:
        "Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.",
      image: {
        src: "/images/home/home-imac.jpg",
        alt: "Money Heist on Netflix",
      },
    },
  ];

  return (
    <div className={styles.one}>
      {ones.map((one, index) => {
        return <Item key={index} one={one} />;
      })}
      <Signup />
    </div>
  );
};

export default One;