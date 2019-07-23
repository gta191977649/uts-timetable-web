import React,{useState} from 'react';
import SearchContainer from './page/search/SearchContainer'
import './App.css';
import UTSRest from './utils/rest';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom' 
import SearchResult from './page/search-result/SearchResultContainer'
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
    <SearchContainer/>
  );
}
const TestRoute = () => {
  return(
    <p>Hello world</p>
  )
}
const App = () => {
  return(
    <div className="container-fluid">
      <div className="container">

        <Router>
          <Route exact path='/' component={SparrowTimeTable}></Route>
          <Route path='/search/:keywords' component={SearchResult}></Route>
        </Router>
      </div>
    </div>
  )
}
export default App;
