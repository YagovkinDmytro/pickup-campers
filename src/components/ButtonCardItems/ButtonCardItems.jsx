import css from './ButtonCardItems.module.css';

const ButtonCardItems = ({ id, type, variant, children, onClick }) => {
  return (
    <button id={id} type={type} className={css[variant]} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonCardItems;
