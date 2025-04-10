// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

// Anagram of https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/
// Run this code using npx mocha index.js or mocha index.js

class AnagramSolutions {

  anagramsSolution1 = (stringA = 'heart', stringB = 'earth') => {
    stringA = stringA.toLowerCase().replace(/[^A-Z0-9]+/gi, "");
    stringB = stringB.toLowerCase().replace(/[^A-Z0-9]+/gi, "");
    // check for same string
    if (stringA === stringB) return true;
    // check for same length, if not return false
    if (stringA.length !== stringB.length) return false;

    const stringACounts = {}; // count all chars
    for (let char of stringA) {
      stringACounts[char] = stringACounts[char] + 1 || 1;
    }

    for (let char of stringB) {
      if (!stringACounts[char]) { // if no char from strB 
        return false;
      } else {
        stringACounts[char]--;
      }
    }
    return true;
  }

  anagramsSolution2 = (stringA, stringB) => {
    stringA = stringA.toLowerCase().replace(/[\W_]+/gi, "");
    stringB = stringB.toLowerCase().replace(/[\W_]+/gi, "");
    stringA = stringA
      .split("") // O(n)
      .sort() // O(nlogn)
      .join(""); // // O(n)
    //O(nlogn + 2n) = O(nlogn)
    stringB = stringB
      .split("")
      .sort()
      .join("");
    return stringA === stringB;
  }

}

const obj = new AnagramSolutions();
const anagrams = obj.anagramsSolution2; // change method name here to test different solution

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

import { assert } from "chai";

describe("Anagrams", () => {
  it("works if case sensitivity and non word characters NOT taken into account", () => {
    assert.equal(anagrams("facee", "fecad"), false);
    assert.equal(anagrams("earth", "heart"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("is case insensitive. 'HEART' and 'earth' should return true", () => {
    assert.equal(anagrams("HEART", "earth"), true);
    assert.equal(anagrams("heart", "EARTH"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("only matches word characters. 'heart!'' and '' earth' should return true", () => {
    assert.equal(anagrams("heart!", " earth"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
});
