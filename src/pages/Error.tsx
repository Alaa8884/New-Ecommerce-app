import { Container } from "react-bootstrap";
import { isRouteErrorResponse, Link, useRouteError } from "react-router";

function Error() {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }
  return (
    <Container className=" h-100 p-5">
      <div className=" text-center m-5">
        <h1 className=" display-1 text-danger fw-bolder">{errorStatus}</h1>
        <p className=" display-5 fw-bold">{errorStatusText}</p>
        <p className=" display-6 ">Looks like yo have reached a non exist page</p>
        <Link to="/" replace={true} className=" btn btn-success">
          Go Back
        </Link>
      </div>
    </Container>
  );
}

export default Error;
