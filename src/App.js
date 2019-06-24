import React,{useState} from 'react';
import SearchContainer from './page/search/SearchContainer'
import Header from './page/header/Header'
import './App.css';
import UTSRest from './utils/rest';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom' 

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
    <div className="container-fluid">
      <Header/>
      <div className="container center">
        <div className="col-md-8">
          <h1>UTS Timetable Query Tool</h1>
          <p>By Nurupo :)</p>
          <SearchContainer/>
        </div>
      </div>
    </div>
  );
}
const TestRoute = () => {
  return(
    <p>Hello world</p>
  )
}
const App = () => {
  return(
    <Router>
      <Route exact path='/' component={SparrowTimeTable}></Route>
      <Route path='/test' component={TestRoute}></Route>
    </Router>
  )
}
export default App;
