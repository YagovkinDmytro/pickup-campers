import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import css from './VehicleEquipment.module.css';

import { useDispatch, useSelector } from 'react-redux';
import {
  setEngine,
  setTransmission,
  setGas,
  toggleFeature,
} from '../../redux/filtersSlice';
import { VEHICLE_EQUIPMENT_BUTTONS } from 'configs/filtersConfig';
import { selectFilters } from '../../redux/selectors';

const VehicleEquipment = () => {
  const selectedFilters = useSelector(selectFilters);
  const dispatch = useDispatch();

  const isActive = item => {
    if (item.type === 'single') {
      return selectedFilters[item.key] === item.value;
    }

    if (item.type === 'multi') {
      return selectedFilters.features.includes(item.key);
    }

    return false;
  };

  const handleClick = item => {
    if (item.type === 'single') {
      if (item.key === 'transmission') {
        dispatch(setTransmission(item.value));
      }
      if (item.key === 'engine') {
        dispatch(setEngine(item.value));
      }
      if (item.key === 'gas') {
        dispatch(setGas(item.value));
      }
    }

    if (item.type === 'multi') {
      dispatch(toggleFeature(item.key));
    }
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle Equipment</h3>
      <div className={css.line}></div>
      <ul className={css.list}>
        {VEHICLE_EQUIPMENT_BUTTONS.map(item => (
          <li key={item.key}>
            <ButtonIcon
              type="button"
              active={isActive(item)}
              onClick={() => {
                handleClick(item);
              }}
            >
              <item.Icon width={32} height={32} />
              {item.label}
            </ButtonIcon>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleEquipment;
