import React, { Component,useState  } from 'react';
import SearchForm from './SearchForm'
import UTSRest from '../../utils/rest'
import UTSUtils from '../../utils/utsutils'
const SearchContainer = () =>{
    //State hook
    const [searchTerm,setSearchTerm] = useState('')
   
    
    return(
        <div className="center">
            <h1>UTS Timetable Query Tool</h1>
            <p>By Nurupo :)</p>
            <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
    )
}
export default SearchContainer;