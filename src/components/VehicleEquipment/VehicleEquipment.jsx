import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import css from './VehicleEquipment.module.css';
import { ReactComponent as Transmission } from '../../images/icons/transmission.svg';
import { ReactComponent as AC } from '../../images/icons/air-conditioner.svg';
import { ReactComponent as Kitchen } from '../../images/icons/canteen.svg';
import { ReactComponent as Shower } from '../../images/icons/shower.svg';
import { ReactComponent as Toilet } from '../../images/icons/toilet-paper.svg';
import { ReactComponent as TvIcon } from '../../images/icons/tv.svg';

const VehicleEquipment = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle Equipment</h3>
      <div className={css.line}></div>
      <ul className={css.list}>
        <li>
          <ButtonIcon>
            <AC width={32} height={32} />
            AC
          </ButtonIcon>
        </li>
        <li>
          <ButtonIcon>
            <Transmission width={32} height={32} />
            Automatic
          </ButtonIcon>
        </li>
        <li>
          <ButtonIcon>
            <Kitchen width={32} height={32} />
            Kitchen
          </ButtonIcon>
        </li>
        <li>
          <ButtonIcon>
            <TvIcon width={32} height={32} />
            TV
          </ButtonIcon>
        </li>
        <li>
          <ButtonIcon>
            <Shower width={32} height={32} />
            Shower
          </ButtonIcon>
        </li>
        <li>
          <ButtonIcon>
            <Toilet width={32} height={32} />
            WC
          </ButtonIcon>
        </li>
      </ul>
    </div>
  );
};

export default VehicleEquipment;
