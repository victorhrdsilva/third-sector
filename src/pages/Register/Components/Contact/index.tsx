import { Col, Container, Form, Row } from "react-bootstrap";

export default function Contact() {
  return (
    <Container>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>
              Telefone pessoal
            </Form.Label>
            <Form.Control size='lg' type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>
              Contato de emergência
            </Form.Label>
            <Form.Control size='lg' type="text" />
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>
            Email
          </Form.Label>
          <Form.Control
            size='lg'
           type="text"
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPersonalDocuments">
            <Form.Label>
              Redes sociais
            </Form.Label>
            <Form.Select size='lg'>
              <option>Instagram</option>
              <option>Linkedin</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formGridAddress">
            <Form.Label>
              User name
            </Form.Label>
            <Form.Control size="lg" />
          </Form.Group>
        </Row>

      </Form>
    </Container>
  )
};