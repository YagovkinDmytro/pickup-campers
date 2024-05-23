import { useDispatch, useSelector } from 'react-redux';
import css from './ButtonCardItems.module.css';
import {
  setCloseModal,
  setModalCardDetailsId,
} from '../../redux/ModalCardDetailsSlice';
import { selectCardDetailsPage } from '../../redux/selectors';
import { setPage } from '../../redux/campersSlice';
import { fetchLoadMore } from '../../redux/operations';

const ButtonCardItems = ({ id, type, variant, children }) => {
  const page = useSelector(selectCardDetailsPage);

  const dispatch = useDispatch();

  const handleButtonOnClick = evt => {
    switch (variant) {
      case 'button-show-more':
        dispatch(setCloseModal(true));
        dispatch(setModalCardDetailsId(evt.target.id));
        break;
      case 'button-load-more':
        dispatch(setPage(page + 1));
        dispatch(fetchLoadMore(page + 1));
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
