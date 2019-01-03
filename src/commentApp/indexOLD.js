//import react and react-dom
import React from 'react';
import ReactDOM from 'react-dom';


//create react component
const App = () => {
    const buttonText = {text: 'Click Me'};
    const style = { backgroundColor:'blue', color: 'white'};
    const labelText = "Enter name:";
    return <div>
        <label className="label" htmlFor="name">{labelText}</label>
        <input id="name" type="text"/>
        <button style={style}>{buttonText.text}</button>
    </div>
}


// render component
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);