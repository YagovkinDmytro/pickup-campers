import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/operations';
import {
  selectCampers,
  selectError,
  selectIsloading,
} from '../../redux/selectors';
import { useEffect } from 'react';
import CardItem from '../CardItem/CardItem';
import Loader from 'components/Loader/Loader';

const CardList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <h1>{error}</h1>}
      <ul>{campers && campers.length > 0 && <CardItem />}</ul>
    </>
  );
};

export default CardList;
