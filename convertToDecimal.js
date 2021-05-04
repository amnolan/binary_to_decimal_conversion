function convertToDecimal(input){

  input_array = input.split('');

  var sum = 0;

  // start from right move left
  for(var i = input_array.length-1; i >= 0; i--){
    sum += input_array[i] * Math.pow(2, i+1);
    console.log("interim sum is: " + sum);
  }

  console.log("final sum is: " + sum);

  }

convertToDecimal("01000100");