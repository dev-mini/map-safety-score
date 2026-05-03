import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import './App.css';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import MapOverview from './pages/MapOverview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} index />
          <Route path="map-overview" element={<MapOverview />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
