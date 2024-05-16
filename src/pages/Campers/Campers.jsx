import CardList from 'components/CardList/CardList';
import ModalCardDatails from 'components/ModalCardDetails/ModalCardDetails';
import { useSelector } from 'react-redux';
import { selectCloseModal } from '../../redux/selectors';

const CampersPage = () => {
  const openModal = useSelector(selectCloseModal);
  console.log(openModal);

  return (
    <div>
      <CardList />
      {openModal && <ModalCardDatails />}
    </div>
  );
};

export default CampersPage;
