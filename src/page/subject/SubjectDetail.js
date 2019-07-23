import React, { Component } from 'react';
import UTSRest from '../../utils/rest'
import UTSUtils from '../../utils/utsutils'
import Header from '../header/Header'
import SearchHeader from '../search-result/SearchHeader'

export default class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subjectCode:'',
            subjectData:null,
        }
        this.querySubjectData = this.querySubjectData.bind(this)
    }
    querySubjectData(searchTerm) {
        UTSRest.searchSubject(searchTerm)
        .then((res) =>{
            //console.log(res.data)
            let processedArray = UTSUtils.processingSearchData(res.data);
            console.log(processedArray[0])
            this.setState({subjectData:processedArray[0]})
            //console.log(this.state.searchResult)
        })
        .catch((err)=>{
            console.error(err)
        })
        
    }
    componentDidMount(){
        this.setState({subjectCode:this.props.match.params.code})
        this.querySubjectData(this.props.match.params.code)
    }
    renderSubjectDetailView() {
        const {description,subject_code,semester,activity} = this.state.subjectData

        return(
            <React.Fragment>
                <h2>{description} <small>{subject_code}</small><hr/></h2>
                <a className="btn btn-default pull-right">Handbook</a>
                <br/>
                {/* 一般信息 */}
                <h3>一般信息</h3>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        详细
                    </div>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td><strong>名称</strong></td>
                                <td>{description}</td>
                            </tr>
                            <tr>
                                <td><strong>课号</strong></td>
                                <td>{subject_code}</td>
                            </tr>
                            <tr>
                                <td><strong>学期</strong></td>
                                <td>{semester}</td>
                            </tr>
                            <tr>
                                <td><strong>班数</strong></td>
                                <td>{ Object.keys(activity).length}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
    renderErrorPage() {
        return(
            <React.Fragment>
                <h1>Sorry, The request data is not vaild</h1>
            </React.Fragment>
        )
    }
    render() {
        return (
            <div>
                <Header/>
                <SearchHeader searchTerm={this.state.subjectCode}/>
                {this.state.subjectData !== null? this.renderSubjectDetailView() : this.renderErrorPage() }
            </div>
        );
    }
}
