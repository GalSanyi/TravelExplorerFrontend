import React from "react";
import "../components/styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";
import worldImg from "../assets/images/world.png";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import experienceImg from "../assets/images/experience.png";
import FeaturedToursList from "../components/Featured-tours/FeaturedToursList";
import MasonryImgGallery from "../components/Image-gallery/MasonryImgGallery";
import Testimonials from "../components/Testimonils/Testimonials";
import NewsLetter from "../shared/NewsLetter";

const Home = () => {
  return (
    <>
      {/* =========== hero section============ */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle Subtitle={"know before you go"} />
                  <img src={worldImg} alt="world" />
                </div>
                <h1>
                  Traveling opens the door to creating
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Discover new places, cultures, and experiences that will stay
                  with you forever.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="hero" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="hero" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="hero" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* =========== hero section============ */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="service__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* =========featured tour section start============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle Subtitle={"Explore"} />
              <h2 className="featured__title">Our featured tours</h2>
            </Col>
            <FeaturedToursList />
          </Row>
        </Container>
      </section>
      {/* =========featured tour section end============= */}

      {/* =========experience section start========== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content"></div>
              <Subtitle Subtitle={"Experience"} />
              <h2>
                With our all experience
                <br /> we will serve you
              </h2>
              <p>
                Our team of dedicated professionals is committed to providing
                you with exceptional service. With years of experience in the
                industry, we are well-equipped to meet your every need and
                exceed your expectations. Whether it's a special occasion or a
                regular visit, we promise to make your experience unforgettable.
                Your satisfaction is our top priority, and we look forward to
                serving you with the utmost care and attention to detail.
              </p>

              <div className="counter__wrapper d-flex ilign-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successfull trip </h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients </h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>year experience </h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* =========experience section end========== */}

      {/* ============gallery section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImgGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============gallery section end ============ */}

      {/* ===========testimonial section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Funs Love"} />
              <h2 className="testimonial__title">What our funs say about us</h2>
            </Col>
            <Col>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ===========testimonial section end */}
      <NewsLetter />
    </>
  );
};

export default Home;
