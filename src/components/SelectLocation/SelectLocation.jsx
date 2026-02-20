import css from './SelectLocation.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocation, selectLocationList } from '../../redux/selectors';
import { setLocation } from '../../redux/filtersSlice';

const SelectLocation = () => {
  const dispatch = useDispatch();
  const locationList = useSelector(selectLocationList);
  const location = useSelector(selectLocation);

  const handleChange = e => {
    dispatch(setLocation(e.target.value));
  };

  return (
    <div className={css.selectContainer}>
      <label className={css.selectLabel} htmlFor="location">
        Location
      </label>
      <select
        className={css.selectLocation}
        id="location"
        value={location}
        onChange={handleChange}
      >
        <option value="">All cities</option>
        {locationList.map(city => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectLocation;
