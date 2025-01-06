import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { Category } from "@components/ecommerce";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";

function Categories() {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);
  if (loading === "pending") return <div>Loading...</div>;
  const categoriesList =
    records.length > 0
      ? records.map((record) => (
          <Col
            md="6"
            xs="3"
            className=" d-flex justify-content-center mb-5 mt-2"
            key={record.id}
          >
            <Category {...record} />
          </Col>
        ))
      : "There are no categories to display";
  return (
    <Container>
      <Row lg="4" md="3" sm="12">{categoriesList}</Row>
    </Container>
  );
}

export default Categories;
