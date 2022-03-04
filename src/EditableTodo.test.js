import React from "react";
import { fireEvent, render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";


const TEST_TODO = {
  id: 1,
  title: "Go to bed",
  description: "In bed by 11:15",
  priority: 1,
};

// Logic and functionality for update and delete lives in different
// file, tested there.

describe("EditableTodo", function () {
  it("Renders at all", function () {
    render(<EditableTodo todo={TEST_TODO} />);
  });


  //edit and delete buttons and todo render when !isediting
  it("Renders edit button when not isediting", function () {
    const result = render(<EditableTodo todo={TEST_TODO} />);
    expect(result.queryByText("Edit")).toBeInTheDocument();
  });

  it("Renders delete button when not isediting", function () {
    const result = render(<EditableTodo todo={TEST_TODO} />);
    expect(result.queryByText("Del")).toBeInTheDocument();
  });

  it("Renders Todo item when not isediting", function () {
    const { container } = render(<EditableTodo todo={TEST_TODO} />);
    const todo = container.querySelector(".Todo");
    expect(todo).toBeInTheDocument();
    expect(todo.getAttribute("id")).toEqual("1");
  });

  //if isediting, form renders
  it("Renders form after clicking Edit", function () {
    const { container } = render(<EditableTodo todo={TEST_TODO} />);
    const editButton = container.querySelector(".EditableTodo-toggle");
    fireEvent.click(editButton);
    expect(container.querySelector(".NewTodoForm")).toBeInTheDocument();
    expect(editButton).not.toBeInTheDocument();
  });

  //when submit update form, goes back to todo view
  it("Renders todo after clicking submit on edit form", function () {
    const { container } = render(
      <EditableTodo
        todo={TEST_TODO}
        update={() => console.log("updating")} />);

    const editButton = container.querySelector(".EditableTodo-toggle");
    fireEvent.click(editButton);
    const updateButton = container.querySelector(".NewTodoForm-addBtn")
    fireEvent.click(updateButton);
    expect(container.querySelector(".NewTodoForm")).not.toBeInTheDocument();
    //have to make new edit button, because the old one has been removed
    const newEditButton = container.querySelector(".EditableTodo-toggle");
    expect(newEditButton).toBeInTheDocument();
  });


});