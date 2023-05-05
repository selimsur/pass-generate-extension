function generatePassword() {
    var length = 12;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    var password = "";
  
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    return password;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    var generateBtn = document.getElementById("generateBtn");
    var passwordEl = document.getElementById("password");
  
    generateBtn.addEventListener("click", function () {
      var password = generatePassword();
      while (password.length < 12) {
        password = generatePassword();
      }
      passwordEl.innerHTML = password;
      navigator.clipboard.writeText(password).then(function() {
        console.log("Şifre panoya kopyalandı: " + password);
      }, function() {
        console.error("Hata: Şifre panoya kopyalanamadı.");
      });

      var copyBtn = document.getElementById('copyBtn');
      copyBtn.addEventListener('click', function() {
        copyToClipboard(password);
        window.close();
        });
    });
  });
  