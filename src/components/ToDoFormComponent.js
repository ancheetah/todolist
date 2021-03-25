import React from 'react';

const ToDoForm = (props) => {
    return (
        <form onSubmit={props.addItem}>
            <div className="input-group my-3">
                <input type="text" className="form-control" placeholder="Enter a task" 
                    value={props.userInput} onChange={props.handleChange}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit">
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default ToDoForm;