import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";

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

describe("TodoApp", function () {
    it("renders without crashing", function () {
        render(<TodoApp initialTodos={TEST_TODOS} />);
    });

    // all three sections render
    //top todo
    it("rendered top todo", function () {
        const result = render(<TodoApp initialTodos={TEST_TODOS} />);
        expect(result.queryByText("Top Todo")).toBeInTheDocument();
    });

    //nu todo form
    it("rendered nu todo", function () {
        const result = render(<TodoApp initialTodos={TEST_TODOS} />);
        expect(result.queryByText("Add Nü")).toBeInTheDocument();
    });
    
    //editable TOdoList
    it("no todos not shown", function () {
        const result = render(<TodoApp initialTodos={TEST_TODOS} />);
        expect(result.queryByText("You have no todos")).not.toBeInTheDocument();
    });

    it(".EditableTodoList in doc -- todo list being rendered", function () {
        const {container} = render(<TodoApp initialTodos={TEST_TODOS} />);
        expect(container.querySelector(".EditableTodoList")).toBeInTheDocument();
    });


    

})