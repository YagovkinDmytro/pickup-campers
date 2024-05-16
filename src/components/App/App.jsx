// import Button from 'components/Button/Button';
import Navigation from 'components/Navigation/Navigation';
import CampersPage from 'pages/Campers/Campers';
import Favorites from 'pages/Favorites/Favorites';
import HomePage from 'pages/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="campers" element={<CampersPage />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
      {/* <Button type="button" variant="button-search">
        Search
      </Button>
      <Button type="submit" variant="button-send">
        Send
      </Button>
      <Button type="button" variant="button-show-more">
        Show more
      </Button>
      <Button type="button" variant="button-load-more">
        Load more
      </Button> */}
    </>
  );
};

export default App;