import { NavLink } from 'react-router-dom';
import css from './navigationDetails.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  &.active {
    text-decoration: underline #e44848;
    text-underline-offset: 24px;
    text-decoration-thickness: 5px;
  }
`;

const NavigationDetails = () => {
  return (
    <>
      <ul className={css['navigation-container']}>
        <li>
          <StyledLink to="/catalog/feature">Features</StyledLink>
        </li>
        <li>
          <StyledLink to="/catalog/reviews">Reviews</StyledLink>
        </li>
      </ul>
      <div className={css['navigation-line']}></div>
    </>
  );
};

export default NavigationDetails;
