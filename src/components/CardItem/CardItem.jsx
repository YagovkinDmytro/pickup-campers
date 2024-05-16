import { ReactComponent as Hart } from '../../images/icons/hart.svg';
import { ReactComponent as Star } from '../../images/icons/star.svg';
import { ReactComponent as Location } from '../../images/icons/map-pin.svg';
import { useSelector } from 'react-redux';
import { selectCampers, selectInfoCardCampers } from '../../redux/selectors';
import DetailsListItems from 'components/DetaisListItems/DetailsListItems';
import ButtonCardItems from 'components/ButtonCardItems/ButtonCardItems';
import css from './CardItem.module.css';

const CardItem = () => {
  const infoCardCampers = useSelector(selectInfoCardCampers);
  const campers = useSelector(selectCampers);
  console.log(campers);

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
                <button type="button" className={css['button-hart']}>
                  <Hart
                    className={css['button-hart-icon']}
                    width={24}
                    height={24}
                  />
                </button>
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
            <DetailsListItems
              adults={adults}
              engine={engine}
              transmission={transmission}
              kitchen={kitchen}
              beds={beds}
              airConditioner={airConditioner}
            />
          </div>
          <ButtonCardItems id={_id} type="button" variant="button-show-more">
            Show more
          </ButtonCardItems>
        </div>
      </li>
    )
  );
};

export default CardItem;
