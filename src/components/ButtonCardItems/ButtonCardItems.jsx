import { useDispatch } from 'react-redux';
import css from './ButtonCardItems.module.css';
import {
  setCloseModal,
  setModalCardDetailsId,
} from '../../redux/ModalCardDetailsSlice';

const ButtonCardItems = ({ id, type, variant, children }) => {
  const dispatch = useDispatch();

  const handleSetCloseModal = () => {
    dispatch(setCloseModal(true));
  };

  const handleButtonOnClick = evt => {
    dispatch(setModalCardDetailsId(evt.target.id));
    switch (variant) {
      case 'button-show-more':
        handleSetCloseModal();
        break;
      default:
        return;
    }
  };

  return (
    <button
      id={id}
      type={type}
      className={css[variant]}
      onClick={handleButtonOnClick}
    >
      {children}
    </button>
  );
};

export default ButtonCardItems;
