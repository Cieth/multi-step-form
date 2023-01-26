import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Card';
import Navigation from './components/Navigation';
import { useLocation } from 'react-router-dom';
interface dataI {
  title: string;
  description: string;
  page: number;
}

function App() {
  let [data, setData] = React.useState<dataI>({
    title: '',
    description: '',
    page: 1,
  });
  const location = useLocation().pathname;
  const initialize = () => {
    if (location === '/') {
      setData((data) => ({
        ...data,
        title: 'Personal info',
        description:
          'Please provide your name, email address and phone number.',
        page: 1,
      }));
    }
    if (location === '/plans') {
      setData((data) => ({
        ...data,
        title: 'Select your plan',
        description: 'You have the option of monthly or yearly billing.',
        page: 2,
      }));
    }
  };
  React.useEffect(() => {
    initialize();
  }, []);

  return (
    <div className='App'>
      <div className='Header'>
        <div className='Buttons'>
          <Navigation />
        </div>

        <Cards
          title={data.title}
          description={data.description}
          page={data.page}
        />
        <Nav />
      </div>
    </div>
  );
}

export default App;
