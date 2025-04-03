import { getBackgroundColor } from "../index";

/**
 * Test suite for the `getBackgroundColor` function.
 * This function returns a background color based on the provided level.
 */
describe("getBackgroundColor", () => {
  /**
   * Test case to verify that the background color is correct for the "success" level.
   * The background color should be 'rgb(209, 231, 221)' for success.
   */
  it("should return 'rgb(209, 231, 221)' when level is success", () => {
    // Test if the correct background color is returned for the "success" level.
    expect(getBackgroundColor("success")).toBe("rgb(209, 231, 221)");
  });

  /**
   * Test case to verify that the background color is correct for the "warning" level.
   * The background color should be 'rgb(255, 193, 7)' for warning.
   */
  it("should return 'rgb(255, 193, 7)' when level is warning", () => {
    // Test if the correct background color is returned for the "warning" level.
    expect(getBackgroundColor("warning")).toBe("rgb(255, 193, 7)");
  });

  /**
   * Test case to verify that the background color is correct for the "error" level.
   * The background color should be 'rgb(248, 215, 218)' for error.
   */
  it("should return 'rgb(248, 215, 218)' when level is error", () => {
    // Test if the correct background color is returned for the "error" level.
    expect(getBackgroundColor("error")).toBe("rgb(248, 215, 218)");
  });
});
