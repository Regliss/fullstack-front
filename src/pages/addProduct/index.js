import React, { useState, UseEffect } from "react";
import productService from "../../services/product.service";
import genreService from "../../services/genre.service";
import AccueilTitle from "../../components/UI/AccueilTitle/AccueilTitle";
import Input from "../../components/UI/Input/Input";
import AccueilButton from "../../components/UI/AccueilButton/AccueilButton";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const [product, setProduct] = useState();

  // useEffect(()=>{
  //   genreService.getGenres()
  //   .then((data) => {
  //       setGenres(data);
  //       console.log(data);
  //   });
  //   }, [])

  const handleSubmit = (e) => {
    console.log(product);
    e.preventDefault();
    productService
      .addAdminProduct(product)
      .then((data) => {
        // localStorage.setItem("token", JSON.stringify(data.token));
        console.log(data);
        router.push("/productAdmin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.add_product}>
      <form className={styles.add_product_form} onSubmit={(e) => handleSubmit(e)}>
        <AccueilTitle title="Create a new product" />
        <Input
          type="text"
          label="title"
          id="title"
          name="title"
          placeholder="Title"
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />
        <Input
          type="text"
          label="img"
          id="img"
          name="img"
          placeholder="Image"
          onChange={(e) => setProduct({ ...product, img: e.target.value })}
        />
        <Input
          type="text"
          label="trailer"
          id="trailer"
          name="trailer"
          placeholder="Trailer"
          onChange={(e) => setProduct({ ...product, trailer: e.target.value })}
        />
        <Input
          type="text"
          label="age"
          id="age"
          name="age"
          placeholder="Age"
          onChange={(e) => setProduct({ ...product, age: e.target.value })}
        />
        <Input
          type="text"
          label="language"
          id="language"
          name="language"
          placeholder="Language"
          onChange={(e) => setProduct({ ...product, language: e.target.value })}
        />
        <Input
          type="text"
          label="releaseDate"
          id="releaseDate"
          name="releaseDate"
          placeholder="releaseDate"
          onChange={(e) => setProduct({ ...product, releaseDate: e.target.value })}
        />
        <Input
          type="text"
          label="duration"
          id="duration"
          name="duration"
          placeholder="duration"
          onChange={(e) => setProduct({ ...product, duration: e.target.value })}
        />
        <Input
          type="text"
          label="description"
          id="description"
          name="description"
          placeholder="description"
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
        />
        <Input
          type="text"
          label="distribution"
          id="distribution"
          name="distribution"
          placeholder="distribution"
          onChange={(e) => setProduct({ ...product, distribution: e.target.value })}
        />
        <Input
          type="text"
          label="scriptwriter"
          id="scriptwriter"
          name="scriptwriter"
          placeholder="scriptwriter"
          onChange={(e) => setProduct({ ...product, scriptwriter: e.target.value })}
        />
        <AccueilButton label="Create" onClick={()=>handleSubmit}/>
      </form>
      <br></br>
    </div>
  );
};

export default Index;