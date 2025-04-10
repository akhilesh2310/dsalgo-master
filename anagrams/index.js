// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

// Run this code using npx mocha index.js or mocha index.js
function anagrams(stringA, stringB) {
  stringA = stringA.toLowerCase().replace(/[^A-Z0-9]+/gi, "");
  stringB = stringB.toLowerCase().replace(/[^A-Z0-9]+/gi, "");


  if (stringA.length !== stringB.length) {
    return false;
  }

  if (stringA === stringB) {
    return true;
  }

  const stringACounts = {};

  for (let char of stringA) {
    stringACounts[char] = stringACounts[char] + 1 || 1;
  }
  console.log(stringACounts);

  for (let char of stringB) {
    if (!stringACounts[char]) {
      return false;
    } else {
      stringACounts[char]--;
    }
  }
  console.log(stringACounts);
  return true;
}

function anagrams1(stringA, stringB) {
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

console.log(anagrams("earth", "hearth"));
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

mocha.setup("bdd");
const { assert } = chai;

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

mocha.run();
