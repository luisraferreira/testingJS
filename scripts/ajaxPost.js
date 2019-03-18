var inputName = $('#name');
var inputEmail = $('#email');
var inputMessage = $('#message');
var submitBtn = $('#submit');

// var inputEmail = document.getElementById('email');
// var inputName = document.getElementById('name');
// var inputMessage = document.getElementById('message');

submitBtn.on('click', submitForm);
function submitForm(e) {
  e.preventDefault();

  var nameValue = inputName.val(),
    emailValue = inputEmail.val(),
    messageValue = inputMessage.val(),
    regexEmail = '[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9}';
      $.ajax({
        url: "https://reqres.in/api/users",
        type: "POST",
        data: {
          name: nameValue,
          email: emailValue,
          message: messageValue
        },
        success: function(response) {
          console.log(response);
        }
      });
}
