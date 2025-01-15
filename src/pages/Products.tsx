import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProducts, productsCleanUp } from "@store/products/productsSlice";
import { Container } from "react-bootstrap";
import { Product } from "@components/ecommerce";
import { Loading } from "@components/feedbback";
import { GridList } from "@components/common";
const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

const cartItem = useAppSelector(state=> state.cart.cartItems)

  const productFullInfo = records.map((ele) => {
    return {
      ...ele,
      quantity: cartItem[ele.id] || 0,
    }
  })


    
  useEffect(() => {
    let prefix: string;
    if (params.prefix && typeof params.prefix === "string") {
      prefix = params.prefix;
      dispatch(actGetProducts(prefix));
    }
    return ()=> {dispatch(productsCleanUp())}
  }, [dispatch, params]);

 
  return (
    <Container>
      {" "}
      <Loading loading={loading} error={error}>
        <GridList records={productFullInfo} renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
