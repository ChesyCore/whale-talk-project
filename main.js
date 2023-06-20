let input = 'empanadas are tasty'
const vowels = ['a','e','i','o','u'];
resultArray = [];

for (let i = 0; i < input.length; i++) {
  // console.log(i)
  // const inputLetter = input[i];

  if (input[i] === 'e' || input[i] === 'a'){
    resultArray.push(input[i])
  }

  
  for (let j = 0; j < vowels.length; j++) {
    //console.log(j)
    // const vowelsLetter = vowels[i];
      if (input[i] === vowels[j]) {
        resultArray.push(input[i])
      }
  }
}
console.log(resultArray.join('').toUpperCase());
// console.log(resultArray)
