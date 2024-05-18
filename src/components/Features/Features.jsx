import CategoriesItemList from 'components/CategoriesItemList/CategoriesItemList';

const Features = ({ form, length, width, height, tank, consumption }) => {
  return (
    <>
      <h2>Features</h2>
      <CategoriesItemList />
      <div>
        <div>
          <p>Form</p>
          <p>{form}</p>
        </div>
        <div>
          <p>Length</p>
          <p>{length}</p>
        </div>
        <div>
          <p>Width</p>
          <p>{width}</p>
        </div>
        <div>
          <p>Height</p>
          <p>{height}</p>
        </div>
        <div>
          <p>Tank</p>
          <p>{tank}</p>
        </div>
        <div>
          <p>Consumption</p>
          <p>{consumption}</p>
        </div>
      </div>
    </>
  );
};

export default Features;
