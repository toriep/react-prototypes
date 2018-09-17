import React from 'react';
import ReactDOM from 'react-dom';

let user = {
    name: 'Torie',
    luckyNumber: luckyNumber()
}

function luckyNumber(){
    return Math.floor(Math.random() * 1000) + 1;
}

function Greeting(props){
    console.log(props);
    return <div className="container">
        <h1>Hello {props.name}!</h1>
        <h2 className="text-muted">Your lucky number is {props.luckyNumber}</h2>
        </div>  
}

ReactDOM.render(
    Greeting(user),
    document.getElementById('root')
);