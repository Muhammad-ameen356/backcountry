import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CardComponent from "../../components/Card";
import { fetchProducts } from "../../store/reducers/productReducer";
import CardSkeleton from "../../components/Skeleton/CardSkeleton";
import { ShimmerPostItem } from "react-shimmer-effects";

const Home = () => {
  const { productLoading, products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, []);

  {
    /* <Col md={4} lg={3} sm={6}>
    https://reactjsexample.com/customizable-shimmer-effects-for-react/
            <ShimmerPostItem card title text cta row={5} col={5} />
          </Col> */
  }
  return (
    <div>
      <Container>
        {productLoading ? (
          <CardSkeleton howMany={8} />
        ) : (
          <Row>
            {products?.length === 0 ? (
              <h2>No Any Products Found</h2>
            ) : (
              products?.map((item, ind, allproducts) => {
                return (
                  <Col md={4} lg={3} sm={6} key={item?.id}>
                    <CardComponent item={item} />
                  </Col>
                );
              })
            )}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Home;
