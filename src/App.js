import './App.css';
import AboutConvertor from './components/AboutConvertor';
import ConvertorPage from './components/ConvertorPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/converter" element={<ConvertorPage />}></Route>
        <Route path="/" element={<AboutConvertor/>}></Route>       
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;