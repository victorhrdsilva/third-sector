import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { login } from "../../services/authService";
import { yupResolver } from "@hookform/resolvers/yup";
import { BackgroudColor, Container, Wrapper } from "./style";

const loginUserFormSchema = yup.object().shape({
  email: yup.string().required("Email é obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha é obrigatório")
    .min(8, { message: "Senha requer ao menos 8 dígitos" }),
});

type loginFormData = yup.InferType<typeof loginUserFormSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({
    resolver: yupResolver(loginUserFormSchema),
  });

  async function handleLoginSubmit(data: loginFormData) {
    login(data)
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
        alert(res.response.data);
      });
  }

  return (
    <Container>
      <BackgroudColor>
        <Wrapper>
          <h1>Sign in to</h1>
          <h2>Lorem Ipsum is simply</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </Wrapper>
      </BackgroudColor>
      <BackgroudColor inputColor="true"></BackgroudColor>
    </Container>
  );
}
