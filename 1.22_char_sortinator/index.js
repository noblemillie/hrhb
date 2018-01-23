// create helper functions/app logic

// create lexicographical sort function
function charSortinator(stringInput) {
  // convert stringIput to string to allow for array sorting functions
  let array = stringInput.split('');
  // implement preferred sorting method
  array.sort();
  // convert back to string and return
  return array.join('');
}

// set jQuery class variables
const $charInput = $('.charInput');
const $charOutput = $('.charOutput');

$charInput.on('input', function(event){
  $charOutput.html($charInput.val());
});
