import Location from 'components/SelectLocation/SelectLocation';
import CardList from 'components/CardList/CardList';
import { Outlet } from 'react-router-dom';
import css from './Campers.module.css';
import VehicleEquipment from 'components/VehicleEquipment/VehicleEquipment';
import VehicleType from 'components/VehicleType/VehicleType';

const CampersPage = () => {
  return (
    <div>
      <div className={css.filterContainer}>
        <div>
          <Location />
          <h2 className={css.title}>Filters</h2>
          <VehicleEquipment />
          <VehicleType />
        </div>
        <CardList />
      </div>
      <Outlet />
    </div>
  );
};

export default CampersPage;
