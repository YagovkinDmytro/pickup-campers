import { ReactComponent as Bed } from '../../images/icons/bed.svg';
import { ReactComponent as People } from '../../images/icons/people.svg';
import { ReactComponent as Transmission } from '../../images/icons/transmission.svg';
import { ReactComponent as Gas } from '../../images/icons/gas-station.svg';
import { ReactComponent as Kitchen } from '../../images/icons/canteen.svg';
import { ReactComponent as AC } from '../../images/icons/air-conditioner.svg';
import css from './DetailsListItems.module.css';

const DetailsListItems = ({
  adults,
  engine,
  transmission,
  kitchen,
  beds,
  airConditioner,
}) => {
  return (
    <div className={css['categories-list']}>
      <ul className={css['thumb-dateils']}>
        {adults && (
          <li className={css['dateils']}>
            <People />
            <p>{adults} Adults</p>
          </li>
        )}
        {transmission && (
          <li className={css['dateils']}>
            <Transmission />
            <p>{transmission === 'automatic' ? 'Automatic' : 'Manual'}</p>
          </li>
        )}
        {engine && (
          <li className={css['dateils']}>
            <Gas />
            <p>{engine === 'petrol' ? 'Petrol' : 'Diesel'}</p>
          </li>
        )}
        {kitchen && (
          <li className={css['dateils']}>
            <Kitchen />
            <p>Kitchen</p>
          </li>
        )}
        {beds && (
          <li className={css['dateils']}>
            <Bed />
            <p>{beds} Beds</p>
          </li>
        )}
        {airConditioner && (
          <li className={css['dateils']}>
            <AC />
            <p>AC</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default DetailsListItems;
