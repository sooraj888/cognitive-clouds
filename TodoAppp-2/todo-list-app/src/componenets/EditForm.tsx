import React from "react";

const EditForm = ({
  handleEditFormSubmit,
  currentTodo,
  handleEditInputChange,
  setIsEditing,
}: any) => {
  return (
    <form onSubmit={handleEditFormSubmit}>
      <h2>Edit Todo</h2>

      <label htmlFor="editTodo">Edit todo: </label>

      <input
        name="editTodo"
        type="text"
        placeholder="Edit todo"
        value={currentTodo.text}
        onChange={handleEditInputChange}
      />

      <button type="submit">Update</button>

      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditForm;
