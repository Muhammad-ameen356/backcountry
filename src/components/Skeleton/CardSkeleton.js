import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./skeleton.scss";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ howMany }) => {
  function createArr() {
    return Array.from(Array(howMany).keys());
  }

  return (
    <div>
      <Container>
        <Row>
          {createArr().map((item, ind) => {
            return (
              <Col
                key={ind}
                md={4}
                lg={3}
                sm={6}
                className="skeleten-mainContainer"
              >
                <Skeleton className="skeleton-image" />
                <Skeleton className="skeleton-title" />
                <Skeleton className="skeleton-description" count={3} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default CardSkeleton;
