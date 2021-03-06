import React, { Component } from 'react';
import {Link} from 'react-router-dom' 

class SearchHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }
    componentWillMount() {
        const {searchTerm} = this.props;
        this.setState({searchTerm:searchTerm})
    }
   
    render() {
        const {searchTerm} = this.state;
        return (
            <div className="input-group col-md-8">
                    <input className="form-control" value={searchTerm}
                    placeholder="课号/课名" onChange={(e)=> {
                        this.setState({searchTerm: e.target.value})
                    }}/> 
                <div className="input-group-btn">
                    <Link to={`/search/${searchTerm}`} className="btn btn-primary " type="button" value="搜索">搜索</Link>
                    
                </div>
            </div>
        );
    }
}

export default SearchHeader;