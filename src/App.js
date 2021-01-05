import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nome: yup.string().required("Campo é obrigatório"),
  fruta: yup.string().required("Campo é obrigatório")
});

export default function App() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <Form style={{ width: "300px" }} onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit">Enviar</Button>
      </Form>
    </div>
  );
}
