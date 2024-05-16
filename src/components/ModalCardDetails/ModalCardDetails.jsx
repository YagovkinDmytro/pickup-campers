import { useEffect } from 'react';
import css from './ModalCardDetails.module.css';
import { useDispatch } from 'react-redux';
import { setCloseModal } from '../../redux/ModalCardDetailsSlice';
import ModalCardDetailsItem from 'components/ModalCardDetailsItem/ModalCardDetailsItem';

const ModalCardDetails = () => {
  const dispatch = useDispatch();

  const handleSetCloseModal = evt => {
    if (
      evt.target.className === 'overlay' ||
      evt.target.name === 'close-button'
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
        <button name="close-button" type="button" onClick={handleSetCloseModal}>
          Close
        </button>
        <ModalCardDetailsItem />
      </div>
    </div>
  );
};

export default ModalCardDetails;
