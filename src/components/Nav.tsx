import styles from '../styles/components/Nav.module.css';
import { useLocation, Link } from 'react-router-dom';
export default function Nav() {
  const location = useLocation().pathname;
  const next = () => {
    if (location === '/') {
      return '/plan';
    } else if (location === '/plan') {
      return '/addon';
    }
    return '/';
  };
  return (
    <div className={styles.footer}>
      <div className={styles.inner}>
        <Link to={next()}>
          <button>Next Step</button>
        </Link>
      </div>
    </div>
  );
}
