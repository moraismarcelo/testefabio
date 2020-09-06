import React from 'react';
import {FormGroup, Label, Input, Table, Button} from 'reactstrap';
import { } from 'react-icons/bs';
const Example = () => {
    const retrievedData = sessionStorage.getItem('contacts');
    const contacts = JSON.parse(retrievedData);
    function addRow(contacts) {

    }
    if (retrievedData){
        for (const [key, value] of Object.entries(contacts)) {
            console.log(key, value);
        }
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
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody id={"tableData"}>
                <tr>
                    <th scope="row">#</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><Button className={"btn btn-info"}>Editar</Button>
                        <Button className={"btn btn-danger"}>Remover</Button>
                    </td>
                </tr>
                </tbody>
            </Table>
         </>
    );
}

export default Example;