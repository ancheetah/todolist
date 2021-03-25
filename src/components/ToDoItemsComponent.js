import React from 'react';

const ToDoItems = (props) => {
        if (props.entries.length > 0) {
            return (
                <ul className="list-group">
                    {props.entries.map( item => {
                        return (
                            <li key={item.key} className="list-group-item text-left list-unstyled bg-primary text-white border-light">
                                <div className="row px-2">
                                    <div className="col d-flex align-items-center">
                                        {item.text}
                                    </div>
                                    <div className="col-xs-1">
                                        <button type="button" className="item-button btn btn-outline-light border-0">
                                            <i className="fa fa-lg fa-times" onClick={ () => props.delete(item.key)}></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            return <div></div>
        }
};

export default ToDoItems;