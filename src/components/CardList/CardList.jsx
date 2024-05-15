import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/operations';
import {
  selectCampers,
  selectError,
  selectIsloading,
} from '../../redux/selectors';
import { useEffect } from 'react';
import CardItem from '../CardItem/CardItem';

const CardList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);
  // console.log(campers);
  // console.log(campers[0]['_id']);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Request in progress...</p>}
      {error && <h1>{error}</h1>}
      <ul>{campers && campers.length > 0 && <CardItem />}</ul>
    </>
  );
};

export default CardList;
