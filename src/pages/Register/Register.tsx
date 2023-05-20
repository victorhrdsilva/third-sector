import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Div, ErrorMessage, Img, Span, Title } from "./style";
import { IMaskInput } from "react-imask";
import { useNavigate } from "react-router-dom";

type CreateUserData = {
  name: string;
  email: string;
  password: string;
  personalDocuments: string;
  adress: string;
  city: string;
  state: string;
  zip: string;
  cell: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("Email é obrigatório").email("Email inválido"),
  password: yup.string().required("Senha é obrigatório").min(8),
  personalDocuments: yup.string().required("CPF/CNPJ é obrigatório"),
  adress: yup.string().required("Endereço é obrigatório"),
  city: yup.string().required("Cidade é obrigatório"),
  state: yup.string().required("Estado é obrigatório"),
  zip: yup.string().required("Cep é Obrigatório"),
  cell: yup.string().required("Celular é obrigatório"),
});

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserData>({ resolver: yupResolver(createUserFormSchema) });

  const handleCreateUser: SubmitHandler<CreateUserData> = async (values) => {
    console.log(values);
    navigate('/login')
  };

  return (
    <Container>
      <Div>
        <Img src="../../../public/favicon.png" alt="" />
        <Title>Preencha o formulario para criar uma conta</Title>
      </Div>
      <Form onSubmit={handleSubmit(handleCreateUser)}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>
              <Span>*</Span>Nome Completo
            </Form.Label>
            <Form.Control type="text" {...register("name")} />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>
              <Span>*</Span>Email
            </Form.Label>
            <Form.Control {...register("email")} type="email" />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>
              <Span>*</Span>Senha
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="*******"
              {...register("password")}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPersonalDocuments">
            <Form.Label>
              <Span>*</Span>CPF/CNPJ
            </Form.Label>
            <Form.Control
              as={IMaskInput}
              mask={[
                { mask: "000.000.000-00" },
                { mask: "00.000.000/0000-00" },
              ]}
              type="text"
              {...register("personalDocuments")}
            />
            {errors.personalDocuments && (
              <ErrorMessage>{errors.personalDocuments.message}</ErrorMessage>
            )}
          </Form.Group>
        </Row>

        <Form.Group as={Col} className="mb-3" controlId="formGridAddress">
          <Form.Label>
            <Span>*</Span>Endereço
          </Form.Label>
          <Form.Control type="text" {...register("adress")} />
          {errors.adress && (
            <ErrorMessage>{errors.adress.message}</ErrorMessage>
          )}
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formGridCity">
            <Form.Label>
              <Span>*</Span>Cidade{" "}
            </Form.Label>
            <Form.Control type="text" {...register("city")} />
            {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>
              <Span>*</Span>Estado
            </Form.Label>
            <Form.Select defaultValue="Minas gerais" {...register("state")}>
              <option>Minas Gerais</option>
              <option>...</option>
            </Form.Select>
            {errors.state && (
              <ErrorMessage>{errors.state.message}</ErrorMessage>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>
              {" "}
              <Span>*</Span>Cep
            </Form.Label>
            <Form.Control
              as={IMaskInput}
              mask="00000-000"
              type="text"
              {...register("zip")}
            />
            {errors.zip && <ErrorMessage>{errors.zip.message}</ErrorMessage>}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCell">
            <Form.Label>
              {" "}
              <Span>*</Span>Celular
            </Form.Label>
            <Form.Control
              as={IMaskInput}
              mask="(00) 00000-0000"
              type="text"
              {...register("cell")}
            />
            {errors.cell && <ErrorMessage>{errors.cell.message}</ErrorMessage>}
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Confirmo que meus dados estão corretos"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}
