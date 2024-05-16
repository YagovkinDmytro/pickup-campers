import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css['Loader-backdrop']}>
      <div className={css['Loader-container']}>
        <div className={css['Loader']}></div>
      </div>
    </div>
  );
};

export default Loader;
