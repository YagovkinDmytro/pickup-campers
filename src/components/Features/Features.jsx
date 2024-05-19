import CategoriesItemList from 'components/CategoriesItemList/CategoriesItemList';
import { useSelector } from 'react-redux';
import { selectInfoModalDetails } from '../../redux/selectors';
import css from './Features.module.css';

const Features = () => {
  const dataDetailsInfo = useSelector(selectInfoModalDetails);
  console.log(dataDetailsInfo);
  const { adults, details, form, length, width, height, tank, consumption } =
    dataDetailsInfo[0];
  const {
    airConditioner,
    microwave,
    freezer,
    toilet,
    TV,
    CD,
    radio,
    shower,
    hob,
  } = details;

  return (
    <>
      <div className={css['container-details']}>
        <div>
          <CategoriesItemList
            adults={adults}
            airConditioner={airConditioner}
            microwave={microwave}
            freezer={freezer}
            toilet={toilet}
            TV={TV}
            CD={CD}
            radio={radio}
            shower={shower}
            hob={hob}
          />
        </div>
        <div>
          <h2 className={css['title']}>Vehicle details</h2>
          <div className={css['navigation-line']}></div>
          <div className={css['text-info']}>
            <p>Form</p>
            <p className={css['capitalize']}>{form}</p>
          </div>
          <div className={css['text-info']}>
            <p>Length</p>
            <p>{length}</p>
          </div>
          <div className={css['text-info']}>
            <p>Width</p>
            <p>{width}</p>
          </div>
          <div className={css['text-info']}>
            <p>Height</p>
            <p>{height}</p>
          </div>
          <div className={css['text-info']}>
            <p>Tank</p>
            <p>{tank}</p>
          </div>
          <div className={css['text-info']}>
            <p>Consumption</p>
            <p>{consumption}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
