import React, {useState, useEffect, useContext} from 'react';
import Titlepage from "../../components/UI/Title/TitlePage";
import styles from "./index.module.scss";
import genreService from '../../services/genre.service';
import Link from 'next/link';

const Index = () => {
    const [genres, setGenres] = useState([]);

    useEffect(()=>{
        genreService.getGenres()
    .then((data) => {
        setGenres(data);
        console.log(data);
    });
    }, [])
  
    return (
      
        <div>
      <Titlepage title="Genre admin" />
      <div className={styles.genre__content}>
          <>
          <table>
            <thead>
              <tr>
                <td>Title</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
            {

                genres.map((genre, index)=>{

                    return (<tr key={index}>
                    <td>{genre.title}</td>
                    <td>
                        <Link href="/productAdmin">
                            {/* <a><i className="fa-solid fa-trash-can"></i>edit</a> */}
                            <a><i className={styles.product_action}></i>edit</a>
                        </Link>
                    </td>
                    <td>
                        <Link href="/productAdmin">
                            <a><i className="fa-solid fa-trash-can"></i>delete</a>
                        </Link>
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