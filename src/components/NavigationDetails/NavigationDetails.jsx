import { NavLink } from 'react-router-dom';
import css from './navigationDetails.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: var(--main);
  &.active {
    text-decoration: underline #e44848;
    text-underline-offset: 24px;
    text-decoration-thickness: 5px;
  }
`;

const NavigationDetails = () => {
  return (
    <>
      <nav>
        <ul className={css['navigation-container']}>
          <li>
            <StyledLink to="" end>
              Features
            </StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </ul>
        <div className={css['navigation-line']}></div>
      </nav>
    </>
  );
};

export default NavigationDetails;
