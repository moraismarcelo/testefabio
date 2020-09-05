import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
    return (
        <div>
            <h1 >Web Agenda</h1>
            <hr />

            <Nav>
                <NavItem>
                    <NavLink href="#">Cadastrar Contato</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Consultar Contato</NavLink>
                </NavItem>

            </Nav>
            <hr />

        </div>
    );
}

export default Example;