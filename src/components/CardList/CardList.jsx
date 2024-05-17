import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/operations';
import {
  selectCampers,
  selectCardDetailsPage,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import { useEffect } from 'react';
import CardItem from '../CardItem/CardItem';
import Loader from 'components/Loader/Loader';
import ButtonCardItems from 'components/ButtonCardItems/ButtonCardItems';
import css from './CardList.module.css';

const CardList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectCardDetailsPage);

  useEffect(() => {
    dispatch(fetchCampers(page));
  }, [dispatch, page]);

  return (
    <div className={css['card-list-container']}>
      {isLoading && <Loader />}
      {error && <h1>{error}</h1>}
      <ul className={css['card-list']}>
        {campers && campers.length > 0 && <CardItem />}
      </ul>

      {campers.length <= 12 && (
        <ButtonCardItems type="button" variant="button-load-more">
          Load more
        </ButtonCardItems>
      )}
    </div>
  );
};

export default CardList;
