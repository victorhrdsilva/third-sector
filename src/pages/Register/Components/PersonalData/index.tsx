import { Col, Container, Form, Row } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import FooterRegister from "../../../../components/FooterRegister";

const schema = yup.object().shape({
  fullName: yup.string().required("O nome completo é obrigatório"),
  socialName: yup.string().required("O nome social é obrigatório"),
  birthDate: yup.date().required("A data de nascimento é obrigatória"),
  maritalStatus: yup.string().required("O estado civil é obrigatório"),
  education: yup.string().required("A escolaridade é obrigatória"),
  nationality: yup.string().required("A nacionalidade é obrigatória"),
  bloodType: yup.string().required("O grupo sanguíneo é obrigatório"),
  userType: yup.string().required("O tipo de usuário é obrigatório"),
});

type FormValues = {
  fullName: string;
  socialName: string;
  birthDate: string;
  maritalStatus: string;
  education: string;
  nationality: string;
  bloodType: string;
  userType: string;
};

export default function PersonalData({ onNextPage }: { onNextPage: (data: FormValues) => void }) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const methods = useForm()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
  onNextPage(data)
};


  return (
    <Container>
      <FormProvider {...methods} >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control size="lg" type="text" {...register("fullName")} />
            {errors.fullName && (
              <Form.Text className="text-danger">
                {errors.fullName.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Nome Social</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              {...register("socialName")}
            />
            {errors.socialName && (
              <Form.Text className="text-danger">
                {errors.socialName.message}
              </Form.Text>
            )}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Data de nascimento</Form.Label>
            <Form.Control
              size="lg"
              type="date"
              {...register("birthDate")}
            />
            {errors.birthDate && (
              <Form.Text className="text-danger">
                {errors.birthDate.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPersonalDocuments">
            <Form.Label>Estado Civil</Form.Label>
            <Form.Select
              size="lg"
              {...register("maritalStatus")}
            >
              <option value="">Selecione</option>
              <option value="Solteiro">Solteiro</option>
              <option value="Casado">Casado</option>
            </Form.Select>
            {errors.maritalStatus && (
              <Form.Text className="text-danger">
                {errors.maritalStatus.message}
              </Form.Text>
            )}
          </Form.Group>
        </Row>

        <Form.Group as={Col} className="mb-3" controlId="formGridAddress">
          <Form.Label>Escolaridade</Form.Label>
          <Form.Select size="lg" {...register("education")}>
            <option value="">Selecione</option>
            <option value="Superior Completo">Superior Completo</option>
            <option value="Superior Incompleto">Superior Incompleto</option>
          </Form.Select>
          {errors.education && (
            <Form.Text className="text-danger">
              {errors.education.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="formGridAddress">
          <Form.Label>Nacionalidade</Form.Label>
          <Form.Select size="lg" {...register("nationality")}>
            <option value="">Selecione</option>
            <option value="Brasileiro">Brasileiro</option>
            <option value="Estrangeiro">Estrangeiro</option>
          </Form.Select>
          {errors.nationality && (
            <Form.Text className="text-danger">
              {errors.nationality.message}
            </Form.Text>
          )}
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formGridCity">
            <Form.Label>Grupo Sanguíneo</Form.Label>
            <Form.Select size="lg" {...register("bloodType")}>
              <option value="">Selecione</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </Form.Select>
            {errors.bloodType && (
              <Form.Text className="text-danger">
                {errors.bloodType.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formGridCity">
            <Form.Label>Tipo de Usuário</Form.Label>
            <Form.Select size="lg" {...register("userType")}>
              <option value="">Selecione</option>
              <option value="Administrador">Administrador</option>
              <option value="Voluntario">Voluntário</option>
            </Form.Select>
            {errors.userType && (
              <Form.Text className="text-danger">
                {errors.userType.message}
              </Form.Text>
            )}
          </Form.Group>
        </Row>

        <FooterRegister />
      </Form>
      </FormProvider>
    </Container>
  );
}
