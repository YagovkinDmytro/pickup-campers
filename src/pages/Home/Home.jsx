import css from './home.module.css';
import homeImage from '../../images/camper-home.jpg';

const HomePage = () => {
  return (
    <div className={css['home-container']}>
      <h1 className={css['title']}>Pickup-Campers</h1>
      <h2 className={css['title-text']}>
        Your home on wheels, travel on your own!
      </h2>
      <p className={css['text']}>
        Pickup-Campers offers you the opportunity to rent high quality camping
        trailers. Our trailers are equipped with everything necessary for a
        comfortable outdoor recreation.
      </p>
      <p className={css['text']}>
        Our trailers are equipped with everything necessary for a comfortable
        outdoor recreation. They are perfect for family trips, romantic weekends
        or adventures with friends.
      </p>
      <p className={css['text']}>
        With Pickup-Campers you can enjoy freedom of movement and the comfort of
        home, wherever you are. Join us and discover a new way to travel!
      </p>
      {/* <img src={homeImage} alt="camper" /> */}
    </div>
  );
};

export default HomePage;
