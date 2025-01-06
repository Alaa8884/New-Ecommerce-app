import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProducts, productsCleanUp } from "@store/products/productsSlice";
import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/ecommerce";
const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

  useEffect(() => {
    let prefix: string;
    if (params.prefix && typeof params.prefix === "string") {
      prefix = params.prefix;
      dispatch(actGetProducts(prefix));
    }
    return ()=> {dispatch(productsCleanUp())}
  }, [dispatch, params]);

  const productsList =
    records.length > 0
      ? records.map((record) => {
          return (
            <Col
              xs={6}
              md={3}
              className="d-flex justify-content-center mb-5 mt-2"
              key={record.id}
            >
              <Product {...record} />
            </Col>
          );
        })
      : "No products found";
  return (
    <Container>
      <Row>{productsList}</Row>
    </Container>
  );
};

export default Products;
