import css from './Section.module.css';

const Section = ({ children }) => {
  return <div className={css['section-container']}>{children}</div>;
};

export default Section;
