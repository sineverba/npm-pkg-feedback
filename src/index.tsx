import React from "react";

interface FeedbackProps {
  message?: string;
  isError?: boolean;
}

const getMessage = (message: string, isError: boolean) => {
  if (isError && message !== "Operazione eseguita con successo") {
    return message;
  }
  if (isError && message === "Operazione eseguita con successo") {
    return "Si è verificato un errore";
  }
  return message;
};

const getBackgroundColor = (isError: boolean) => {
  if (isError) {
    return "rgb(248, 215, 218)";
  }
  return "rgb(209, 231, 221)";
};

const getColor = (isError: boolean) => {
  if (isError) {
    return "rgb(88, 21, 28)";
  }
  return "rgb(10, 54, 34)";
};

export const Feedback = ({
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
