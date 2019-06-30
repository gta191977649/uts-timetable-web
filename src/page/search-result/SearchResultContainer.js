
import React, { Component } from 'react'
import Subject from './ResultSubjectItems'
import SearchHeader from './SearchHeader'
import UTSRest from '../../utils/rest'
import UTSUtils from '../../utils/utsutils'
class SearchResultContainer extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            keywords: '',
            searchResult: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentWillMount() {
        const {keywords} = this.props.match.params
        this.setState({keywords:keywords})
        this.handleSubmit(keywords)
    }

    //处理搜索，进行rest请求
    handleSubmit(searchTerm) {
        console.log(`Query for search ${searchTerm}`)
        
        UTSRest.searchSubject(searchTerm)
        .then((res) =>{
            //console.log(res.data)
            let processedArray = UTSUtils.processingSearchData(res.data);
            console.log(processedArray)
            this.setState({searchResult:processedArray})
            //console.log(this.state.searchResult)
        })
        .catch((err)=>{
            console.error(err)
        })
        
    }
    //显示搜索结果
    renderResultList() {

        const constructReusltView = this.state.searchResult.map((item,idx)=>(
            <Subject subject={item} key={idx}/>
        ))
        return constructReusltView
    }
    render() {
        const {keywords,searchResult} = this.state
        return (
            <React.Fragment>
                <SearchHeader searchTerm={keywords}/>
                <p>Search for: {keywords}, results:{searchResult.length}</p>
                <div className="row">
                    <div className="col-md-9">
                        {this.renderResultList()}
                    </div>
                    <div className="col-md-3">
                        side
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SearchResultContainer;