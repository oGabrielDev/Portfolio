import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Alert } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../Styles/inputContact.css';

export default function FormContact() {
  const [state, handleSubmit] = useForm('mbjejkdn');
  if (state.succeeded) {
    return <Alert>Obrigado pelo Contato, Retorno assim que possível!</Alert>;
  }

  return (
    <Form
      onSubmit={ handleSubmit }
      className="containerForm rounded-3 shadow-lg p-1 mb-2"
    >
      <div>
        <Form.Label htmlFor="name">
          Nome:
        </Form.Label>
        <Form.Control
          className="shadow p-1 mb-2 bg-body rounded"
          type="text"
          id="name"
          name="name"
        />
        <Form.Label htmlFor="email" className="mt-2">
          Email:
        </Form.Label>
        <Form.Control
          className="shadow p-1 mb-2 bg-body rounded"
          id="email"
          type="email"
          name="email"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={ state.errors }
        />
        <Form.Label htmlFor="message" className="mt-2">
          Assunto:
        </Form.Label>
        <Form.Control
          className="shadow p-1 mb-2 bg-body rounded"
          as="textarea"
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={ state.errors }
        />
        <button
          type="submit"
          disabled={ state.submitting }
          className="btn btn-primary shadow p-1 mt-2 btnEnviar"
        >
          Enviar
        </button>
      </div>
    </Form>
  );
}
