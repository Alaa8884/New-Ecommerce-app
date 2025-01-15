import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { Category } from "@components/ecommerce";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { Loading } from "@components/feedbback";
import { GridList, Heading } from "@components/common";

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

  return (
    <Container>
      <Heading>Categories</Heading>
      <Loading loading={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
}

export default Categories;
