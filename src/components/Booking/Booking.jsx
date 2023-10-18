import { useState, useContext } from 'react';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import './booking.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../cotext/AuthContext';
import { BASE_URL } from '../../utils/config';

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour;

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: '',
    phone: '',
    guestSize: 1,
    bookAt: '',
  });
  const handleChange = e => {
    setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };
  // send data to server
  const handleClick = async e => {
    e.preventDefault();
    console.log(booking);
    try {
      if (!user) {
        alert('Please select a user');
      }
      const res = await fetch(`${BASE_URL}/booking`, {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(booking),
      });
      const result = await res.json();
      console.log(result);
      if (!res.ok) {
        return alert(result.message);
      }
      navigate('/thank-you');
    } catch (error) {
      alert(error.message);
    }
  };

  const serviceCharge = 10;
  const total =
    Number(price) * Number(booking.guestSize) + Number(serviceCharge);
  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price}
          <span>/perperson</span>
        </h3>

        <span className="tour__rating d-flex align-items-cente ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{ fill: 'var(--secondary-color)' }}
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
          </svg>
          {avgRating === 0 ? '' : avgRating}({reviews?.length})
        </span>
      </div>

      {/* ==================booking form start=================== */}
      <div className="booking__form">
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/* ==================booking form end=================== */}

      {/* =================booking bottom start==================== */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price}
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
              </svg>
              1 person
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service charge</h5>
            <span>${total}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>${total}</span>
          </ListGroupItem>
        </ListGroup>

        <Button onClick={handleClick} className="btn primary__btn w-100 mt-4">
          Book Now
        </Button>
      </div>
      {/* =================booking bottom end==================== */}
    </div>
  );
};

export default Booking;
