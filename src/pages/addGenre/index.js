import React, { useState } from "react";
import genreService from "../../services/genre.service";
import AccueilTitle from "../../components/UI/AccueilTitle/AccueilTitle";
import Input from "../../components/UI/Input/Input";
import AccueilButton from "../../components/UI/AccueilButton/AccueilButton";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const [genre, setGenre] = useState();

  const handleSubmit = (e) => {
    console.log(genre);
    e.preventDefault();
    genreService
      .addAdminGenre(genre)
      .then((data) => {
        // localStorage.setItem("token", JSON.stringify(data.token));
        console.log(data);
        router.push("/genreAdmin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.add_genre}>
      <form className={styles.add_genre_form} onSubmit={(e) => handleSubmit(e)}>
        <AccueilTitle title="Create a new genre" />
        <Input
          type="text"
          label="title"
          id="title"
          name="title"
          placeholder="Title"
          onChange={(e) => setGenre({ ...genre, title: e.target.value })}
        />
        <AccueilButton label="Create" onClick={()=>handleSubmit}/>
      </form>
      <br></br>
    </div>
  );
};

export default index;