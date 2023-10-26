import { Col, Container, Row } from "reactstrap";
import PetCreate from "./PetCreate";

function MainIndex(props) {
  return (
    <>
      <Container>
        <Row>
          <Col md="4">
            <PetCreate />
          </Col>
          <Col md="8">LIST OF PETS HERE</Col>
        </Row>
      </Container>
    </>
  );
}

export default MainIndex;
