import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import css from './VehicleType.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setVehicleType } from '../../redux/filtersSlice';
import { selectFilters } from '../../redux/selectors';
import { VEHICLE_TYPE_BUTTONS } from 'configs/filtersConfig';

const VehicleType = () => {
  const selectedFilters = useSelector(selectFilters);

  const dispatch = useDispatch();

  const isActive = item => {
    return selectedFilters.form.includes(item.key);
  };

  const handleClick = item => {
    dispatch(setVehicleType(item.key));
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle Equipment</h3>
      <div className={css.line}></div>
      <ul className={css.list}>
        {VEHICLE_TYPE_BUTTONS.map(item => (
          <li key={item.key}>
            <ButtonIcon
              type="button"
              active={isActive(item)}
              onClick={() => {
                handleClick(item);
              }}
            >
              <item.Icon width={40} height={28} />
              {item.label}
            </ButtonIcon>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleType;
