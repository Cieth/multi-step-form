import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import styles from '../styles/components/Cards.module.css';
import Fields from './Fields';
import Plans from './Plans';
interface cardProps {
  title: string;
  description: string;
}

export default function Cards({ title, description }: cardProps) {
  const page = useSelector((state: RootState) => state.user.page);
  return (
    <div className={styles.Card__body}>
      <div className={styles.Card__content}>
        <div className={styles.Card__title}>{title}</div>
        <div className={styles.Card__description}>{description}</div>
      </div>
      <div className={styles.Card__content}>
        {page === 1 && <Fields />}
        {page === 2 && <Plans />}
      </div>
    </div>
  );
}
