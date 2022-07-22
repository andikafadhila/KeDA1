import { FishBash, sort, isPalindrome } from "../src/index.js";

// describe("FishBash", () => {
//   it("should return the numbers passed in that are not divisible by 3 or 5", () => {
//     expect(FishBash(1)).toBe(1);
//     expect(FishBash(2)).toBe(2);
//     expect(FishBash(4)).toBe(4);
//   });

//   it("should return 'Fish' if the number passed in is divisible by 3", () => {
//     expect(FishBash(3)).toBe("Fish");
//     expect(FishBash(6)).toBe("Fish");
//   });

//   it("should return 'Bash' if the number passed in is divisible by 5", () => {
//     expect(FishBash(5)).toBe("Bash");
//     expect(FishBash(10)).toBe("Bash");
//   });

//   it("should return 'FishBash' if the number passed in is divisible by 3 and 5", () => {
//     expect(FishBash(15)).toBe("FishBash");
//   });
// });

// test("returns 1 for the number 1", () => {
//   expect(FishBash(1)).toEqual(1);
// });

// test("returns 7 for the number 7", () => {
//   expect(FishBash(7)).toEqual(7);
// });

// test('returns "Fish" for the number 3', () => {
//   expect(FishBash(3)).toEqual("Fish");
// });

// test('returns "Fish" for the number 9', () => {
//   expect(FishBash(9)).toEqual("Fish");
// });

// test('returns "Bash" for the number 5', () => {
//   expect(FishBash(5)).toEqual("Bash");
// });

// test('returns "Bash" for the number 10', () => {
//   expect(FishBash(10)).toEqual("Bash");
// });

// test('returns "FishBash" for the number 15', () => {
//   expect(FishBash(15)).toEqual("FishBash");
// });

// test('returns "FishBash" for the number 30', () => {
//   expect(FishBash(30)).toEqual("FishBash");
// });

// sort test

test("returns sorted array", () => {
  let array = [2, 5, 7, 1, 2, 7, 2];
  expect(sort(array)).toEqual(array.sort());
});

test("returns sorted array", () => {
  let array = [2, 6, 3, 2, 4, 7, 9, 10];
  expect(sort(array)).toEqual(array.sort());
});

test("returns sorted array", () => {
  let array = [2, 8, 0, 100, 200, 456, 1234, 8567];
  expect(sort(array)).toEqual(array.sort());
});

// palindrom test

it("the empty string is a palindrome", () => {
  // AAA pattern
  // Arrange, Act, Assert

  const toTest = "";
  const result = isPalindrome(toTest);

  expect(result).toBe(true);
});

it('false for "ab"', () => {
  const toTest = "ab";
  const result = isPalindrome(toTest);

  expect(result).toBe(false);
});

it("a string constituted only by a single character is a palindrome", () => {
  const toTest = "z";
  const result = isPalindrome(toTest);

  expect(result).toBe(true);
});

it('"aa" is a palindrome', () => {
  const toTest = "aa";
  const result = isPalindrome(toTest);

  expect(result).toBe(true);
});

it('"dad" is a palindrome', () => {
  const toTest = "dad";
  const result = isPalindrome(toTest);

  expect(result).toBe(true);
});

it('"sad" is not a palindrome', () => {
  const toTest = "sad";
  const result = isPalindrome(toTest);

  expect(result).toBe(false);
});

it('"drad" is not a palindrome', () => {
  const toTest = "drad";

  debugger;
  const result = isPalindrome(toTest);

  expect(result).toBe(false);
});
