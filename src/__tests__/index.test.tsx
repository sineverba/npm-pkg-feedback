import React from "react";
import { render, screen } from "@testing-library/react";
import { Feedback } from "../index";

/**
 * Test suite for the `Feedback` component.
 *
 * This suite tests the `Feedback` component to ensure it correctly renders feedback
 * messages based on different scenarios, including success and error levels with
 * both default and custom messages.
 */
describe("Test Feedback", () => {
  /**
   * Test case for handling success feedback with the default message.
   * It should render the default success message: "Operazione eseguita con successo".
   */
  it("Should handle success feedback with default message", () => {
    render(<Feedback />);
    const defaultText = screen.getByText(/operazione eseguita con successo/i);
    expect(defaultText).toBeInTheDocument();
  });

  /**
   * Test case for handling success feedback with a custom message.
   * It should render the provided custom message: "great job!".
   */
  it("Should handle success feedback with custom message", () => {
    render(<Feedback message="great job!" />);
    const customText = screen.getByText(/great job!/i);
    expect(customText).toBeInTheDocument();
  });

  /**
   * Test case for handling error feedback with the default message.
   * It should render the default error message: "Si è verificato un errore".
   */
  it("Should handle error feedback with default message", () => {
    render(<Feedback level="warning" />);
    const defaultText = screen.getByText(/si è verificato un errore/i);
    expect(defaultText).toBeInTheDocument();
  });

  /**
   * Test case for handling error feedback with a custom message.
   * It should render the provided custom message: "Oh no!".
   */
  it("Should handle error feedback with custom message", () => {
    render(<Feedback message="Oh no!" />);
    const customText = screen.getByText(/oh no!/i);
    expect(customText).toBeInTheDocument();
  });
});
