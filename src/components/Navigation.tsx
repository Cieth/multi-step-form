import React from 'react';
import styles from '../styles/components/Navigation.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
const Navigation = () => {
  const page = useSelector((state: RootState) => state.user.page);

  let styleActive = () => {
    return { backgroundColor: '#A0D3DE', color: 'black', border: 'none' };
  };

  return (
    <div className={styles.Navigation__body}>
      <button name='1' style={page === 1 ? styleActive() : {}}>
        1
      </button>
      <button name='2' style={page === 2 ? styleActive() : {}}>
        2
      </button>
      <button name='3' style={page === 3 ? styleActive() : {}}>
        3
      </button>
      <button name='4' style={page === 4 ? styleActive() : {}}>
        4
      </button>
    </div>
  );
};

export default Navigation;
