import React from 'react';

//style
import './TodoListItem.scss';

class TodoListItem extends React.Component {

  render() {
    const { label, deletedItem, toggleDone, toggleImportant } = this.props;
    const { done, important } = this.props;

    let classNameList = 'todo-list-item';

    if (done) {
      classNameList +=  ' done';
    }

    if (important) {
      classNameList += ' important';
    }

    return (
      <span className= { classNameList }>
        <span
          className="todo-list-item-label"
          onClick={toggleDone}>
          {label}
        </span>

        <button type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={toggleImportant}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick= {deletedItem}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

export default TodoListItem;
