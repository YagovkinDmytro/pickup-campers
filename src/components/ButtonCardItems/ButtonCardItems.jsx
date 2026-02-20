import { useDispatch, useSelector } from 'react-redux';
import css from './ButtonCardItems.module.css';
import { selectCardDetailsPage } from '../../redux/selectors';
import { setPage } from '../../redux/filtersSlice';
import { fetchLoadMore } from '../../redux/operations';

const ButtonCardItems = ({ id, type, variant, children }) => {
  const page = useSelector(selectCardDetailsPage);

  const dispatch = useDispatch();

  const handleButtonOnClick = () => {
    switch (variant) {
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
