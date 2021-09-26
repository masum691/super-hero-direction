// import React, { useState } from 'react';
import './President.css'

const President = (props) => {
    // console.log(props.president.name)
    const {img, name, age, country, email, salary} = props.president;
    return (
        <div className="president">
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h4>Age: {age}</h4>
            <h4>Country: {country}</h4>
            <h4>Email: {email}</h4>
            <h3>Salary: ${salary}</h3>
            <button onClick={() => props.handleCart(props.president)}><i className="fas fa-shopping-cart"></i> Add to cart</button>
            {/* <br />
            <div>
                <i class="fab fa-linkedin social-icon"></i>
                <i class="fab fa-facebook social-icon"></i>
                <i class="fab fa-twitter-square social-icon"></i>
                <i class="fab fa-skype social-icon"></i>
            </div> */}
        </div>
        
    );
};

export default President;