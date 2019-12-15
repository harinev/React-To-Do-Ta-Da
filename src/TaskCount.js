import React from 'react';

class TaskCount extends React.Component {
    render() {
        return (
            <p className="title-message">You have {this.props.count} tasks left to complete on your To Do list!</p>
        );
    }
}


export default TaskCount;