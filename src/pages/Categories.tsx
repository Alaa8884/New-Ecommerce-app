import { Category } from "@components/ecommerce";
import { Col, Container, Row } from "react-bootstrap";

function Categories() {
  return (
    <Container>
      <Row>
        <Col md="6" xs="3" className=" d-flex justify-content-center mb-5 mt-2">
          <Category />
        </Col>
      </Row>
    </Container>
  );
}

export default Categories;
