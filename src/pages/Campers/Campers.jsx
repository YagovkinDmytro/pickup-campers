import CardList from 'components/CardList/CardList';
import { Outlet } from 'react-router-dom';

const CampersPage = () => {
  return (
    <div>
      <CardList />
      <Outlet />
    </div>
  );
};

export default CampersPage;
