import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import TodoForm from "./TodoForm";
import EditableTodoList from "./EditableTodoList";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodoData) {
    const newTodo = { ...newTodoData, id: uuid() };
    setTodos(todos => [...todos, newTodo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    // CR: Opportunity for including this logic within a .map()
    // not bug yet, could arise without full implementation of
    // setter callBack pattern.
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === updatedTodo.id) {

        todos[i].title = updatedTodo.title;
        todos[i].description = updatedTodo.description;
        todos[i].priority = updatedTodo.priority;
      }
    }

    setTodos(todos => [...todos]);
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(oldTodos => oldTodos.filter(todo => todo.id !== id));
  }
  //CR May want global constant for initalFormData basics.
  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          <EditableTodoList todos={todos} update={update} remove={remove} />

          {!(todos.length > 0) &&
            <span className="text-muted">You have no todos.</span>
          }
        </div>

        <div className="col-md-6">

          {todos.length > 0 &&
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos} />
            </section>
          }

          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm
              initialFormData={{
                title: "",
                description: "",
                priority: 3
              }}
              handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;