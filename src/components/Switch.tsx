import React from 'react';
import style from '../styles/components/Switch.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  setActivePlan,
  setTotalPlan,
  setYearly,
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
    } else {
      dispatch(setYearly(false));
      dispatch(setActivePlan(4));
      dispatch(setTotalPlan(0));
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
          <input onChange={handleSwitch} type='checkbox' />
          <span className={style.slider}></span>
        </label>
        <span style={yearly ? active : {}}>Yearly</span>
      </div>
    </>
  );
};

export default Switch;
