import React, { Component,useState  } from 'react';
import SearchForm from './SearchForm'
import SearchItem from './SearchItem'
import UTSRest from '../../utils/rest'
import UTSUtils from '../../utils/utsutils'
const SearchContainer = () =>{
    //State hook
    const [searchTerm,setSearchTerm] = useState('')
    const [searchResult,setSearchResult] = useState([])
    //处理搜索，进行rest请求
    function handleSubmit() {
        //console.log(`Query for search ${searchTerm}`)
        UTSRest.searchSubject(searchTerm)
        .then((res) =>{
            //console.log(res.data)
            let processedArray = UTSUtils.processingSearchData(res.data);
            //console.log(processedArray)
            setSearchResult(processedArray)
            console.log(searchResult)
        })
        .catch((err)=>{
            console.error(err)
        })
    }
    //显示搜索结果
    function renderResultList() {
        const constructReusltView = searchResult.map((item,idx)=>(
            <SearchItem subject={item} key={idx}/>
        ))
        return constructReusltView
    }
    return(
        <React.Fragment>
            <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSubmit={handleSubmit}/>
            {renderResultList()}
        </React.Fragment>
    )
}
export default SearchContainer;