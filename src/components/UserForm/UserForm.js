import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import userSchema from "../../Validations/UserFormValidation";

const UserForm = () => {
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    let formData = {
      name: e.target[0].value,
      address: e.target[1].value,
      phone: e.target[2].value,
      email: e.target[3].value,
      dob: e.target[4].value,
    };
    try {
      await userSchema.validate(formData);
    } catch (error) {
      setError(error.errors.pop());
    }
  };
  console.log(error);
  return (
    <Row>
      <Col>
        <Form onSubmit={submit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Escreva aqui seu nome" />
            <Form.Text className="text-muted">
              {error.toLowerCase().includes("nome") ? error : null}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Endereço</Form.Label>
            <Form.Control type="text" placeholder="Escreva aqui seu endereço" />
            <Form.Text className="text-muted">
              {error.toLowerCase().includes("endereço") ? error : null}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="text" placeholder="Escreva aqui seu telefone" />
            <Form.Text className="text-muted">
              {error.toLowerCase().includes("telefone") ? error : null}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="text" placeholder="Escreva aqui seu e-mail" />
            <Form.Text className="text-muted">
              {error.toLowerCase().includes("e-mail") ? error : null}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
              type="date"
              placeholder="Insira sua data de nascimento"
            />
            <Form.Text className="text-muted">
              {error.toLowerCase().includes("data") ? error : null}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default UserForm;
