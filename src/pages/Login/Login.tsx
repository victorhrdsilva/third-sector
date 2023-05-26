import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { login } from "../../services/authService";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  BackgroudColor,
  Container,
  FloatingBox,
  FormSide,
  InfoSide,
  SinginButton,
  ErrorMessage,
  HeaderForm,
} from "./style";
import { Card, Form } from "react-bootstrap";

const loginUserFormSchema = yup.object().shape({
  email: yup.string().required("Email é obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha é obrigatório")
    .min(8, "Senha requer ao menos 8 dígitos"),
});

type loginFormData = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<loginFormData>({
    resolver: yupResolver(loginUserFormSchema),
  });

  const handleLoginSubmit: SubmitHandler<loginFormData> = async (values) => {
    console.log(values);
    reset();
    // login(values)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((res) => {
    //     console.log(res);
    //     alert(res.response.data);
    //   });
  };

  return (
    <>
      <BackgroudColor></BackgroudColor>
      <Container>
        <InfoSide>
          <div>
            <h1>Sign in to</h1>
            <h2>Lorem Ipsum is simply</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </InfoSide>
        <FormSide>
          <FloatingBox>
            <HeaderForm>
              <p>Bem Vindo</p>
              <Card.Link as="a" href="#">Não tenho uma conta<br/> Sign up</Card.Link>
            </HeaderForm>
            <h1>Sing In</h1>
            <Form onSubmit={handleSubmit(handleLoginSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Insira o nome de usuário ou o email</Form.Label>
                <Form.Control
                  {...register("email")}
                  type="email"
                  placeholder="Nome de usuário ou Email"
                />
                {errors.email && (
                  <ErrorMessage>{errors.email?.message}</ErrorMessage>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Insira sua Senha</Form.Label>
                <Form.Control
                  {...register("password")}
                  type="password"
                  placeholder="Senha"
                />
                {errors.password && (
                  <ErrorMessage>{errors.password?.message}</ErrorMessage>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Lembre-se de mim" />
              </Form.Group>
              <SinginButton variant="secondary" type="submit">
                Entrar
              </SinginButton>
            </Form>
          </FloatingBox>
        </FormSide>
      </Container>
    </>
  );
}
