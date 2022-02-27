import React, {useState, useEffect, useContext} from 'react';
import { useRouter } from "next/router";
import Titlepage from "../../components/UI/Title/TitlePage";
import styles from "./index.module.scss";
import authService from '../../services/auth.service';
import Link from 'next/link';

const Index = () => {
    const router = useRouter();
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        authService.getUsers()
    .then((data) => {
        setUsers(data);
        console.log(data);
    });
    }, [])

    function handleDelete (user) {
        console.log("handle delete");
        //console.log(user._id);
        authService.deleteUser(user)
        .then((data) => {
            console.log("data");
            router.push("/userAdmin");
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
    return (
      
        <div>
      <Titlepage title="User admin" />
      <div className={styles.user__content}>
          <>
          <div>
            <button className={styles.product_create}>
                <a href="/addUser">Create</a>
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <td>FirstName</td>
                <td>LastName</td>
                <td>Subscribe</td>
                <td>Premium</td>
                <td>subscribeDate</td>
                <td>Admin</td>
                <td>Email</td>
                <td>Password</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
            {

users.map((user, index)=>{

    return (<tr key={index}>
    <td>{user.firstName}</td>
    <td>{user.lastName}</td>
    <td>{user.isSubscribe ? "oui" : "non"}</td>
    <td>{user.isPremium ? "oui" : "non"}</td>
    <td>{user.subscribeDate ? user.releaseDate : "non"}</td>
    <td>{ user.isAdmin ? "oui" : "non"}</td>
    <td>{user.email}</td>
    <td>{user.password}</td>
    <td>
        <Link href="/userAdmin">
             {/* <a><i className="fa-solid fa-trash-can"></i>edit</a> */}
             <a><i className={styles.user_action}></i>edit</a>
        </Link>
    </td>
    <td>
        {/* <Link href="/userAdmin">
            <a><i className="fa-solid fa-trash-can" onClick={handleDelete}></i>delete</a>
        </Link> */}
        <button className={styles.step_button} onClick={()=>handleDelete(user)}>
          {/* <button className={styles.step_button} onClick={() => setStep(step + 1)}> */}
          delete
          </button>
    </td>

  </tr>);

})

}
                {/* {
                    users.forEach(user=>console.log("user :"+user))
                } 
              {
                  users.forEach(user => {
                      
                  
            //   users.map((user) => (
            //   <tr key={user.id}>
            //     <td>{user.firstName}</td>
            //     <td>{user.lastName}</td>
            //     <td>{user.isSubscribe}</td>
            //     <td>{user.isPremium}</td>
            //     <td>{user.releaseDate}</td>
            //     <td>{user.isAdmin}</td>
            //     <td>{user.email}</td>
            //     <td>{user.password}</td>
            //     <td>
            //         <Link to="/userAdmin" className="fas fa-edit"></Link>
            //         <Link to="/userAdmin" className="fa-solid fa-trash-can"></Link>
            //     </td>
            //   </tr>
            //       })}*/}
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