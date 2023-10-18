import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationsImg from '../assets/images/customization.png';

const serviceData = [
  {
    imgUrl: weatherImg,
    title: 'WEATHER',
    desc: 'Stay informed about the current weather conditions in your area. Our weather service provides up-to-date forecasts and real-time updates, so you can plan your day accordingly.',
  },
  {
    imgUrl: guideImg,
    title: 'GUIDE',
    desc: "Discover the best attractions, restaurants, and activities in your city with our comprehensive guide service. Whether you're a tourist or a local, our guide will help you make the most of your time.",
  },
  {
    imgUrl: customizationsImg,
    title: 'CUSTOMIZATIONS',
    desc: 'Tailor your experience to your preferences with our customization options. From personalized recommendations to adjustable settings, we put you in control of your experience.',
  },
];

const ServiceList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
