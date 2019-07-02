const longestCommonSubSequence = (str1, str2) => {
  const str1Set = new Set([...str1]);
  let longest = 0,
    cString = "";
  [...str2].forEach(s => {
    if (str1Set.has(s)) {
      longest++;
      cString += s;
    }
  });

  return { longest, cString };
};

//
const S1 = "ABCDEF";
const S2 = "ATYUBE";
console.log(longestCommonSubSequence(S1, S2));
