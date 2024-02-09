// Import necessary components and hooks from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage.jsx';
import SuccessPage from './SuccessPage.jsx';
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
               <Route path="/successPage" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
