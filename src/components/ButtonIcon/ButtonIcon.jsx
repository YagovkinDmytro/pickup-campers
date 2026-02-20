import css from './ButtonIcon.module.css';
import cn from 'utils/class-names';

const ButtonIcon = ({ type, className, active, onClick, children }) => {
  return (
    <button
      type={type}
      className={cn(css.container, className, { [css.active]: active })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
