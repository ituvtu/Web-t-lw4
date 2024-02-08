function checkHTML5Support() {
    var input = document.createElement('input');
    input.setAttribute('type', 'email');
    var supportText = document.getElementById('supportText');

    if (input.type === 'email') {
      supportText.textContent = 'Ваш браузер підтримує HTML5';
      // Тут можна додати логіку для HTML5
    } else {
      supportText.textContent = 'Ваш браузер не підтримує HTML5';
      document.addEventListener("DOMContentLoaded", function() {
        const emailInput = document.getElementById('email');
        const emailForm = document.getElementById('emailForm');
        const validateEmailButton = document.getElementById('validateEmail');
        
        const submitButton = document.getElementById('submitForm');
      
        validateEmailButton.addEventListener('click', function() {
            if (validateEmail(emailInput.value)) {
                alert('Електронна адреса введена правильно.');
            } else {
                alert('Некоректна електронна адреса.');
            }
        });
        emailInput.addEventListener('input', updateSubmitButton);
        submitButton.addEventListener('click', function() {
            if (validateEmail(emailInput.value)) {
                window.alert('Ви успішно зареєструвалися!');
            } else {
                window.alert('Будь ласка, виправте помилки в формі.');
            }
        });
      
        function updateSubmitButton() {
            if (validateEmail(emailInput.value)) {
                submitButton.disabled = false;
            } else {
                submitButton.disabled = true;
            }
        }
      
        function validateEmail(email) {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailPattern.test(email) && !email.endsWith('.airbus');
        }
      });
    }
  }