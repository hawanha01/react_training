import './App.css';
import Menu from './components/Menu/menu';
import React, { Component } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NewItem from './components/item/newItem';
import Layout from './components/layout/layout';
import Header from './components/header/header';
import Receipt from './components/receipt/receipt';

function App() {

  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element = {<Menu/>}/>
            <Route path='/new-meal' element = {<NewItem/>}/>
            <Route path='/all-meal' element = {<Menu/>} />
            <Route path='/receipt' element = {<Receipt/>} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}


export default App;
