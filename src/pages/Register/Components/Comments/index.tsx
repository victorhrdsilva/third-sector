import { Col, Container, Form, Row } from "react-bootstrap";

export default function Comments() {
  return(
   <Container>
    <Form>
      
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>
            Observações médicas:
          </Form.Label>
          <Form.Control size='lg' as='textarea' />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>
            Outras observações
          </Form.Label>
          <Form.Control size='lg' as='textarea' />
          </Form.Group>
      
      </Form>
    </Container>
  )
};