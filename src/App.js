import React,{useState} from 'react';
import SearchContainer from './page/search/SearchContainer'
import './App.css';
import UTSRest from './utils/rest';

const SparrowTimeTable = () => {
  //State hooks
  const [subjects,setSubjects] = useState([])

  function restTest() {
    UTSRest.searchSubject("31272")
    .then((res) =>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.error(err)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>UTS Timetable Query Tool</h1>
        <small>By Nurupo :)</small>
        <SearchContainer/>
      </header>
    </div>
  );
}

export default SparrowTimeTable;
