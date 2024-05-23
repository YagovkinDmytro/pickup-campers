import { useEffect } from 'react';
import css from './ModalCardDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCloseModal } from '../../redux/ModalCardDetailsSlice';
import { ReactComponent as CloseIcon } from '../../images/icons/close.svg';
import { ReactComponent as Star } from '../../images/icons/star.svg';
import { selectInfoModalDetails } from '../../redux/selectors';
import { ReactComponent as Location } from '../../images/icons/map-pin.svg';
import { nanoid } from '@reduxjs/toolkit';
import { Link, useLocation } from 'react-router-dom';
import Features from 'pages/Features/Features';
import Reviews from 'pages/Reviews/Reviews';
import NavigationDetails from 'components/NavigationDetails/NavigationDetails';
import BookingForm from 'components/BookingForm/BookingForm';

const ModalCardDetails = () => {
  const dispatch = useDispatch();

  const currentlocation = useLocation();

  const modalCardDetails = useSelector(selectInfoModalDetails);

  const { name, price, rating, reviews, location, description, gallery } =
    modalCardDetails[0];

  const handleSetCloseModal = evt => {
    if (
      evt.target.className === 'overlay' ||
      evt.currentTarget.name === 'close-button'
    ) {
      dispatch(setCloseModal(false));
    }
  };

  useEffect(() => {
    const handleEsc = ({ code }) => {
      if (code === 'Escape') {
        dispatch(setCloseModal(false));
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [dispatch]);

  return (
    <div className={css['overlay']} onClick={handleSetCloseModal}>
      <div className={css['modal']}>
        <div className={css['title']}>
          <h2>{name}</h2>
          <button
            name="close-button"
            type="button"
            className={css['close-modal-button']}
            onClick={handleSetCloseModal}
          >
            <Link to={'/catalog'}>
              <CloseIcon width={32} height={32}></CloseIcon>
            </Link>
          </button>
        </div>
        <div className={css['thumb-stars-location']}>
          <div className={css['star']}>
            <Star width={16} height={16} />
            <p>
              {rating} ({reviews.length} Reviews)
            </p>
          </div>
          <div className={css['location']}>
            <Location width={16} height={16} />
            <p>{location}</p>
          </div>
        </div>
        <h2 className={css['price-item']}>€{price},00</h2>
        <ul className={css['thumb-card-picture']}>
          {gallery.map(cardPicture => (
            <li key={nanoid()}>
              <img
                className={css['card-picture']}
                src={cardPicture}
                alt="camper"
                width={290}
                height={310}
              />
            </li>
          ))}
        </ul>
        <div className={css['info']}>
          <p className={css['description']}>{description}</p>
        </div>
        <div>
          <NavigationDetails />
          <div className={css['info-form-container']}>
            {currentlocation.pathname === '/catalog/feature' && <Features />}
            <div className={css['info-reviews-container']}>
              {currentlocation.pathname === '/catalog/reviews' && <Reviews />}
            </div>
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCardDetails;
