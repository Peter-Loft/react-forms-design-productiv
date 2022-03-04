import React from "react";
import { render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";


const TEST_TODO ={
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

});