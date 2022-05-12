import React,{useState} from 'react';
import './App.css';
import Header from './Header';

function App() {
 const description='Please provide some details of your grievance to proceed. Your information will remain secure with us.';
  return (
    <div >
      <Header/>
      <div class="Banner-Background">
        <h1>This platform aims to register your grievance and assist you in its redressal</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default App;
