import React from "react";

const TodoList = ({ todos, handleEditClick, handleDeleteClick }: any) => {
  return (
    <div>
      <div className="todo-list">
        {todos.map((todo: any) => (
          <div key={todo.id} className="list">
            <div className="todo-text">{todo.text}</div>
            <button onClick={() => handleEditClick(todo)}>Edit</button>
            <button onClick={() => handleDeleteClick(todo.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
