import React, { useState } from "react";
import ToDoList from "./ToDoList";
import { ListContainerStyled, ListTextStyled } from "./ToDoAppStyles";


const ToDoApp = () => {
  const [tareas, setTareas] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    setTareas([...tareas, inputValue]);
    setInputValue("");
  };

  const handleDeleteAllTask = () => {
    setTareas([]);
  };



  return (
    <>
      <ListContainerStyled>
        <div>
          <ListTextStyled>
            <h1>Lista de Tareas</h1>
            <form>
              <label>
                Tareas:
                <input
                  placeholder="Ingrese una tarea"
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </label>
              <button type="button" onClick={handleAddTask}>
                Agregar Tarea
              </button>
              <button type="button" onClick={handleDeleteAllTask}>
                Eliminar tareas
              </button>
            </form>
            <ToDoList tareas={tareas} />
          </ListTextStyled>
        </div>
      </ListContainerStyled>
    </>
  );
};
export default ToDoApp;
