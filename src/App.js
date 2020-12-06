import logo from './logo.svg';
import './App.css';
import React from 'react'
import { DropDown } from './components/DropDown'
import { CountrySelect } from './components/CountrySelect'
import { ProfileInfo } from './components/ProfileInfo'






function App() {




  return (
    <div >
      <DropDown />
      <br />
      <hr />
      <CountrySelect />
      <hr />
      <ProfileInfo />

    </div>
  );
}



export default App;
