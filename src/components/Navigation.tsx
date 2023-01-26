import React from 'react';
import styles from '../styles/components/Navigation.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../app/slices/userSlice';
import { RootState } from '../app/store';
const Navigation = () => {
  let dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.user.page);

  let styleActive = () => {
    return { backgroundColor: '#A0D3DE', color: 'black', border: 'none' };
  };
  const next = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name;
    if (name === '1') {
      dispatch(setPage(1));
    }
    if (name === '2') {
      dispatch(setPage(2));
    }
    if (name === '3') {
      dispatch(setPage(3));
    }
    if (name === '4') {
      dispatch(setPage(4));
    }
    return '/';
  };
  return (
    <div className={styles.Navigation__body}>
      <button onClick={next} name='1' style={page === 1 ? styleActive() : {}}>
        1
      </button>
      <button onClick={next} name='2' style={page === 2 ? styleActive() : {}}>
        2
      </button>
      <button onClick={next} name='3' style={page === 3 ? styleActive() : {}}>
        3
      </button>
      <button onClick={next} name='4' style={page === 4 ? styleActive() : {}}>
        4
      </button>
    </div>
  );
};

export default Navigation;
