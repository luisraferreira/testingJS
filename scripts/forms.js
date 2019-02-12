var textField = document.querySelectorAll('.textField');
var submitBtn = document.querySelector('.submitBtn');



submitBtn.addEventListener('click', submitForm);



function submitForm() {
  textField.forEach(function(element) {
    checkTexts(element);
  });
}

function checkTexts() {

}
