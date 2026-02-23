import { ReactComponent as Transmission } from '../images/icons/transmission.svg';
import { ReactComponent as AC } from '../images/icons/air-conditioner.svg';
import { ReactComponent as Kitchen } from '../images/icons/canteen.svg';
import { ReactComponent as GasStation } from '../images/icons/gas-station.svg';
import { ReactComponent as TvIcon } from '../images/icons/tv.svg';
import { ReactComponent as Gas } from '../images/icons/gas.svg';
import { ReactComponent as Shower } from '../images/icons/shower.svg';
import { ReactComponent as Freezer } from '../images/icons/freezer.svg';
import { ReactComponent as Toilet } from '../images/icons/toilet-paper.svg';
import { ReactComponent as Van } from '../images/icons/van-Button.svg';
import { ReactComponent as FullyIntegrated } from '../images/icons/fullyIntegrated-Button.svg';
import { ReactComponent as Alcove } from '../images/icons/alcove-Button.svg';

export const VEHICLE_EQUIPMENT_BUTTONS = [
  {
    type: 'single',
    key: 'transmission',
    value: 'automatic',
    label: 'Automatic',
    Icon: Transmission,
  },
  {
    type: 'single',
    key: 'engine',
    value: 'diesel',
    label: 'Diesel',
    Icon: GasStation,
  },
  { type: 'multi', key: 'airConditioner', label: 'AC', Icon: AC },
  { type: 'multi', key: 'kitchen', label: 'Kitchen', Icon: Kitchen },
  { type: 'multi', key: 'TV', label: 'TV', Icon: TvIcon },
  { type: 'multi', key: 'shower', label: 'Shower', Icon: Shower },
  { type: 'multi', key: 'toilet', label: 'Toilet', Icon: Toilet },
  { type: 'multi', key: 'freezer', label: 'Freezer', Icon: Freezer },
  { type: 'single', key: 'gas', value: 'gas', label: 'Gas', Icon: Gas },
];

export const VEHICLE_TYPE_BUTTONS = [
  { key: 'panelTruck', label: 'Van', Icon: Van },
  {
    key: 'fullyIntegrated',
    label: 'Fully Integrated',
    Icon: FullyIntegrated,
  },
  { key: 'alcove', label: 'Alcove', Icon: Alcove },
];
