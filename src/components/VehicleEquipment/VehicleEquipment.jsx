import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import css from './VehicleEquipment.module.css';
import { ReactComponent as Transmission } from '../../images/icons/transmission.svg';
import { ReactComponent as AC } from '../../images/icons/air-conditioner.svg';
import { ReactComponent as Kitchen } from '../../images/icons/canteen.svg';
import { ReactComponent as Gas } from '../../images/icons/gas-station.svg';
import { ReactComponent as Bed } from '../../images/icons/bed.svg';
import { ReactComponent as TvIcon } from '../../images/icons/tv.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectFeatures } from '../../redux/selectors';
import {
  setEngine,
  setTransmission,
  toggleFeature,
} from '../../redux/filtersSlice';

const VehicleEquipment = () => {
  const selectedFeatures = useSelector(selectFeatures);
  const dispatch = useDispatch();

  const handleFeatures = (key, value) => {
    if (key === 'transmission') {
      dispatch(setTransmission(value));
    }
    if (key === 'engine') {
      dispatch(setEngine(value));
    }
    dispatch(toggleFeature(key));
  };

  const FEATURES = [
    {
      key: 'transmission',
      value: 'automatic',
      label: 'Automatic',
      Icon: Transmission,
    },
    { key: 'engine', value: 'diesel', label: 'Diesel', Icon: Gas },
    { key: 'airConditioner', label: 'AC', Icon: AC },
    { key: 'beds', label: 'Bed', Icon: Bed },
    { key: 'kitchen', label: 'Kitchen', Icon: Kitchen },
    { key: 'tv', label: 'TV', Icon: TvIcon },
  ];

  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle Equipment</h3>
      <div className={css.line}></div>
      <ul className={css.list}>
        {FEATURES.map(({ key, value, label, Icon }) => (
          <li key={key}>
            <ButtonIcon
              type="button"
              active={selectedFeatures.includes(key)}
              value={value}
              onClick={() => {
                handleFeatures(key, value);
              }}
            >
              <Icon width={32} height={32} />
              {label}
            </ButtonIcon>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleEquipment;
