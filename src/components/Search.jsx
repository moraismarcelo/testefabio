import React from 'react';
import {FormGroup, Label, Input, Table} from 'reactstrap';
import {BsFillTrashFill, BsPencilSquare} from 'react-icons/bs';

const Example = () => {
    const retrievedData = sessionStorage.getItem('contacts');
    const contacts = JSON.parse(retrievedData);
    const renderContacts = (contacts, index) => {
        console.log(index)
        return (
        <tr key={index}>
            <td>{contacts.name}</td>
            <td>{contacts.phone}</td>
            <td>{contacts.email}</td>
            <td>
                <BsPencilSquare className="mr-1" title="Editar"></BsPencilSquare>
                <BsFillTrashFill title="Excluir"></BsFillTrashFill>
            </td>    
        </tr>
        )
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
            <Table hover responsive>
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                    {contacts.map(renderContacts)}
                </tbody>
            </Table>
         </>
    );
}
export default Example;