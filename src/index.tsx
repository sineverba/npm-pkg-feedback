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
   * @deprecated Use `level="error"` instead.
   * @default false
   */
  isError?: boolean;
  /**
   * Level of feedback message: "success", "warning", or "error".
   * Determines the background color.
   * @default "success"
   */
  level?: string;
}

/**
 * Retrieves the appropriate message based on the feedback level.
 *
 * @param message - The message to be displayed.
 * @param isError - Indicates if the message is an error (deprecated).
 * @returns The appropriate message string based on the level.
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
 * Determines the background color based on the feedback level.
 *
 * @param level - The level of feedback ("success", "warning", or "error").
 * @returns The corresponding background color in RGB format.
 */
export const getBackgroundColor = (level: string): string => {
  switch (level) {
    case "warning":
      return "rgb(255, 193, 7)"; // Yellow background for warnings
    case "error":
      return "rgb(248, 215, 218)"; // Red background for errors
    default:
      return "rgb(209, 231, 221)"; // Green background for success (default)
  }
};

/**
 * Retrieves the appropriate text color based on the error state.
 *
 * @param isError - Indicates if the text color should reflect an error state (deprecated).
 * @returns The appropriate text color in RGB format.
 */
const getColor = (isError: boolean): string => {
  if (isError) {
    return "rgb(88, 21, 28)"; // Dark red for errors
  }
  return "rgb(10, 54, 34)"; // Dark green for success
};

/**
 * Feedback component to display messages with different styles for success, warning, and error states.
 *
 * @param message - The message to be displayed.
 * @param level - The level of feedback ("success", "warning", or "error").
 *
 * @example
 * <Feedback message="Data saved successfully" level="success" />
 * <Feedback message="Check your input" level="warning" />
 * <Feedback message="Failed to save data" level="error" />
 *
 * @returns A styled feedback message component.
 */
export const Feedback: React.FC<FeedbackProps> = ({
  message = "Operazione eseguita con successo",
  isError = false, // Deprecated
  level = "success"
}: FeedbackProps) => (
  <div
    style={{
      backgroundColor: getBackgroundColor(level),
      color: getColor(isError),
      padding: "10px"
    }}
  >
    <p>{getMessage(message, isError)}</p>
  </div>
);
