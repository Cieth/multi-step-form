import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/components/Nav.module.css';
import { RootState } from '../app/store';
import { setPage } from '../app/slices/userSlice';
export default function Nav(): JSX.Element {
  const page = useSelector((state: RootState) => state.user.page);
  const dispatch = useDispatch();

  const next = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name;
    if (name === 'next') {
      if (page >= 1 && page < 4) {
        dispatch(setPage(page + 1));
      }
    } else {
      if (page <= 4 && page > 1) {
        dispatch(setPage(page - 1));
      }
    }
  };
  const finish = () => {
    dispatch(setPage(5));
  };
  const stylo = {
    justifyContent: 'spaceBetween',
  };
  return (
    <>
      {page !== 5 ? (
        <div className={styles.footer}>
          <div
            className={page <= 1 ? styles.inner : styles.inner2}
            style={stylo}
          >
            {page > 1 && (
              <button name='back' onClick={next}>
                Go Back
              </button>
            )}
            <button name='next' onClick={page !== 4 ? next : finish}>
              {page === 4 ? 'Finish' : 'Next step'}
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
