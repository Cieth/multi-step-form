import React from 'react';
import styles from '../styles/components/Navigation.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import useWindowDimensions from '../util/useWindowDimension';
const Navigation = () => {
  const page = useSelector((state: RootState) => state.user.page);

  let styleActive = () => {
    return { backgroundColor: '#A0D3DE', color: 'black', border: 'none' };
  };
  const isMobile = useWindowDimensions().width;
  const navi = [
    {
      number: 1,
      info: 'YOUR INFO',
    },
    {
      number: 2,
      info: 'SELECT PLAN',
    },
    {
      number: 3,
      info: 'ADD-ONS',
    },
    {
      number: 4,
      info: 'SUMMARY',
    },
  ];
  return (
    <div className={styles.Navigation__body}>
      {isMobile > 800
        ? navi.map((item) => {
            return (
              <div className={styles.Navigation__body_step}>
                <button
                  name={item.number.toString()}
                  style={page === item.number ? styleActive() : {}}
                >
                  {item.number}
                </button>
                <div className={styles.Navigation__body_step_info}>
                  <span>Step {item.number}</span>
                  <span>{item.info}</span>
                </div>
              </div>
            );
          })
        : navi.map((item) => {
            return (
              <button
                name={item.number.toString()}
                style={page === item.number ? styleActive() : {}}
              >
                1
              </button>
            );
          })}
    </div>
  );
};

export default Navigation;
