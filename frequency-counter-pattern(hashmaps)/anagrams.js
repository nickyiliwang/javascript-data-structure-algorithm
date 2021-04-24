// Anagrams
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

const validAnagram = (s1, s2) => {
  if (s1 === "" && s2 === "") return true;
  if (s1.length !== s2.length) return false;

  const map1 = {};
  const map2 = {};
  let result = false;

  for (let char of s1) {
    if (map1[char]) {
      map1[char] += map1[char];
    } else {
      map1[char] = 1;
    }
  }

  for (let char of s2) {
    if (map2[char]) {
      map2[char] += map2[char];
    } else {
      map2[char] = 1;
    }
  }

  for (let key in map1) {
    if (map1[key] === map2[key]) {
      result = true;
    } else {
      result = false;
    }
  }

  return result;
};

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qwywrt"));
console.log(validAnagram("texttwisttime", "timetwitsttext"));
