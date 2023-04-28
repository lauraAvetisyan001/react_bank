import React from 'react';
import {BrowserRouter, Routes,Link} from 'react-router-dom';


const ConvertorRouter = (props) => {

    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Головна</Link>
          </li>
          <li>
            <Link to="/converter" {...props}>Конвертeр</Link>
          </li>
        </ul>
      </nav>
    </header>  
 
};
export default ConvertorRouter;