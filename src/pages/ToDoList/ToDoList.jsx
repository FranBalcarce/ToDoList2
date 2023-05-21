import React from "react";
import { ToDoListContainerStyled } from "./ToDoListStyles";

const ToDoList = ({ tareas }) => {
  return (
    <>
      <ToDoListContainerStyled>
        <ul>
          {tareas.map((tareas) => (
            <li key={tareas}>{tareas}</li>
          ))}
        </ul>
      </ToDoListContainerStyled>
    </>
  );
};

export default ToDoList;
