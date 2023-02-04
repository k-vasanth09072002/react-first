import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Header from './Header';
import Banner from './banner';
import Service from './service';
import Property from './property';
import Best from './best';
import News from './news';
import Test from './test';
import Footer from './footer';



  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


function Sample(){
  return<div>
      <Header/>
      <Banner/>
      <Service/>
      <Property/>
      <Best/>
      <News/>
      <Test/>
      <Footer/>
  </div>


}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Sample/>);

 
