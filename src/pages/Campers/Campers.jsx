import CardList from 'components/CardList/CardList';
import Filter from 'components/Filter/Filter';
import { Outlet } from 'react-router-dom';
import css from './Campers.module.css';

const CampersPage = () => {
  return (
    <div>
      <div className={css.container}>
        <Filter />
        <CardList />
      </div>
      <Outlet />
    </div>
  );
};

export default CampersPage;
