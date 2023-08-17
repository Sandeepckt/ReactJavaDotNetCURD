import logo from './logo.svg';
import './App.css';
// import Home from './Components/Home';
// import Contact from './Components/Contact-us';
// import ListEmp from './Components/ListEmp';
// import Nopage from './Nopage';
import { Outlet, Link } from 'react-router-dom';
import { Header } from './Header';
import { Search } from './Components/Search';
import { useState } from 'react';
import { ContainerSearch } from './Components/ContainerSearch';

function App() {
  const [query, setquery] = useState("");
  return (
    <div className="">
      <Header />
      <Search onQuery={setquery} />
      <ContainerSearch query={query} />

      <Outlet />
    </div>
  );
}

export default App;
