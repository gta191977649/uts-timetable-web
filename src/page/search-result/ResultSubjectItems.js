
import React, { Component } from 'react';

class ResultSubjectItems extends Component {
    render() {
        const {description,semester,subject_code,activity} = this.props.subject
        return (
            <div className="panel-body">
                <span className="search-title">{description} ({semester})</span>
                <br/>
                <span className="search-info">
                    <p><strong>Subject Code:</strong> {subject_code}</p> 
                    <p><strong>Smemter:</strong> {semester}</p>
                    <p><strong>activities:</strong> {  Object.keys(activity).length}</p>
                </span>
            </div>
        );
    }
}

export default ResultSubjectItems;