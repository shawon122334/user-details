import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faPlus } from '@fortawesome/free-solid-svg-icons';
import './SingleUser.css';


const SingleUser = (props) => {
    console.log(props.user);
    const { img, name, email, phone } = props.user;
    return (
        <div className="userDetail">


            <img src={img} alt="" />
            <h3>user name : {name}</h3>
            <h5>user email : {email}</h5>
            <h5>user phone : {phone}</h5>
            <button onClick={()=>props.handleButton (props.user)}><FontAwesomeIcon icon={faPlus} />add</button>
        </div >
    );
};

export default SingleUser;