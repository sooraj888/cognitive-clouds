import React from 'react';

const AddForm = ({handleFormSubmit,todo,handleInputChange}:any) => {

    
    return (
       
             <form onSubmit={handleFormSubmit}>
          <input
            name="todo"
            type="text"
            placeholder="Create a new todo"
            value={todo}
            onChange={handleInputChange}
          />
        </form>
       
    );
};

export default AddForm;