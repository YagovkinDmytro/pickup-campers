import CardItem from '../CardItem/CardItem';
import Loader from 'components/Loader/Loader';
import ButtonCardItems from 'components/ButtonCardItems/ButtonCardItems';
import css from './CardList.module.css';

const CardList = ({ isLoading, error, campers, page, limit, handleClick }) => {
  return (
    <div className={css['card-list-container']}>
      {isLoading && <Loader />}
      {error && <h1>{error}</h1>}
      <ul className={css['card-list']}>
        {campers && campers.length > 0 && <CardItem campers={campers} />}
      </ul>
      {page && campers.length >= page * limit && (
        <ButtonCardItems
          type="button"
          variant="button-load-more"
          onClick={handleClick}
        >
          Load more
        </ButtonCardItems>
      )}
    </div>
  );
};

export default CardList;
