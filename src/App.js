import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/mylist" element={<HomePage/>} />
          <Route path="/register" element={<HomePage/>} />
          <Route path="/login" element={<HomePage/>} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
