import React from "react";

/**
 * Interface for the properties of the Feedback component.
 */
interface FeedbackProps {
  /**
   * The message to be displayed in the feedback component.
   * @default "Operazione eseguita con successo" (Success message)
   */
  message?: string;

  /**
   * Indicates whether the feedback is an error message.
   * @deprecated Use `level="error"` instead for better clarity.
   * @default false
   */
  isError?: boolean;

  /**
   * The level of feedback message: "success", "warning", or "error".
   * This determines the background color and the message style.
   * @default "success"
   */
  level?: string;
}

/**
 * Retrieves the appropriate message based on the feedback level and error state.
 *
 * @param message - The message to be displayed.
 * @param isError - Deprecated, previously indicated an error state.
 * @returns The appropriate message string based on the level and error state.
 */
const getMessage = (message: string, isError: boolean): string => {
  if (isError && message !== "Operazione eseguita con successo") {
    return message; // Return the custom error message
  }
  if (isError && message === "Operazione eseguita con successo") {
    return "Si è verificato un errore"; // Default error message
  }
  return message; // Return the normal message
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
      return "rgb(248, 215, 218)"; // Light red background for errors
    default:
      return "rgb(209, 231, 221)"; // Light green background for success (default)
  }
};

/**
 * Determines the text color based on the feedback level.
 *
 * @param level - The level of feedback ("success", "warning", or "error").
 * @returns The corresponding text color in RGB format.
 */
export const getColor = (level: string): string => {
  switch (level) {
    case "warning":
      return "rgb(204, 153, 0)"; // Dark yellow for warning messages
    case "error":
      return "rgb(88, 21, 28)"; // Dark red for error messages
    default:
      return "rgb(10, 54, 34)"; // Dark green for success messages
  }
};

/**
 * Feedback component to display styled messages with different levels: success, warning, and error.
 *
 * @param message - The message to be displayed in the feedback component.
 * @param level - The level of feedback ("success", "warning", or "error").
 * @returns A styled feedback message component.
 *
 * @example
 * <Feedback message="Data saved successfully" level="success" />
 * <Feedback message="Check your input" level="warning" />
 * <Feedback message="Failed to save data" level="error" />
 */
export const Feedback: React.FC<FeedbackProps> = ({
  message = "Operazione eseguita con successo", // Default success message
  isError = false, // Deprecated, do not use
  level = "success" // Default level is success
}: FeedbackProps) => (
  <div
    style={{
      backgroundColor: getBackgroundColor(level), // Set background color based on level
      color: getColor(level), // Set text color based on level
      padding: "10px" // Padding for the feedback message
    }}
  >
    <p>{getMessage(message, isError)}</p>{" "}
    {/* Display the appropriate message */}
  </div>
);
