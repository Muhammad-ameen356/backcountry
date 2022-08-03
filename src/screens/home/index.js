import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CardComponent from "../../components/Card";
import Loader from "../../components/Loader/Loader";
import { decrease, increase } from "../../store/reducers/counterReducer";
import { fetchProducts } from "../../store/reducers/productReducer";

const Home = () => {
  const { value } = useSelector((state) => state.counter);
  const { productLoading, products } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const param = useParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {products &&
            products?.map((item, ind, allproducts) => {
              
              return (
                <Col md={4} lg={3} sm={6} key={item?.id}>
                  <CardComponent  item={item} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
