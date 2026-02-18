import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import css from './VehicleType.module.css';
import { ReactComponent as Van } from '../../images/icons/van-Button.svg';
import { ReactComponent as FullyIntegrated } from '../../images/icons/fullyIntegrated-Button.svg';
import { ReactComponent as Alcove } from '../../images/icons/alcove-Button.svg';

const VehicleType = () => {
  return (
    <div>
      <h3 className={css.title}>Vehicle Equipment</h3>
      <div className={css.line}></div>
      <ul className={css.list}>
        <li>
          <ButtonIcon>
            <Van width={40} height={28} />
            Van
          </ButtonIcon>
        </li>
        <li>
          <ButtonIcon>
            <FullyIntegrated width={40} height={28} />
            Fully Integrated
          </ButtonIcon>
        </li>
        <li>
          <ButtonIcon>
            <Alcove width={40} height={28} />
            Alcove
          </ButtonIcon>
        </li>
      </ul>
    </div>
  );
};

export default VehicleType;
