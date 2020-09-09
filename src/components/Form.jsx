import React from 'react';
import {Button, Form, FormGroup, Label, Col, Row} from 'reactstrap'
import {useForm} from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message'
import $ from 'jquery'

export default function App() {
    const { register, errors, handleSubmit } = useForm();
    function submit(data) {
        const sessionContacts = sessionStorage.getItem("contacts")
        const contacts = sessionContacts ? JSON.parse(sessionContacts) :  [];
        const values = [...contacts, data]
        sessionStorage.setItem("contacts", JSON.stringify(values));
        resetFields()
        window.location.reload()
    }
    function addContactFields(){
    let html = '<div class="form-group" id="addContacts"><div class="form-row">' +
     '<div class="col-3 input-group-sm">' +
     '<label for="validationCustom01" class="small">Nome</label>' +
     '<input type="text" class="form-control" id="validationCustom01" placeholder="Nome" required></div>' +
     '<div class="col-3 input-group-sm">' +
     '<label for="validationCustom01" class="small">Telefone</label>' +
     '<input type="text" class="form-control" id="validationCustom01" placeholder="Nome" required></div>' +
     '<div class="col-3 input-group-sm mr-1">' +
     '<label for="validationCustom01" class="small">Email</label>' +
     '<input type="text" class="form-control" id="validationCustom01" placeholder="Nome" required></div>' +
     '<button class="btn btn-danger btn-sm">Remover</button></div></div>';

     const fieldsContainer = $(".fieldsContainer")
    fieldsContainer.append(html)
    $( "#addContacts input").each(function( index ) {
        console.log( index + ": " + $( this ).text() );
      });    
    console.log ($(fieldsContainer.firstChildren))
    }
    function resetFields(){
        document.getElementById('name').value='';   
        document.getElementById('phone').value='';
        document.getElementById('email').value='';
    }
    const onSubmit = data => submit(data);
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row form>
            <Col md={3}>
            <FormGroup>
                <Label for="name" className="small">Nome</Label>
                <div className={"input-group-sm"}>
                <input
                    className={"form-control"}
                    type="input"
                    name="name"
                    id="name"
                    placeholder="João da Silva"
                    ref={register({
                        required: 'Por favor insira um nome.'})}
                />
                </div>
                <ErrorMessage errors={errors} name="name" />
                </FormGroup>
            </Col>
            <Col md={3}>
            <FormGroup>
                <Label for="phone" className="small">Telefone</Label>
                <div className={"input-group-sm"}>
                <input
                    className={"form-control"}
                    maxLength={14}
                    type="input"
                    name="phone"
                    id="phone"
                    placeholder="Somente Números"
                    ref={register({
                        required: 'Por favor insira um telefone.',
                        pattern: {
                            value: /^[0-9+\b]+$/,
                            message: "Por favor insira um número de telefone válido."
                        },
                        minLength: {
                            value: 8,
                            message: 'Por favor Insira um número de telefone válido.' // <p>error message</p>
                        },
                        maxLength: {
                            value: 14,
                            message: 'Por favor Insira um número de telefone válido.' // <p>error message</p>
                        }
                        })
                    }
                />
                </div>
                <ErrorMessage errors={errors} name="phone" />
                </FormGroup>
                </Col>
                <Col md={3}>
                <FormGroup>
                <Label for="email" className="small">Email</Label>
                <div className={"input-group-sm"}>
                <input
                    className={"form-control"}
                    type="text"
                    name="email"
                    id="email"
                    placeholder="joao@email.com.br"
                    ref={register({
                        required: 'Por favor insira um e-mail.',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Por favor insira um endereço de e-mail válido."
                        }
                    })}
                />
                </div>
                <ErrorMessage errors={errors} name="email" />
            </FormGroup>
             </Col>
            </Row>
            <div className="fieldsContainer" id="fieldsContainer"></div>        
            <Button className={"btn-success mr-2"}>Salvar</Button>
            <Button className={"btn-info addFields"} onClick={addContactFields}>+ Contatos</Button>
        </Form>
    );
}