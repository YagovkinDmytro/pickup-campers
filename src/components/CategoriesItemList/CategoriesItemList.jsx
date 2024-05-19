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
        {adults && adults !== 0 ? (
          <li className={css['dateils']}>
            <People width={20} height={20} />
            <p>{adults} Adults</p>
          </li>
        ) : null}
        {transmission && transmission !== 0 ? (
          <li className={css['dateils']}>
            <Transmission width={20} height={20} />
            <p>{transmission === 'automatic' ? 'Automatic' : 'Manual'}</p>
          </li>
        ) : null}
        {engine && engine !== 0 ? (
          <li className={css['dateils']}>
            <Gas width={20} height={20} />
            <p>{engine === 'petrol' ? 'Petrol' : 'Diesel'}</p>
          </li>
        ) : null}
        {kitchen && kitchen !== 0 ? (
          <li className={css['dateils']}>
            <Kitchen width={20} height={20} />
            <p>Kitchen</p>
          </li>
        ) : null}
        {beds && beds !== 0 ? (
          <li className={css['dateils']}>
            <Bed width={20} height={20} />
            <p>{beds} Beds</p>
          </li>
        ) : null}
        {airConditioner && airConditioner !== 0 ? (
          <li className={css['dateils']}>
            <AC width={20} height={20} />
            <p>AC</p>
          </li>
        ) : null}
        {microwave && microwave !== 0 ? (
          <li className={css['dateils']}>
            <Microwave width={20} height={20} />
            <p>Microwave</p>
          </li>
        ) : null}
        {freezer && freezer !== 0 ? (
          <li className={css['dateils']}>
            <Freezer width={20} height={20} />
            <p>Freezer</p>
          </li>
        ) : null}
        {toilet && toilet !== 0 ? (
          <li className={css['dateils']}>
            <Toilet width={20} height={20} />
            <p>Toilet</p>
          </li>
        ) : null}
        {TV && TV !== 0 ? (
          <li className={css['dateils']}>
            <TvIcon width={20} height={20} />
            <p>TV</p>
          </li>
        ) : null}
        {CD && CD !== 0 ? (
          <li className={css['dateils']}>
            <CdIcon width={20} height={20} />
            <p>CD</p>
          </li>
        ) : null}
        {radio && radio !== 0 ? (
          <li className={css['dateils']}>
            <Radio width={20} height={20} />
            <p>Radio</p>
          </li>
        ) : null}
        {shower && shower !== 0 ? (
          <li className={css['dateils']}>
            <Shower width={20} height={20} />
            <p>Shower</p>
          </li>
        ) : null}
        {hob && hob !== 0 ? (
          <li className={css['dateils']}>
            <Hob width={20} height={20} />
            <p>Hob</p>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default CategoriesItemList;
