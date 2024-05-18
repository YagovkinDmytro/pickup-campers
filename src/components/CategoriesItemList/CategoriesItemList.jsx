import { ReactComponent as Bed } from '../../images/icons/bed.svg';
import { ReactComponent as People } from '../../images/icons/people.svg';
import { ReactComponent as Transmission } from '../../images/icons/transmission.svg';
import { ReactComponent as Gas } from '../../images/icons/gas-station.svg';
import { ReactComponent as Kitchen } from '../../images/icons/canteen.svg';
import { ReactComponent as AC } from '../../images/icons/air-conditioner.svg';
import { ReactComponent as Microwave } from '../../images/icons/microwave.svg';
import { ReactComponent as Freezer } from '../../images/icons/freezer.svg';
import { ReactComponent as Toilet } from '../../images/icons/toilet-paper.svg';
import { ReactComponent as TvIcon } from '../../images/icons/tv.svg';
import { ReactComponent as CdIcon } from '../../images/icons/cd.svg';
import { ReactComponent as Radio } from '../../images/icons/radio-linear.svg';
import { ReactComponent as Shower } from '../../images/icons/shower.svg';
import { ReactComponent as Hob } from '../../images/icons/hob.svg';
import css from './CategoriesItemList.module.css';

const CategoriesItemList = ({
  adults,
  engine,
  transmission,
  kitchen,
  beds,
  airConditioner,
  microwave,
  freezer,
  toilet,
  TV,
  CD,
  radio,
  shower,
  hob,
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
        {microwave && (
          <li className={css['dateils']}>
            <Microwave />
            <p>Microwave</p>
          </li>
        )}
        {freezer && (
          <li className={css['dateils']}>
            <Freezer />
            <p>Freezer</p>
          </li>
        )}
        {toilet && (
          <li className={css['dateils']}>
            <Toilet />
            <p>Toilet</p>
          </li>
        )}
        {TV && (
          <li className={css['dateils']}>
            <TvIcon />
            <p>TV</p>
          </li>
        )}
        {CD && (
          <li className={css['dateils']}>
            <CdIcon />
            <p>CD</p>
          </li>
        )}
        {radio && (
          <li className={css['dateils']}>
            <Radio />
            <p>Radio</p>
          </li>
        )}
        {shower && (
          <li className={css['dateils']}>
            <Shower />
            <p>Shower</p>
          </li>
        )}
        {hob && (
          <li className={css['dateils']}>
            <Hob />
            <p>Hob</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default CategoriesItemList;
