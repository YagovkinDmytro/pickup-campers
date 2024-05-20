import css from './reviews.module.css';
import { ReactComponent as Star } from '../../images/icons/star.svg';
import { selectInfoModalDetails } from '../../redux/selectors';
import { useSelector } from 'react-redux';

const Reviews = () => {
  // const alice = 'Alice';
  // const capitalizedLetter = alice.charAt(0).toUpperCase();
  // console.log(capitalizedLetter);

  const dataDetailsInfo = useSelector(selectInfoModalDetails);
  const { reviews } = dataDetailsInfo[0];
  console.log(reviews);

  return reviews.map(({ reviewer_name, reviewer_rating, comment }) => {
    const capitalizedLetter = reviewer_name.charAt(0).toUpperCase();

    return (
      <div className={css['container-reviews']}>
        <div className={css['container-info']}>
          <div className={css['image-container']}>
            <h2 className={css['name-letter']}>{capitalizedLetter}</h2>
            <img src="" alt="" />
          </div>
          <div className={css['name-stars-container']}>
            <h3 className={css['name']}>{reviewer_name}</h3>
            <div>
              <Star />
            </div>
          </div>
        </div>
        <p>{comment}</p>
      </div>
    );
  });
};

export default Reviews;
