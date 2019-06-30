import React, { Component } from 'react';
import {Link} from 'react-router-dom' 
class SearchForm extends Component {
    render() {
        const {searchTerm,setSearchTerm,handleSubmit} = this.props;
        return (
            <React.Fragment>
                <div className="form">
                    <div className="form-group">
                        <input className="form-control search-input" placeholder="课号/课名" onChange={(e)=> {setSearchTerm(e.target.value)}}/> 
                    </div>
                    <div className="form-group">
                        <Link to={`/search/${searchTerm}`} className="btn btn-primary search-button" type="button" value="搜索" onClick={handleSubmit}>搜索</Link>
                       
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SearchForm;