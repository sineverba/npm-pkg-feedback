import React from "react";

/**
 * Feedback component properties.
 */
interface FeedbackProps {
  /**
   * Message to be displayed in the feedback component.
   * @default "Operazione eseguita con successo"
   */
  message?: string;
  /**
   * Indicates whether the feedback is an error message.
   * @default false
   */
  isError?: boolean;
}

/**
 * Retrieves the appropriate message based on the error state.
 *
 * @param message - The message to be displayed.
 * @param isError - Indicates if the message is an error.
 * @returns The appropriate message string based on the error state.
 */
const getMessage = (message: string, isError: boolean): string => {
  if (isError && message !== "Operazione eseguita con successo") {
    return message;
  }
  if (isError && message === "Operazione eseguita con successo") {
    return "Si è verificato un errore";
  }
  return message;
};

/**
 * Retrieves the appropriate background color based on the error state.
 *
 * @param isError - Indicates if the background should reflect an error state.
 * @returns The appropriate background color based on the error state.
 */
const getBackgroundColor = (isError: boolean): string => {
  if (isError) {
    return "rgb(248, 215, 218)";
  }
  return "rgb(209, 231, 221)";
};

/**
 * Retrieves the appropriate text color based on the error state.
 *
 * @param isError - Indicates if the text color should reflect an error state.
 * @returns The appropriate text color based on the error state.
 */
const getColor = (isError: boolean): string => {
  if (isError) {
    return "rgb(88, 21, 28)";
  }
  return "rgb(10, 54, 34)";
};

/**
 * Feedback component to display messages with different styles for success and error states.
 *
 * @param message - The message to be displayed.
 * @param isError - Indicates whether the feedback is an error message.
 *
 * @example
 * <Feedback message="Data saved successfully" isError={false} />
 * <Feedback message="Failed to save data" isError={true} />
 *
 * @returns A styled feedback message component.
 */
export const Feedback: React.FC<FeedbackProps> = ({
  message = "Operazione eseguita con successo",
  isError = false
}: FeedbackProps) => (
  <div
    style={{
      backgroundColor: getBackgroundColor(isError),
      color: getColor(isError),
      padding: "10px"
    }}
  >
    <p>{getMessage(message, isError)}</p>
  </div>
);
