import Layout from './containers/layout';
import Aboutme from './pages/about-me';
import MainPage from './pages/home';
import BeerPage from './pages/beer';
import {Routes, Route } from 'react-router';
import './style/App.scss';

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
