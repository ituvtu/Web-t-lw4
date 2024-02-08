document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById('emailAddress');
    const phoneInput = document.getElementById('phone');
    const submitButton = document.getElementById('submitForm');
    const validateEmailButton = document.getElementById('validateEmail');
    const validatePhoneButton = document.getElementById('validatePhone');
  
    emailInput.addEventListener('input', function() {
      submitButton.disabled = emailInput.value.trim() === '' || phoneInput.value.trim() === '';
    });
  
    phoneInput.addEventListener('input', function() {
      submitButton.disabled = emailInput.value.trim() === '' || phoneInput.value.trim() === '';
    });
  
    validateEmailButton.addEventListener('click', function() {
      if (emailInput.value === '') {
        alert('Будь ласка, введіть електронну адресу.');
      } else if (validateEmail(emailInput.value)) {
        alert('Електронна адреса введена правильно.');
      } else {
        alert('Некоректна електронна адреса.');
      }
    });
  
    validatePhoneButton.addEventListener('click', function() {
      if (validatePhone(phoneInput.value)) {
        alert('Телефонний номер введено правильно.');
      } else {
        alert('Некоректний телефонний номер.');
      }
    });
  
    submitButton.addEventListener('click', function() {
      if (validateEmail(emailInput.value) && validatePhone(phoneInput.value)) {
        window.alert('Форма відправлена!');
      } else {
        window.alert('Будь ласка, виправте помилки в формі.');
      }
    });
  
    function validateEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email) && !email.endsWith('.airbus');
    }
  
    function validatePhone(phone) {
      const phonePattern = /^\+\d{12}$/;
      return phonePattern.test(phone);
    }
  
    // Перевірка підтримки HTML5 і активація старої валідації, якщо потрібно
    function checkHTML5Support() {
      var testInput = document.createElement('input');
      testInput.setAttribute('type', 'email');
      if (testInput.type !== 'email') {
        document.addEventListener("DOMContentLoaded", function() {
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            const emailForm = document.getElementById('emailForm');
            const phoneForm = document.getElementById('phoneForm');
            const validateEmailButton = document.getElementById('validateEmail');
            const validatePhoneButton = document.getElementById('validatePhone');
            const submitButton = document.getElementById('submitForm');
          
            validateEmailButton.addEventListener('click', function() {
                if (validateEmail(emailInput.value)) {
                    alert('Електронна адреса введена правильно.');
                } else {
                    alert('Некоректна електронна адреса.');
                }
            });
          
            validatePhoneButton.addEventListener('click', function() {
                if (validatePhone(phoneInput.value)) {
                    alert('Телефонний номер введено правильно.');
                } else {
                    alert('Некоректний телефонний номер.');
                }
            });
          
            emailInput.addEventListener('input', updateSubmitButton);
            phoneInput.addEventListener('input', updateSubmitButton);
          
            submitButton.addEventListener('click', function() {
                if (validateEmail(emailInput.value) && validatePhone(phoneInput.value)) {
                    window.alert('Ви успішно зареєструвалися!');
                } else {
                    window.alert('Будь ласка, виправте помилки в формі.');
                }
            });
          
            function updateSubmitButton() {
                if (validateEmail(emailInput.value) && validatePhone(phoneInput.value)) {
                    submitButton.disabled = false;
                } else {
                    submitButton.disabled = true;
                }
            }
          
            function validateEmail(email) {
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                return emailPattern.test(email) && !email.endsWith('.airbus');
            }
          
            function validatePhone(phone) {
            const phonePattern = /^\+\d{1,3}(?!0{2,})\d{9}$/;
            return phonePattern.test(phone) && !/^\+0{1,12}$/.test(phone) && !/^\+0{3}\d{9}$/.test(phone);
          }
          
          });
          
      }
    }
  
    checkHTML5Support();
  });
  