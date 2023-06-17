import { ChangeEvent, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import FooterRegister from "../../../../components/FooterRegister";

interface Adress {
  street: string;
  city: string;
  neighborhood: string;
  state: string;
}

const schema = yup.object().shape({
  street: yup.string().required("A rua é obrigatório"),
  number: yup.string().required("O número é obrigatório"),
  neighborhood: yup.string().required("O Bairro é obrigatório"),
  city: yup.string().required("A Cidade é obrigatória"),
  state: yup.string().required("O Estado é obrigatório"),
});

type FormValues = {
  street: string;
  city: string;
  neighborhood: string;
  state: string;
  number: string;
  zip: string;
  complement: string;
  reference: string;
};

export default function Adress({ onNextPage }: { onNextPage: (data: FormValues) => void }) {
  const [cep, setCep] = useState("");
  const [dataAdress, setDataAdress] = useState<Adress | null>(null);

  const methods = useForm<FormValues>({
  resolver: yupResolver(schema),
});

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    onNextPage(data);
  };

  const requestAdress = async () => {
    const URL = `https://brasilapi.com.br/api/cep/v2/${cep}`;

    const resquest = await fetch(URL, {
      method: "GET",
      mode: "cors",
    });

    const response = await resquest.json();
    setDataAdress(response);
    setValue("street", response.street); 
    setValue("neighborhood", response.neighborhood);
    setValue("city", response.city);
    setValue("state", response.state);
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCep = e.target.value;
    setCep(newCep);
  };

  useEffect(() => {
    const fetchData = async () => {
      await requestAdress();
    };

    if (cep) {
      fetchData();
    }
  }, [cep]);

  const textField = register("zip");
  return (
    <Container>
      <FormProvider {...methods} >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Col xs={3}>
                <Form.Group controlId="formGridName">
                  <Form.Label>C.E.P</Form.Label>
                  <Form.Control
                    size="lg"
                    type="text"
                    onChange={(e) => {
                      textField.onChange(e as ChangeEvent<HTMLInputElement>);
                      handleCepChange(e as ChangeEvent<HTMLInputElement>);
                    }}
                  />
                  {errors.zip && (
                    <Form.Text className="text-danger">
                      {errors.zip.message}
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Rua</Form.Label>
              <Form.Control size="lg" type="text" {...register("street")} />
              {errors.street && (
                <Form.Text className="text-danger">{errors.street.message}</Form.Text>
              )}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Col xs={3}>
              <Form.Group controlId="formGridNumber">
                <Form.Label>Número</Form.Label>
                <Form.Control size="lg" type="text" {...register("number")} />
                {errors.number && (
                  <Form.Text className="text-danger">{errors.number.message}</Form.Text>
                )}
              </Form.Group>
            </Col>

            <Form.Group as={Col} controlId="formGridNeighborhood">
              <Form.Label>Bairro</Form.Label>
              <Form.Control size="lg" type="text" {...register("neighborhood")} />
              {errors.neighborhood && (
                <Form.Text className="text-danger">{errors.neighborhood.message}</Form.Text>
              )}
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formGridComplement">
              <Form.Label>Complemento</Form.Label>
              <Form.Control {...register("complement")} />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridReference">
              <Form.Label>Ponto de referência</Form.Label>
              <Form.Control {...register("reference")} />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formGridCity">
              <Form.Label>Cidade</Form.Label>
              <Form.Control {...register("city")} />
              {errors.city && (
                <Form.Text className="text-danger">{errors.city.message}</Form.Text>
              )}
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridState">
              <Form.Label>Estado</Form.Label>
              <Form.Control {...register("state")} />
              {errors.state && (
                <Form.Text className="text-danger">{errors.state.message}</Form.Text>
              )}
            </Form.Group>
          </Row>

          <FooterRegister />
        </Form>
      </FormProvider>
    </Container>
  );
}
