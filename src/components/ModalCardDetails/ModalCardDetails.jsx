import { useEffect } from 'react';
import css from './ModalCardDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setModalCardDetailsId } from '../../redux/modalCardDetailsSlice';
import { ReactComponent as CloseIcon } from '../../images/icons/close.svg';
import { ReactComponent as Star } from '../../images/icons/star.svg';
import { selectModalCamper } from '../../redux/selectors';
import { ReactComponent as Location } from '../../images/icons/map-pin.svg';
import { nanoid } from '@reduxjs/toolkit';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import NavigationDetails from 'components/NavigationDetails/NavigationDetails';
import BookingForm from 'components/BookingForm/BookingForm';
import FocusLock from 'react-focus-lock';

const ModalCardDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(setModalCardDetailsId(id));
    const handleEsc = ({ code }) => {
      if (code === 'Escape') {
        navigate('/catalog');
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [id, dispatch, navigate]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const camper = useSelector(selectModalCamper);

  if (!camper) {
    return null;
  }

  const { name, price, rating, reviews, location, description, gallery } =
    camper;

  const handleCloseModal = e => {
    if (
      e.target === e.currentTarget ||
      e.currentTarget.name === 'close-button'
    ) {
      navigate('/catalog');
    }
  };

  return (
    <FocusLock>
      <div
        className={css['overlay']}
        role="dialog"
        aria-modal="true"
        onClick={handleCloseModal}
      >
        <div className={css['modal']} onClick={e => e.stopPropagation()}>
          <div className={css['title']}>
            <h2>{name}</h2>
            <button
              name="close-button"
              type="button"
              className={css['close-modal-button']}
              onClick={handleCloseModal}
            >
              <CloseIcon width={32} height={32} />
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
          <NavigationDetails />
          <div className={css['info-form-container']}>
            <div>
              <Outlet />
            </div>
            <BookingForm />
          </div>
        </div>
      </div>
    </FocusLock>
  );
};

export default ModalCardDetails;
