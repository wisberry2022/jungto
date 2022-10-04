import './Common.css';
import './Basic.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sangha from './detail/Sangha/Sangha';
import Intro from './detail/Intro/Intro';
import Total from './Total';
import Layout from './detail/Layout';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Total />} />
          <Route element={<Layout />}>
            <Route path="/sangha" element={<Sangha />} />
            <Route path="/mm_intro" element={<Intro />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
