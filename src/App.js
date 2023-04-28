import './App.css';
import AboutConvertor from './components/AboutConvertor';
import ConvertorPage from './components/ConvertorPage';
import ConvertorRouter from './components/ConvertorRouter';
import FooterMain from './components/FooterMain';
import {BrowserRouter, Routes, Route
} from 'react-router-dom';

function App({...storyValues}) {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/converter" element={<ConvertorPage storyValues={storyValues}/>}></Route>
        <Route path="/" element={<AboutConvertor/>}></Route>       
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;