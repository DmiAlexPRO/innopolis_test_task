import Layout from './components/Layout';
import Aboutme from './components/Aboutme';
import MainPage from './components/MainPage';
import BeerPage from './components/BeerPage';
import {Routes, Route } from 'react-router';
import './style/App.css';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Layout />} >
              <Route index element={<MainPage/>} />
              <Route path="/aboutme" element={<Aboutme />} />
              <Route path="/about/:id" element={<BeerPage />} />
          </Route>

      </Routes>
    </>
  );
}

export default App;
