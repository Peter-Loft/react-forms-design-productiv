import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

const TEST_TODOS = [
  {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
  },
  {
    id: 2,
    title: "Make dinner",
    description: "Cook something healthy",
    priority: 1,
  },
  {
    id: 3,
    title: "Go to bed",
    description: "In bed by 11:15",
    priority: 3,
  },
];

describe("Top Todo", function () {
  // Shows the highest priority todo from received array.
  it("accepts array and displays highest priority", function () {
    const { container, debug } = render(<TopTodo todos={TEST_TODOS} />);
    const todo = container.querySelector(".Todo");
    expect(todo).toBeInTheDocument();
    expect(todo.getAttribute("id")).toEqual("2");
  });

  it("accepts array and displays highest priority", function () {
    const { container, debug } = render(<TopTodo todos={[
      {
        id: 2,
        title: "Make dinner",
        description: "Cook something healthy",
        priority: 1,
      },
      {
        id: 3,
        title: "Go to bed",
        description: "In bed by 11:15",
        priority: 1,
      }
    ]} />);
    const todo = container.querySelector(".Todo");
    expect(todo).toBeInTheDocument();
  });

});