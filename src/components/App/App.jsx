import Features from 'pages/Features/Features';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';
import Reviews from 'pages/Reviews/Reviews';
import Section from 'components/Section/Section';
import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('pages/Home/Home'));
const CampersPage = lazy(() => import('pages/Campers/Campers'));
const Favorites = lazy(() => import('pages/Favorites/Favorites'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
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
      </Section>
    </Suspense>
  );
};

export default App;
