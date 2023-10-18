import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../shared/CommonSection";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import TourCard from "../shared/CommonSection";
import NewsLetter from "../shared/NewsLetter";
const SearchResultList = () => {
  const location = useLocation();
  const [data] = useState(location.state);
  console.log(data);
  return (
    <>
      <CommonSection title={"Tour Search result"} />
      <section>
        <Container>
          <Row>
            {data && data.length === 0 ? (
              <h4 className="text-center">No tour found</h4>
            ) : (
              data?.map((tour) => (
                <Col lg="3" className="mb4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default SearchResultList;
