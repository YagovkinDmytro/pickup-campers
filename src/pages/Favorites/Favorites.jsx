import CardList from 'components/CardList/CardList';
import { useSelector } from 'react-redux';
import { selectFavoritesCampers } from '../../redux/selectors';

const Favorites = () => {
  const selectedFavoritesCampers = useSelector(selectFavoritesCampers);

  return <CardList campers={selectedFavoritesCampers} />;
};

export default Favorites;
