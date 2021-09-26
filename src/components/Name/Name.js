import React from 'react';
import './Name.css'

const Name = (props) => {
    const { name, img } = props.singlePresident;
    console.log(name)
    return (
        <div className="single-president">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4> {name}</h4>
            </div>
        </div>
    );
};

export default Name;