import React from "react";
import { render, screen } from "@testing-library/react";
import { Feedback } from "../index";

describe("Test Feedback", () => {
  it("Should handle success feedback with default message", () => {
    render(<Feedback />);
    const defaultText = screen.getByText(/operazione eseguita con successo/i);
    expect(defaultText).toBeInTheDocument();
  });

  it("Should handle success feedback with custom message", () => {
    render(<Feedback message="great job!" />);
    const defaultText = screen.getByText(/great job!/i);
    expect(defaultText).toBeInTheDocument();
  });

  it("Should handle error feedback with default message", () => {
    render(<Feedback isError />);
    const defaultText = screen.getByText(/si è verificato un errore/i);
    expect(defaultText).toBeInTheDocument();
  });

  it("Should handle error feedback with custom message", () => {
    render(<Feedback isError message="Oh no!" />);
    const defaultText = screen.getByText(/oh no!/i);
    expect(defaultText).toBeInTheDocument();
  });
});
