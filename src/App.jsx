import React from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import SearchPage from "./SearchPage";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div className='app'>
            <Header />

            <div className="app__page">
              <Sidebar />
              <Feed />
            </div>
          </div>
          }>
        </Route>

        <Route path='search' element={
          <div className='search'>
            <Header />
            
            <div className="app__page">
              <Sidebar />
              <SearchPage/>
              
            </div>
            
          </div>
        }>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
