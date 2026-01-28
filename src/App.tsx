import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CaseStudy from './components/CaseStudy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study" element={<CaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
