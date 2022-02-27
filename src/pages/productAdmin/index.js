import React, {useState, useEffect, useContext} from 'react';
import Titlepage from "../../components/UI/Title/TitlePage";
import styles from "./index.module.scss";
import productService from '../../services/product.service';
import Link from 'next/link';
import { useRouter } from "next/router";

const Index = () => {
    const router = useRouter();
    const [products, setProducts] = useState([]);

    // useEffect(()=>{
    //     productService.getProducts()
    // .then((data) => {
    //     setProducts(data);
    //     console.log(data);
    // });
    // }, [])

    async function handleDelete (product) {
        console.log("handle delete");
        //console.log(product._id);
        authService.deleteProduct(product)
        .then((data) => {
            console.log("data");
            router.push("/productAdmin");
          })
          .catch((err) => {
            console.log(err);
          });
      };
  
    return (
      
        <div>
      <Titlepage title="Product admin" />
      <div className={styles.product__content}>
          <>
          <div>
            <button className={styles.product_create}>
                <a href="/addProduct">Create</a>
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <td>Title</td>
                <td>Image</td>
                <td>Trailer</td>
                <td>Age</td>
                <td>Language</td>
                <td>ReleaseDate</td>
                <td>Duration</td>
                <td>Description</td>
                <td>Director</td>
                <td>Distribution</td>
                <td>Scriptwriter</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
            {

                products.map((product, index)=>{

                    return (<tr key={index}>
                    <td>{product.title}</td>
                    <td>{product.img}</td>
                    <td>{product.trailer}</td>
                    <td>{product.age ? product.age : "non"}</td>
                    <td>{product.language}</td>
                    <td>{product.releaseDate}</td>
                    <td>{product.duration}</td>
                    <td>{product.description}</td>
                    <td>{product.distribution}</td>
                    <td>{product.scriptwriter}</td>
                    <td>
                        <Link href="/productAdmin">
                            {/* <a><i className="fa-solid fa-trash-can"></i>edit</a> */}
                            <a><i className={styles.product_action}></i>edit</a>
                        </Link>
                    </td>
                    <td>
                        {/* <Link href="/productAdmin">
                            <a><i className="fa-solid fa-trash-can"></i>delete</a>
                        </Link> */}
                        <button className={styles.step_button} onClick={()=>handleDelete(product)}>
                        delete
                        </button>
                    </td>

                </tr>);
                })
                }
            </tbody>
            <tfoot>
            </tfoot>
            </table>
            <br/>
          </>
      </div>
    </div>
    );
}

export default Index;