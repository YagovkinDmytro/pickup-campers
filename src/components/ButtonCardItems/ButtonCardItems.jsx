import { useDispatch, useSelector } from 'react-redux';
import css from './ButtonCardItems.module.css';
import {
  setCloseModal,
  setModalCardDetailsId,
} from '../../redux/modalCardDetailsSlice';
import { selectCardDetailsPage } from '../../redux/selectors';
import { setPage } from '../../redux/campersSlice';

const ButtonCardItems = ({ id, type, variant, children }) => {
  const dispatch = useDispatch();

  const handleSetCloseModal = () => {
    dispatch(setCloseModal(true));
  };

  const page = useSelector(selectCardDetailsPage);

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  const handleButtonOnClick = evt => {
    dispatch(setModalCardDetailsId(evt.target.id));
    switch (variant) {
      case 'button-show-more':
        handleSetCloseModal();
        break;
      case 'button-load-more':
        handleLoadMore();
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
