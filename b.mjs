import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function formatName(name) {
    if (typeof name !== "string" || /[^a-zA-Z\s]/.test(name)) {
        return null;
    }

    name = name.trim();

    if (name === "") return "";

    return name
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}
//#endregion

//#region Tests --------------------------------------------------------------------
// Write your tests her.

const tests = test("Format function");

tests.isEqual(formatName(123), null, "123 is not a string.");
tests.isEqual(formatName("  John Doe   "), "John Doe", "Remove whitespace.");
tests.isEqual(formatName(" john doe "), "John Doe", "Capitalize first letter.");
tests.isEqual(formatName("  "), "", "String is empty after trimming.");
tests.isEqual(formatName("J@hn Doe"), null, "Contains special characters.");
tests.isEqual(formatName("Joh# Doe"), null, "Contains special characters.");

//#endregion