import { Col, Container, Form, Row } from "react-bootstrap";

export default function Diversity() {
  return(
   <Container>
    <Form>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>
            Naturalidade
          </Form.Label>
          <Form.Control size='lg' type="text" />
        </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>
            Gênero
          </Form.Label>
          <Form.Select size='lg'> 
            <option value="">Masculino</option>
            <option value="">Feminino</option>
            <option value="">Outro</option>
          </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>
              Pronome
            </Form.Label>
            <Form.Select
            size='lg'
            >
              <option value="">Pronome 1</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Label>
              Possuí Alguma deficiência
            </Form.Label>
          <Form.Group as={Col} controlId="formGridPersonalDocuments">
            <Form.Check  inline label="Sim" type="radio" />
            <Form.Check  inline label="Não" type="radio" />
          </Form.Group>

          <Form.Group as={Col} >
          <Form.Label>
            Qual
          </Form.Label>
          <Form.Select size='lg'>
              <option>Deficiência 1</option>
              <option>Deficiência 2</option>
          </Form.Select>
        </Form.Group>
        </Row>

        <Form.Group >
          <Form.Label>
            Etnia
          </Form.Label>
          <Form.Select size='lg'>
              <option>Etnia 1</option>
              <option>Etnia 2</option>
          </Form.Select>
        </Form.Group>

      </Form>
    </Container>
  )
};