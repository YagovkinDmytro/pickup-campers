import CardList from 'components/CardList/CardList';
import Filter from 'components/Filter/Filter';
import { Outlet } from 'react-router-dom';
import css from './Campers.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCampersAll } from '../../redux/operations';
import { setPage } from '../../redux/filtersSlice';
import {
  selectVisibleCampers,
  selectCampersLimit,
  selectCampersPage,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';

const CampersPage = () => {
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
    <div>
      <div className={css.container}>
        <Filter />
        <CardList
          campers={campers}
          isLoading={isLoading}
          error={error}
          page={page}
          limit={limit}
          handleClick={handleClick}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default CampersPage;
