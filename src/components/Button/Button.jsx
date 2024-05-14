import css from './Button.module.css';
const Button = ({ type, variant, children }) => {
  return (
    <button type={type} className={css[variant]}>
      {children}
    </button>
  );
};

export default Button;
