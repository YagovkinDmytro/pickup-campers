// import Button from 'components/Button/Button';
import Features from 'components/Features/Features';
import Navigation from 'components/Navigation/Navigation';
import Reviews from 'components/Reviews/Reviews';
import Section from 'components/Section/Section';
import CampersPage from 'pages/Campers/Campers';
import Favorites from 'pages/Favorites/Favorites';
import HomePage from 'pages/Home/Home';

import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Section>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CampersPage />}>
            <Route path="/catalog/feature" element={<Features />} />
            <Route path="/catalog/reviews" element={<Reviews />} />
          </Route>
          <Route path="favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
      {/* <ButtonCardItems type="button" variant="button-search">
        Search
      </ButtonCardItems> */}
    </Section>
  );
};

export default App;
