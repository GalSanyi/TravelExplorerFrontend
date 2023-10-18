import React from "react";
import TourCard from "../../shared/TourCard";

import { Col } from "reactstrap";
import useFetch from "../../hooks/useFetch.js";
import { BASE_URL } from "../../utils/config.js";

const FeaturedToursList = () => {
  const { data: featureTours } = useFetch(
    `${BASE_URL}/tours/search/getFeaturedTour`
  );

  return (
    <>
      {featureTours ? (
        featureTours.map((tour, index) => {
          const matchingTour = featureTours.find(
            (fTour) => fTour._id === tour._id
          );

          return (
            <Col
              lg="3"
              md="6"
              sm="6"
              className="mb-4"
              key={`${tour._id}_${matchingTour ? matchingTour._id : index}`}
            >
              <TourCard
                tour={matchingTour ? { ...tour, ...matchingTour } : tour}
              />
            </Col>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default FeaturedToursList;
