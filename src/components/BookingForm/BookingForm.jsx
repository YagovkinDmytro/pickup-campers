import { useState } from 'react';
import css from './bookingForm.module.css';
import ButtonCardItems from 'components/ButtonCardItems/ButtonCardItems';
import { nanoid } from '@reduxjs/toolkit';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [boolingDate, setBoolingDate] = useState('');
  const [comment, setComment] = useState('');
  const [bookingOrder, setBookingOrder] = useState([]);
  console.log(bookingOrder);

  const handleFormSubmit = evt => {
    setBookingOrder([
      ...bookingOrder,
      {
        id: nanoid(),
        name,
        email,
        boolingDate,
        comment,
      },
    ]);
    evt.preventDefault();
    resetForm();
  };

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value);
    }
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'boolingDate') {
      setBoolingDate(value);
    }
    if (name === 'comment') {
      setComment(value);
    }
  };
  const resetForm = () => {
    setName('');
    setEmail('');
    setBoolingDate('');
    setComment('');
  };

  return (
    <>
      <div className={css['booking-container']}>
        <h2 className={css['title']}>Book your campervan now</h2>
        <p className={css['title-text']}>
          Stay connected! We are always ready to help you.
        </p>
        <form className="form-container" onSubmit={handleFormSubmit}>
          <div className="form-container-name">
            <input
              value={name}
              onChange={evt => handleChange(evt)}
              className={css['name-imput']}
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div className="form-container-email">
            <input
              value={email}
              onChange={evt => handleChange(evt)}
              className={css['email-imput']}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
              title="Email should be in the format: example@example.com"
              required
            />
          </div>
          <div className="form-container-boolingdate">
            <input
              value={boolingDate}
              onChange={evt => handleChange(evt)}
              className={css['boolingdate-imput']}
              type="date"
              id="boolingDate"
              name="boolingDate"
              title="Please choose a new date"
              required
            />
          </div>
          <div className="form-container-comment">
            <textarea
              value={comment}
              onChange={evt => handleChange(evt)}
              className={css['comment-imput']}
              id="comment"
              name="comment"
              placeholder="Comment"
            />
          </div>

          <ButtonCardItems type="submit" variant="button-send">
            Send
          </ButtonCardItems>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
