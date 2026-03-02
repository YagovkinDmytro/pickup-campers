import { useDispatch, useSelector } from 'react-redux';
import { fetchCampersAll } from '../../redux/operations';
import {
  selectCampersLimit,
  selectCampersPage,
  selectError,
  selectIsLoading,
  selectVisibleCampers,
} from '../../redux/selectors';
import { useEffect } from 'react';
import CardItem from '../CardItem/CardItem';
import Loader from 'components/Loader/Loader';
import ButtonCardItems from 'components/ButtonCardItems/ButtonCardItems';
import css from './CardList.module.css';
import { setPage } from '../../redux/filtersSlice';

const CardList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectVisibleCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampersAll());
  }, [dispatch]);

  const page = useSelector(selectCampersPage);
  const limit = useSelector(selectCampersLimit);

  const handleClick = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <div className={css['card-list-container']}>
      {isLoading && <Loader />}
      {error && <h1>{error}</h1>}
      <ul className={css['card-list']}>
        {campers && campers.length > 0 && <CardItem campers={campers} />}
      </ul>
      {campers.length >= page * limit && (
        <ButtonCardItems
          type="button"
          variant="button-load-more"
          onClick={handleClick}
        >
          Load more
        </ButtonCardItems>
      )}
    </div>
  );
};

export default CardList;
