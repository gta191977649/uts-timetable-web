import React, { Component } from 'react';

class SearchForm extends Component {
    render() {
        const {searchTerm,setSearchTerm,handleSubmit} = this.props;
        return (
            <React.Fragment>
                <p>检索:{searchTerm}</p>
                <input onChange={(e)=> {setSearchTerm(e.target.value)}}/> 
                <input type="button" value="Search" onClick={handleSubmit}/> 
            </React.Fragment>
        );
    }
}

export default SearchForm;