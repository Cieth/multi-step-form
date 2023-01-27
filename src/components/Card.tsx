import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import styles from '../styles/components/Cards.module.css';
import Addons from './Addons';
import Billing from './Billing';
import Fields from './Fields';
import Plans from './Plans';
import useWindowDimensions from '../util/useWindowDimension';
import Nav from './Nav';
import Navigation from './Navigation';
interface cardProps {
  title: string;
  description: string;
}

export default function Cards({ title, description }: cardProps) {
  const isMobile = useWindowDimensions().width;
  const page = useSelector((state: RootState) => state.user.page);
  return (
    <div className={styles.Card__body}>
      <div className={styles.Card__body_navigation}>
        {isMobile > 800 && <Navigation />}
      </div>
      <div className={styles.Card__body_content_main}>
        <div className={styles.Card__content}>
          <div className={styles.Card__title}>{title}</div>
          <div className={styles.Card__description}>{description}</div>
        </div>
        <div className={styles.Card__content_2}>
          {page === 1 && <Fields />}
          {page === 2 && <Plans />}
          {page === 3 && <Addons />}
          {page === 4 && <Billing />}
        </div>
        <div>{isMobile > 800 ? <Nav /> : <></>}</div>
      </div>
    </div>
  );
}
