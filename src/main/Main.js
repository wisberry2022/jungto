import Practice from './practice/Practice.js';
import Donation from './donation/Donation.js';
import Training from './training/Training.js';
import News from './news/News.js';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <main>
      <Practice />
      <Donation />
      <Training />
      <News />
      <Outlet />
    </main>
  );
}

export default Main;