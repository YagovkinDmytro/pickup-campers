import ButtonCardItems from 'components/ButtonCardItems/ButtonCardItems';
import SelectLocation from 'components/SelectLocation/SelectLocation';
import VehicleEquipment from 'components/VehicleEquipment/VehicleEquipment';
import VehicleType from 'components/VehicleType/VehicleType';
import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { resetFilters } from '../../redux/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetFilters());
  };

  return (
    <div className={css.container}>
      <SelectLocation />
      <h2 className={css.title}>Filters</h2>
      <VehicleEquipment />
      <VehicleType />
      <ButtonCardItems
        type="submit"
        variant="button-reset"
        onClick={handleClick}
      >
        Reset filters
      </ButtonCardItems>
    </div>
  );
};

export default Filter;
