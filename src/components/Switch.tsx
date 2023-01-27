import React from 'react';
import style from '../styles/components/Switch.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  setActivePlan,
  setTotalAddon,
  setTotalPlan,
  setYearly,
  setActiveAddons,
  setAddon,
} from '../app/slices/userSlice';
import { RootState } from '../app/store';
const Switch = () => {
  const dispatch = useDispatch();
  const yearly = useSelector((state: RootState) => state.user.yearly);

  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    if (checked) {
      dispatch(setYearly(true));
      dispatch(setActivePlan(4));
      dispatch(setTotalPlan(0));
      dispatch(setTotalAddon(0));
      dispatch(setAddon({ online: false, larger: false, customizable: false }));
      dispatch(setActiveAddons([false, false, false]));
    } else {
      dispatch(setYearly(false));
      dispatch(setActivePlan(4));
      dispatch(setTotalPlan(0));
      dispatch(setTotalAddon(0));
      dispatch(setAddon({ online: false, larger: false, customizable: false }));
      dispatch(setActiveAddons([false, false, false]));
    }
  };
  const active = {
    color: '#26216C',
  };
  return (
    <>
      <div className={style.Switch__body}>
        <span style={!yearly ? active : {}}>Monthly</span>
        <label className={style.switch}>
          <input checked={yearly} onChange={handleSwitch} type='checkbox' />
          <span className={style.slider}></span>
        </label>
        <span style={yearly ? active : {}}>Yearly</span>
      </div>
    </>
  );
};

export default Switch;
