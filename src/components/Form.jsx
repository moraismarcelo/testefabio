import React from 'react';
import {Button , Form, FormGroup, Label} from 'reactstrap'
import {useForm} from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message'

export default function App() {
    const { register, errors, handleSubmit } = useForm();
    function submit(data) {
        const sessionContacts = sessionStorage.getItem("contacts")
        const contacts = sessionContacts ? JSON.parse(sessionContacts) :  [];
        const values = [...contacts, data]
        sessionStorage.setItem("contacts", JSON.stringify(values));
    }
    const onSubmit = data => submit(data);
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <Label for="name">Nome</Label>
                <input
                    className={"form-control"}
                    type="input"
                    name="name"
                    id="name"
                    placeholder="João da Silva"
                    ref={register({
                        required: 'Por favor insira um nome.'})}
                />
                <ErrorMessage errors={errors} name="name" />
            </FormGroup>
            <FormGroup>
                <Label for="phone">Telefone</Label>
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
                <ErrorMessage errors={errors} name="phone" />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
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
                <ErrorMessage errors={errors} name="email" />
            </FormGroup>
            <Button className={"btn-success"}>Salvar</Button>
        </Form>
    );
}