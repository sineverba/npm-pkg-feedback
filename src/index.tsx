import React from "react";

/**
 * Interface for the properties of the Feedback component.
 */
interface FeedbackProps {
  /**
   * The message to be displayed in the feedback component.
   * @default "Operazione eseguita con successo" (Success message)
   */
  message?: string | null;

  /**
   * The level of feedback message: "success", "warning", or "error".
   * This determines the background color and the message style.
   * @default "success"
   */
  level?: string;
}

/**
 * Retrieves the appropriate message based on the feedback level.
 *
 * @param level - The level of feedback ("success", "warning", or "error").
 * @param message - The message to be displayed (if provided).
 * @returns The appropriate message string based on the feedback level.
 */
export const getMessage = (level: string, message: null | string): string => {
  switch (level) {
    case "warning":
    case "error":
      return message ?? "si è verificato un errore"; // Default error message
    default:
      return message ?? "operazione eseguita con successo"; // Default success message
  }
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
  message = null, // Default success message
  level = "success" // Default level is success
}: FeedbackProps) => (
  <div
    style={{
      backgroundColor: getBackgroundColor(level), // Set background color based on level
      color: getColor(level), // Set text color based on level
      padding: "10px" // Padding for the feedback message
    }}
  >
    <p>{getMessage(level, message)}</p> {/* Display the appropriate message */}
  </div>
);
