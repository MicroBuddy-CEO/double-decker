import React from 'react';
import "./Card.css";
import img from "../Assets/burger2.png"




const Card = (props) => {
    return (
        <div className=' bg-slate-500 '>
            <h1 className='text-3xl text-white  w-[300px] h-[250px]'>Card{props.cardno}
                <img src={img} id="burger" alt="" />
            </h1>

        </div>
    );
};

export default Card;