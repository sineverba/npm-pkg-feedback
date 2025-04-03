import { getColor } from "../index";

/**
 * Test suite for the `getColor` function.
 * This function returns the appropriate text color based on the feedback level.
 */
describe("getColor", () => {
  /**
   * Test case to verify that the text color is correct for the "success" level.
   * The text color should be 'rgb(10, 54, 34)' for success.
   */
  it("should return 'rgb(10, 54, 34)' when level is success", () => {
    // Test if the correct text color is returned for the "success" level (dark green).
    expect(getColor("success")).toBe("rgb(10, 54, 34)");
  });

  /**
   * Test case to verify that the text color is correct for the "warning" level.
   * The text color should be 'rgb(204, 153, 0)' for warning (dark yellow).
   */
  it("should return 'rgb(204, 153, 0)' when level is warning", () => {
    // Test if the correct text color is returned for the "warning" level (dark yellow).
    expect(getColor("warning")).toBe("rgb(204, 153, 0)");
  });

  /**
   * Test case to verify that the text color is correct for the "error" level.
   * The text color should be 'rgb(88, 21, 28)' for error (dark red).
   */
  it("should return 'rgb(88, 21, 28)' when level is error", () => {
    // Test if the correct text color is returned for the "error" level (dark red).
    expect(getColor("error")).toBe("rgb(88, 21, 28)");
  });
});
