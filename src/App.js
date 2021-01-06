import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nome: yup.string().required("Campo é obrigatório"),
  fruta: yup.string().required("Campo é obrigatório"),
  termo: yup.boolean().oneOf([true], "Precisa aceitar os termos"),
  estudar: yup.boolean().required()
});

export default function App() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <Form
        noValidate
        style={{ width: "90%" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Row>
          <Col>
            <Form.Group controlId="frmNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="nome"
                placeholder="Nome"
                ref={register}
                isInvalid={!!errors.nome}
              />

              <Form.Control.Feedback type="invalid">
                {errors.nome?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="frmFruta">
              <Form.Label>Escolha uma fruta</Form.Label>
              <Form.Control
                as="select"
                name="fruta"
                custom
                size="sm"
                defaultValue="Selecione"
                ref={register}
                isInvalid={!!errors.fruta}
              >
                <option value="">Selecione</option>
                <option value="1">Maça</option>
                <option value="2">Pera</option>
                <option value="3">Uva</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.fruta?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Check
                required
                name="termo"
                label="Aceita os termos?"
                onChange={() => {}}
                isInvalid={!!errors.termo}
                feedback={errors.termo?.message}
                ref={register}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Check
                type="switch"
                id="viajar"
                name="viajar"
                label="Deseja viajar esse ano?"
                ref={register}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Pretente estudar esse ano?</Form.Label>
              <Form.Check
                custom
                name="estudar"
                type="radio"
                label="Sim"
                ref={register}
                id="estudarSim"
                value="true"
                isInvalid={!!errors.estudar}
              />
              <Form.Check
                custom
                id="estudarNao"
                name="estudar"
                type="radio"
                label="Não"
                value="false"
                isInvalid={!!errors.estudar}
                ref={register}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label htmlFor="senha">Senha</Form.Label>
              <Form.Control
                type="password"
                name="senha"
                id="senha"
                ref={register}
                aria-describedby="senhaBlock"
              />
              <Form.Text id="senhaBlock" muted>
                Sua senha precisa ter de 5 a 10 caracteres, conter letras e
                número(s). Não conter espaços, caracter especial ou emoji.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit">Enviar</Button>
      </Form>
    </div>
  );
}
