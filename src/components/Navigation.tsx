import React from 'react';
import styles from '../styles/components/Navigation.module.css';
import { useLocation } from 'react-router-dom';
const Navigation = () => {
  let getLocation = useLocation();
  let path = getLocation.pathname;
  let styleActive = () => {
    return { backgroundColor: '#A0D3DE', color: 'black', border: 'none' };
  };
  return (
    <div className={styles.Navigation__body}>
      <button style={path === '/' ? styleActive() : {}}>1</button>
      <button style={path === '/plan' ? styleActive() : {}}>2</button>
      <button style={path === '/addon' ? styleActive() : {}}>3</button>
      <button style={path === '/billing' ? styleActive() : {}}>4</button>
    </div>
  );
};

export default Navigation;
