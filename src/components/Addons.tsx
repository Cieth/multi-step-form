import React from 'react';
import { useSelector } from 'react-redux';
import style from '../styles/components/Addons.module.css';
import { RootState } from '../app/store';
import {
  deleteOnlineAddons,
  setActiveAddons,
  setAddon,
  setOnlineAddons,
  setTotalAddon,
} from '../app/slices/userSlice';
import { useDispatch } from 'react-redux';

const Addons = () => {
  const data = [
    {
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: '$1/mo',
    },
    {
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: '$2/mo',
    },
    {
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: '$2/mo',
    },
    {
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: '$10/yr',
    },
    {
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: '$20/yr',
    },
    {
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: '$20/yr',
    },
  ];
  const dispatch = useDispatch();
  let activeAddons = useSelector((state: RootState) => state.user.activeAddons);
  const totalAddon = useSelector((state: RootState) => state.user.totalAddon);
  const yearly = useSelector((state: RootState) => state.user.yearly);
  const getData = () => {
    return yearly ? data.slice(3, 6) : data.slice(0, 3);
  };
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const name = e.currentTarget.name;
    if (checked) {
      if (name.split(' ')[0] === 'Online') {
        dispatch(setAddon({ online: true }));
        dispatch(setOnlineAddons('online'));
        !yearly
          ? dispatch(setTotalAddon(totalAddon + 1))
          : dispatch(setTotalAddon(totalAddon + 10));
      }
      if (name.split(' ')[0] === 'Larger') {
        dispatch(setAddon({ larger: true }));
        dispatch(setOnlineAddons('larger'));
        !yearly
          ? dispatch(setTotalAddon(totalAddon + 2))
          : dispatch(setTotalAddon(totalAddon + 20));
      }
      if (name.split(' ')[0] === 'Customizable') {
        dispatch(setOnlineAddons('customizable'));
        dispatch(setAddon({ customizable: true }));
        !yearly
          ? dispatch(setTotalAddon(totalAddon + 2))
          : dispatch(setTotalAddon(totalAddon + 20));
      }
    } else {
      if (name.split(' ')[0] === 'Online') {
        dispatch(setAddon({ online: false }));
        dispatch(deleteOnlineAddons('online'));
        !yearly
          ? dispatch(setTotalAddon(totalAddon - 1))
          : dispatch(setTotalAddon(totalAddon - 10));
      }
      if (name.split(' ')[0] === 'Larger') {
        dispatch(setAddon({ larger: false }));
        dispatch(deleteOnlineAddons('larger'));
        !yearly
          ? dispatch(setTotalAddon(totalAddon - 2))
          : dispatch(setTotalAddon(totalAddon - 20));
      }
      if (name.split(' ')[0] === 'Customizable') {
        dispatch(setAddon({ customizable: false }));
        dispatch(deleteOnlineAddons('customizable'));
        !yearly
          ? dispatch(setTotalAddon(totalAddon - 2))
          : dispatch(setTotalAddon(totalAddon - 20));
      }
    }
  };

  return (
    <form className={style.Plans__body}>
      {getData().map((item, i) => {
        return (
          <div
            key={i}
            className={
              !activeAddons[i] ? style.Plans__card : style.Plans__card_active
            }
          >
            <div className={style.Plans__card_img}>
              <input
                onChange={handleCheck}
                type='checkbox'
                className={style.double}
                value={item.title}
                checked={activeAddons[i]}
                name={item.title}
                id={i.toString()}
              />
            </div>
            <div className={style.Plans__card_content}>
              <span>{item.title}</span>
              <p>{item.description}</p>
            </div>
            <div className={style.Plans__card_content}>
              <h3>{item.price}</h3>
            </div>
          </div>
        );
      })}
    </form>
  );
};

export default Addons;
