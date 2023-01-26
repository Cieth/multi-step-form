import styles from '../styles/components/Cards.module.css';
import Fields from './Fields';
import { useLocation } from 'react-router-dom';

export default function Cards() {
  const location = useLocation().pathname;
  const title = () => {
    if (location === '/') {
      return 'Personal info';
    }
    return '';
  };
  const description = () => {
    if (location === '/') {
      return 'Please provide your name, email address and phone number.';
    }
  };
  return (
    <div className={styles.Card__body}>
      <div className={styles.Card__content}>
        <div className={styles.Card__title}>{title()}</div>
        <div className={styles.Card__description}>{description()}</div>
      </div>
      <div className={styles.Card__content}>
        <Fields />
      </div>
    </div>
  );
}
