import React from 'react';
import {FormGroup, Label, Input, Table} from 'reactstrap'

const Example = () => {
    const retrievedData = sessionStorage.getItem('contacts');
    let contacts = JSON.parse(retrievedData);
    if (!retrievedData){

    }
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
                    <th scope="row">1</th>

                    <td>{contacts.name}</td>
                    <td>{contacts.phone}</td>
                    <td>{contacts.email}</td>
                </tr>
                </tbody>
            </Table>
         </>
    );
}

export default Example;