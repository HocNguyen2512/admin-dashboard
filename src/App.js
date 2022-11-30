import './App.css';
import Home from './Page/Home/Home';
import List from './Page/List/List';
import Single from './Page/Single/Single';
import Login from './Page/Login/Login';
import New from './Page/New/New';
import "./style/Dark.scss";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { productInputs, userInputs } from './FormSource';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

function App() {

 const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? " app dark":"app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path='Login' element={<Login/>}/>
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element ={<Single/>}/>
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>} />
            </Route>
            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productId" element ={<Single/>}/>
              <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
            </Route>
          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
