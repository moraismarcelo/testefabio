import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav"
import Form from "./components/Form"
import Search from "./components/Search"



ReactDOM.render(
    <div className={"container"} >
        <Nav/>
        {/*<Form/>
        <Search/>*/}
    </div>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
