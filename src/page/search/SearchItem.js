import React, { Component} from 'react';

class SearchItem extends Component {
    render() {
        const {description,semester} = this.props.subject
        return (
            <div>
                <h1>{description} ({semester})</h1>
            </div>
        );
    }
}

export default SearchItem;