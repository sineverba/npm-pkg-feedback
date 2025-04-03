import { getMessage } from "../index";

/**
 * Test suite for the `getMessage` function.
 *
 * This suite tests the `getMessage` function to ensure it returns the correct message
 * based on the provided feedback level and the optional custom message.
 */
describe("getMessage", () => {
  /**
   * Test case when the level is "success" and the message is not defined.
   * It should return the default success message.
   */
  it("should return 'operazione eseguita con successo' when level is success and message is not defined", () => {
    expect(getMessage("success", null)).toBe(
      "operazione eseguita con successo"
    );
  });

  /**
   * Test case when the level is "warning" and the message is not defined.
   * It should return the default warning message.
   */
  it("should return 'si è verificato un errore' when level is warning and message is not defined", () => {
    expect(getMessage("warning", null)).toBe("si è verificato un errore");
  });

  /**
   * Test case when the level is "error" and the message is not defined.
   * It should return the default error message.
   */
  it("should return 'si è verificato un errore' when level is error and message is not defined", () => {
    expect(getMessage("error", null)).toBe("si è verificato un errore");
  });

  /**
   * Test case when the level is "success" and a custom message is provided.
   * It should return the provided custom message.
   */
  it("should return 'custom message' when level is success and message is custom", () => {
    expect(getMessage("success", "custom message")).toBe("custom message");
  });

  /**
   * Test case when the level is "warning" and a custom message is provided.
   * It should return the provided custom message.
   */
  it("should return 'custom message' when level is warning and message is not defined", () => {
    expect(getMessage("warning", "custom message")).toBe("custom message");
  });

  /**
   * Test case when the level is "error" and a custom message is provided.
   * It should return the provided custom message.
   */
  it("should return 'custom message' when level is error and message is not defined", () => {
    expect(getMessage("error", "custom message")).toBe("custom message");
  });
});
