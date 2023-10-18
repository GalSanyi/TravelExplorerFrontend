import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../shared/CommonSection";
import "../components/styles/tours.css";

import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SearchBar";
import NewsLetter from "../shared/NewsLetter";
import useFetch from "../hooks/useFetch.js";
import { BASE_URL } from "../utils/config.js";
const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const {
    data: tours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours?page=${page}`);

  const { data: tourCounts } = useFetch(
    `${BASE_URL}/tours/search/getTourCounts`
  );

  useEffect(() => {
    const pages = Math.ceil(tourCounts / 4);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCounts, tours]);

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <SearchBar />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-5">Loading......</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              {tours.map((tour, index) => (
                <Col className="mb-4" lg="4" md="6" sm="6" key={index}>
                  <TourCard tour={tour} />
                </Col>
              ))}
              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default Tours;
