import React from 'react';
import { Nav, NavItem, Button } from 'reactstrap';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Search from"./Search";
import Form from "./Form"


const Example = (props) => {
    return (
        <div>
            <h1 >Agenda</h1>
            <hr />
            <Router>
            <Nav>
                <NavItem className={"p-1"}>
                    <Link to="/cadastrar"><Button color={"success"}>Cadastrar Contato</Button></Link>
                </NavItem>
                <NavItem className={"p-1"}>
                    <Link to="/consultar"><Button color={"primary"}>Consultar Contato</Button></Link>
                </NavItem>
            </Nav>
            <Switch>
                <Route exact path="/">
                    <Nav/>
                </Route>
                <Route path="/cadastrar">
                    <Form/>
                </Route>
                <Route path="/consultar">
                <Search/>
                </Route>
            </Switch>

            </Router>
            <hr />
        </div>
    );
}

export default Example;