import { Container } from "react-bootstrap";
import { Link } from "react-router";

function Error() {
  return (
    <Container className=" h-100 p-5">
      <div className=" text-center m-5">
        <h1 className=" display-1 text-danger fw-bolder">404</h1>
        <p className=" display-5 fw-bold">Page not found</p>
        <Link to="/" replace={true} className=" btn btn-success">
          Go Back
        </Link>
      </div>
    </Container>
  );
}

export default Error;
