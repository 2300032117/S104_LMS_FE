// App.jsx
import { Routes, Route } from 'react-router-dom';
import LibraryLanding from './LibraryLanding';
import Dashboard from './Dashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LibraryLanding />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

