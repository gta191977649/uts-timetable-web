import React, { Component } from 'react';

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
                        <input className="btn btn-primary search-button" type="button" value="搜索" onClick={handleSubmit}/> 
                        <input className="btn btn-default search-button" type="button" value="手气不错" onClick={handleSubmit}/> 
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SearchForm;