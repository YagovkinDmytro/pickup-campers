import Button from 'components/Button/Button';
import css from './CardItem.module.css';
import { ReactComponent as Hart } from '../../images/icons/hart.svg';
import { ReactComponent as Star } from '../../images/icons/star.svg';
import { ReactComponent as Location } from '../../images/icons/map-pin.svg';
import { useSelector } from 'react-redux';
import { selectCampers, selectInfoCardCampers } from '../../redux/selectors';
import { ReactComponent as Bed } from '../../images/icons/bed.svg';
import { ReactComponent as People } from '../../images/icons/people.svg';
import { ReactComponent as Transmission } from '../../images/icons/transmission.svg';
import { ReactComponent as Gas } from '../../images/icons/gas-station.svg';
import { ReactComponent as Kitchen } from '../../images/icons/canteen.svg';
import { ReactComponent as AC } from '../../images/icons/air-conditioner.svg';

const CardItem = () => {
  const infoCardCampers = useSelector(selectInfoCardCampers);
  const campers = useSelector(selectCampers);
  console.log(campers);
  console.log(infoCardCampers);
  return infoCardCampers.map(
    ({
      _id,
      cardPicture,
      price,
      name,
      rating,
      reviews,
      location,
      description,
      adults,
      engine,
      transmission,
      kitchen,
      beds,
      airConditioner,
    }) => (
      <li key={_id} className={css['card']}>
        <div>
          <img
            className={css['card-picture']}
            src={cardPicture}
            alt="camper"
            width={290}
            height={310}
          />
        </div>
        <div className={css['card-info']}>
          <div className={css['info']}>
            <div className={css['title']}>
              <h2>{name}</h2>
              <div className={css['favorite']}>
                <h2>€{price}.00</h2>
                <Hart width={24} height={24} />
              </div>
            </div>
            <div className={css['thumb-star-location']}>
              <div className={css['star']}>
                <Star width={16} height={16} />
                <p>
                  {rating} ({reviews.length} Reviews)
                </p>
              </div>
              <div className={css['location']}>
                <Location width={16} height={16} />
                <p>{location}</p>
              </div>
            </div>
            <p className={css['description']}>{description}</p>
            <div className={css['categories-list']}>
              <ul className={css['thumb-dateils']}>
                <li className={css['dateils']}>
                  <People />
                  <p>{adults} Adults</p>
                </li>
                <li className={css['dateils']}>
                  <Transmission />
                  <p>{transmission === 'automatic' ? 'Automatic' : 'Manual'}</p>
                </li>
                <li className={css['dateils']}>
                  <Gas />
                  <p>{engine === 'petrol' ? 'Petrol' : 'Diesel'}</p>
                </li>
                {kitchen && (
                  <li className={css['dateils']}>
                    <Kitchen />
                    <p>Kitchen</p>
                  </li>
                )}
                <li className={css['dateils']}>
                  <Bed />
                  <p>{beds} Beds</p>
                </li>
                {airConditioner && (
                  <li className={css['dateils']}>
                    <AC />
                    <p>AC</p>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <Button type="button" variant="button-show-more">
            Show more
          </Button>
        </div>
      </li>
    )
  );
};

export default CardItem;
