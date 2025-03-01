import test from "./test.mjs";

/*
    Challenge: Implement the `guessNumber` function.

    The function `guessNumber` takes two parameters:
    1. `target` (an integer) - the number to guess.
    2. `guess` (an integer) - the player's guess.

    The function should:
    - Return "Too low" if the guess is less than the target.
    - Return "Too high" if the guess is greater than the target.
    - Return "Correct!" if the guess matches the target.
    - Return null if either input is not a valid integer.

    Your task:
    1. Complete the tests below to verify the functionality.
    2. Implement the `guessNumber` function so it passes all the tests.

    
*/

//#region function -----------------------------------------------------------------
// Write your function her.

function guessNumber(target, guess) {
    if (typeof target !== "number" || typeof guess !== "number" || !Number.isInteger(target) || !Number.isInteger(guess)) {
        return null;
    }

    if (guess > target) return "Too high";
    if (guess < target) return "Too low";
    return "Correct!";

}

//#endregion

//#region Tests --------------------------------------------------------------------

// Basic cases
const tests = test("Guess number function");

tests.isEqual(guessNumber(10, 5), "Too low", "If target is 10 and guess is 5, return 'Too low'");
tests.isEqual(guessNumber(10, 15), "Too high", "If target is 10 and guess is 15, return 'Too high'");
tests.isEqual(guessNumber(10, 10), "Correct!", "If target is 10 and guess is 10, return 'Correct!'");

// Invalid inputs

tests.isEqual(guessNumber(10, 5.2), null, "Not a valid integer.");
tests.isEqual(guessNumber("a", 5), null, "Not a valid integer.");
tests.isEqual(guessNumber(10, null), null, "Not a valid integer.");
tests.isEqual(guessNumber(undefined, 5), null, "Not a valid integer.");
tests.isEqual(guessNumber(Infinity, 5), null, "Not a valid integer.");
tests.isEqual(guessNumber(10, -Infinity), null, "Not a valid integer.");

// Edge cases

tests.isEqual(guessNumber(10, -5), "Too low", "If target is 10 and guess is -5, return 'Too low'");
tests.isEqual(guessNumber(-10, 5), "Too high", "If target is -10 and guess is 5, return 'Too high'");

//#endregion
