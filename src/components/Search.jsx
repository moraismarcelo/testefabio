import React from 'react';
import {FormGroup, Label, Input, Table} from 'reactstrap'

const Example = () => {

    return (
        <>
        <FormGroup>
            <Label for="search">Pesquisa por nome, telefone ou email.</Label>
            <Input
                type="search"
                name="search"
                id="search"
                placeholder="Nome, telefone, email "
            />
        </FormGroup>
            <Table striped>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">{contacts ? contacts.name : "1"}</th>

                    <td>{contacts ? contacts.name : null}</td>
                    <td>{contacts ? contacts.phone : null}</td>
                    <td>{contacts ? contacts.email : null}</td>
                </tr>
                </tbody>
            </Table>
         </>
    );
}

export default Example;