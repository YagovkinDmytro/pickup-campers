import css from './reviews.module.css';
import { ReactComponent as Star } from '../../images/icons/star.svg';
import { selectModalCamper } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const Reviews = () => {
  const camper = useSelector(selectModalCamper);

  if (!camper) {
    return null;
  }

  const { reviews } = camper;

  return reviews.map(({ reviewer_name, reviewer_rating, comment }) => {
    const capitalizedLetter = reviewer_name.charAt(0).toUpperCase();

    const reviewerRatingArr = rating => {
      let stars = [];
      for (let i = 0; i < rating; i += 1) {
        stars.push(<Star key={i} />);
      }
      return <>{stars}</>;
    };

    return (
      <div key={nanoid()} className={css['container-reviews']}>
        <div className={css['container-info']}>
          <div className={css['image-container']}>
            <h2 className={css['name-letter']}>{capitalizedLetter}</h2>
          </div>
          <div className={css['name-stars-container']}>
            <h3 className={css['name']}>{reviewer_name}</h3>
            <div>{reviewerRatingArr(reviewer_rating)}</div>
          </div>
        </div>
        <p>{comment}</p>
      </div>
    );
  });
};

export default Reviews;
