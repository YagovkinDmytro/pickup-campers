import { useEffect, useRef } from 'react';
import css from './ModalCardDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCloseModal } from '../../redux/ModalCardDetailsSlice';
import { ReactComponent as CloseIcon } from '../../images/icons/close.svg';
import { ReactComponent as Star } from '../../images/icons/star.svg';
import { selectInfoModalDetails } from '../../redux/selectors';
import { ReactComponent as Location } from '../../images/icons/map-pin.svg';
import { nanoid } from '@reduxjs/toolkit';
import { Link, NavLink, Outlet } from 'react-router-dom';

const ModalCardDetails = () => {
  const dispatch = useDispatch();

  const previousLocation = useRef('/catalog');

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
            <Link to={previousLocation.current}>
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
              />
            </li>
          ))}
        </ul>
        <div className={css['info']}>
          <p className={css['description']}>{description}</p>
        </div>
        <div>
          <ul>
            <li>
              <NavLink to="/catalog/feature">Features</NavLink>
            </li>
            <li>
              <NavLink to="/catalog/reviews">Reviews</NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ModalCardDetails;
