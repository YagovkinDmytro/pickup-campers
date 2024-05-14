import Button from 'components/Button/Button';
import css from './CardItem.module.css';

const CardItem = () => {
  return (
    <div className={css['card']}>
      <div>
        <img src="" alt="" width={290} height={310} />
      </div>
      <div className={css['info']}>
        <div className={css['title']}>
          <h1>Name Mavericks</h1>
          <div>
            <p>€8000.00</p>
            <svg className="" width={24} height={24}>
              <use href=""></use>
            </svg>
          </div>
        </div>
        <div>
          <svg className="" width={24} height={24}>
            <use href=""></use>
          </svg>
          <p>4.4(2 Reviews)</p>
        </div>
        <div>
          <svg className="" width={24} height={24}>
            <use href=""></use>
          </svg>
          <p>Location</p>
        </div>
        <p>Description</p>
        <div>
          <svg className="" width={24} height={24}>
            <use href=""></use>
          </svg>
          <p></p>
        </div>
        <Button type="button" variant="button-show-more">
          Show more
        </Button>
      </div>
    </div>
  );
};

export default CardItem;
