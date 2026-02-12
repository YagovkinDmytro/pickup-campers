import Location from 'components/SelectLocation/SelectLocation';
import CardList from 'components/CardList/CardList';
import { Outlet } from 'react-router-dom';

const CampersPage = () => {
  return (
    <div>
      <Location />
      <CardList />
      <Outlet />
    </div>
  );
};

export default CampersPage;
