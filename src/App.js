import './Common.css';
import './Basic.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sangha from './detail/Sangha/Sangha';
import Total from './Total';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Total />} />
          <Route path="/sangha" element={<Sangha />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
