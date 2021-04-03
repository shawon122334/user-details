import React, { useEffect, useState } from 'react';
import userData from '../../userData/userData.json';
import SingleUser from '../SingleUser/SingleUser';
import './User.css';

const User = () => {
    // console.log(u.serData);
    const [users,setUsers]= useState([]);
    useEffect(()=>{
        setUsers(userData);
    },[])
    // console.log(users);
    const [count,setCount]=useState([]);
    const handleButton=(singleUser)=>{
        const newCount = [...count,singleUser]
        setCount(newCount);
    }
    return (
        <div className="userAndSalary">
            <div className="userDetails">
            {
                users.map(user=> <SingleUser handleButton={handleButton} user={user}></SingleUser> )
            }
            </div>
            <div>
                <h2>Total Clicked User : {count.length} </h2>
                
            </div>
        </div>
    );
};

export default User;
