import React, { ChangeEvent } from 'react';
import style from '../styles/components/Switch.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setYearly } from '../app/slices/userSlice';
import { RootState } from '../app/store';
const Switch = () => {
  const dispatch = useDispatch();
  const yearly = useSelector((state: RootState) => state.user.yearly);

  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    if (checked) {
      dispatch(setYearly(true));
    } else {
      dispatch(setYearly(false));
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
