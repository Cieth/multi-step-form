import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/components/Nav.module.css';
import { RootState } from '../app/store';
import { setPage } from '../app/slices/userSlice';
export default function Nav(): JSX.Element {
  const page = useSelector((state: RootState) => state.user.page);
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const next = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name;
    if (name === 'next') {
      if (location === '/') {
        dispatch(setPage(2));
        navigate('/plan');
      }
      if (location === '/plan') {
        dispatch(setPage(3));
        navigate('/addon');
      }
      if (location === '/addon') {
        dispatch(setPage(4));
        navigate('/billing');
      }
    } else {
      if (location === '/plan') {
        dispatch(setPage(1));
        navigate('/');
      }
      if (location === '/addon') {
        dispatch(setPage(2));
        navigate('/plan');
      }
      if (location === '/billing') {
        dispatch(setPage(3));
        navigate('/addon');
      }
    }
  };
  const stylo = {
    justifyContent: 'spaceBetween',
  };
  return (
    <div className={styles.footer}>
      <div className={page <= 1 ? styles.inner : styles.inner2} style={stylo}>
        {page > 1 && (
          <button name='back' onClick={next}>
            Go Back
          </button>
        )}
        <button name='next' onClick={next}>
          Next Step
        </button>
      </div>
    </div>
  );
}
