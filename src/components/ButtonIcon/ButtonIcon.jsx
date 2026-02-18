import css from './ButtonIcon.module.css';

const ButtonIcon = ({ id, type, children }) => {
  return (
    <button id={id} type={type} className={css.container} onClick={() => {}}>
      {children}
    </button>
  );
};

export default ButtonIcon;
