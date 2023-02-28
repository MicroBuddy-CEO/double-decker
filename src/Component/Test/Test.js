import React from 'react';
import "./Test.css";
import Card from './Card';



const Test = ({img}) => {

    const contai = document.querySelector('.corousel')

    const btnPrev = () => {
        let card = contai.clientWidth;
        contai.scrollLeft = contai.scrollLeft - card;
        // window.location.reload(false);
    }

    const btnNext = () => {
        let card = contai.clientWidth;
        contai.scrollLeft = contai.scrollLeft + card;
        // window.location.reload(false);
    }

 



    return (
        <div className='caro-contai m-10 p-10'>

            <button onClick={btnPrev} className='btn'> &lt; </button>
            <button onClick={btnNext} className='btn'> &gt; </button>


            <div className='corousel flex gap-10'>
                <Card img = {img} className="card" cardno="1"/>
                <Card img = {img} className="card" cardno="2" />
                <Card img = {img} className="card" cardno="3" />
                <Card img = {img} className="card" cardno="4" />
                <Card img = {img} className="card" cardno="5" />
                <Card img = {img} className="card" cardno="6" />
            </div>

</div>
    );
};

export default Test;