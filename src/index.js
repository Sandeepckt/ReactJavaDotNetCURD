import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact-us';
import ListEmp from './Components/ListEmp';
import Nopage from './Nopage';
import Employee from './Components/Employee';
import Employeeedit from './Components/Employeeedit';
import Employeedel from './Components/Employeedel';
import EmployeeCreate from './Components/EmployeeCreate';
import ProdList from './Components/prodList';
import ProductDisp from './Components/ProductDisp';
import ProductEdit from './Components/ProductEdit';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}> {/* till domain name*/}
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/ListEmp' element={<ListEmp/>}/>
          <Route path="/emp/:id" element={<Employee/>}/>
          <Route path = "/*" element={<Nopage/>}/> 
          <Route path ="/empedit/:id" element={<Employeeedit/>}/> 
          {/* <Route path ="/empdel/:id" element={<Employeedel/>}/> */}
          <Route path ="/empcreate" element={<EmployeeCreate/>}/> 
          <Route path ="/ProdList" element={<ProdList/>}/> 
          <Route path ="/proddisp/:id" element={<ProductDisp/>}/> 
          <Route path ="/productedit" element={<ProductEdit/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
