import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Card';
import Navigation from './components/Navigation';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import useWindowDimensions from './util/useWindowDimension';

interface dataI {
  title: string;
  description: string;
}

function App() {
  const page = useSelector((state: RootState) => state.user.page);
  let [data, setData] = React.useState<dataI>({
    title: '',
    description: '',
  });

  const initialize = () => {
    if (page === 1) {
      setData((data) => ({
        ...data,
        title: 'Personal info',
        description:
          'Please provide your name, email address and phone number.',
      }));
    }
    if (page === 2) {
      setData((data) => ({
        ...data,
        title: 'Select your plan',
        description: 'You have the option of monthly or yearly billing.',
      }));
    }
    if (page === 3) {
      setData((data) => ({
        ...data,
        title: 'Pick add-ons',
        description: 'Add-ons help enhance your gaming experience.',
      }));
    }
    if (page === 4) {
      setData((data) => ({
        ...data,
        title: 'Finishing up',
        description: 'Double-check everything looks OK before confirming.',
      }));
    }
  };
  React.useEffect(() => {
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  const isMobile = useWindowDimensions().width;

  return (
    <div className='App'>
      <div className='Header'>
        <div className='Buttons'>{isMobile < 800 ? <Navigation /> : <></>}</div>
        <Cards title={data.title} description={data.description} />
        {isMobile < 800 ? <Nav /> : <></>}
      </div>
    </div>
  );
}

export default App;
