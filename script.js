// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Language switcher 

function langSwitcher () {
    
    if(document.getElementById('langDropdown').value == 'uk') {

      document.getElementById("langLabelLink").innerHTML = "Мова:";
      document.getElementById("aboutLink").innerHTML = "Про мене";
      document.getElementById("aboutGameLink").innerHTML = "Про гру 2048";
      document.getElementById("gameLink").innerHTML = "Грати";
      document.getElementById("formLink").innerHTML = "Відгук";



      document.getElementById("welcomeHeader").innerHTML = "Мої вітання!";
      document.getElementById("beforeLink1").innerHTML = "Привіт! Мене звуть Євген Щербак і я хочу стати професійним фронтенд розробником. Деякий час я навчався сам, тепер роблю це за допомогою ";
      document.getElementById("afterLink1").innerHTML = ". Загальновідомо, що прогрес неможливий без практики, і один із найкращих способів зробити це – особисті проекти. Міні-гра 2048 - чудовий приклад такого проекту. Ось про що ця сторінка 🙂";

      document.getElementById("aboutGameHeader").innerHTML = "Про гру";
      document.getElementById("beforelink2").innerHTML = "2048 — це плиткова гра 4x4, створена веб-розробником ";
      document.getElementById("gabriel").innerHTML = "Габріелем Чіруллі";
      document.getElementById("afterLink2").innerHTML = ". Мета гри полягає у поєднанні чисел для створення більших числових плиток, щоб дістатися до магічного числа 2048.";

      document.getElementById("rulesHeader").innerHTML = "Правила";
      document.getElementById("rulesP").innerHTML = "Правила гри в 2048 прості. У вас є чотири способи переміщення плиток: вліво, вправо, вгору та вниз. Ви комбінуєте числа, як-от 2 і 2, щоб зробити плитку 4, 4 і 4, щоб зробити плитку 8, і так далі і так далі. Невелике число, наприклад 2 або 4, з’являтиметься у випадковому місці з кожним вашим рухом. Завдяки цьому дошка заповнюється швидше, а рядки важче пересувати під час гри.";

      document.getElementById("lstPlayHeader").innerHTML = "Зіграймо у 2048!";
      document.getElementById("contactMeHeader").innerHTML = "Ваш відгук";
      document.getElementById("nameLabel").innerHTML = "Ім'я:";
      document.getElementById("messageLabel").innerHTML = "Повідомлення:";
      document.getElementById("submit").value = "Відправити";
      
    }

    if (document.getElementById('langDropdown').value == 'en') {
      document.getElementById("langLabelLink").innerHTML = "language:";
      document.getElementById("aboutLink").innerHTML = "About me";
      document.getElementById("aboutGameLink").innerHTML = "About 2048";
      document.getElementById("gameLink").innerHTML = "Game";
      document.getElementById("formLink").innerHTML = "Contact me";



      document.getElementById("welcomeHeader").innerHTML = "Welcome to my page!";
      document.getElementById("beforeLink1").innerHTML = "My name is Yevhen Shcherbak and my goal is to become a professional frontend developer. I've been studying on my own for some time, now I do it with the help of ";
      document.getElementById("afterLink1").innerHTML = ". It is widely known that progress is impossible without practice and one of the best ways to do that are personal projects. Mini-game 2048 is a great example of such a project. So this is what this page about 🙂";

      document.getElementById("aboutGameHeader").innerHTML = "About the game";
      document.getElementById("beforelink2").innerHTML = "2048 is a 4x4 tile game created by web developer ";
      document.getElementById("gabriel").innerHTML = "Gabriel Cirulli";
      document.getElementById("afterLink2").innerHTML = ". The goal of the game is to combine numbers to create bigger number tiles in order to get to the magic number, 2048.";

      document.getElementById("rulesHeader").innerHTML = "Rules";
      document.getElementById("rulesP").innerHTML = "The rules of how to play 2048 are simple. You have four ways to move the tiles: left, right, up, and down. You combine numbers like 2 and 2 to make a 4 tile, 4 and 4 to make an 8 tile, and so on and so forth. A low number such as a 2 or 4 will appear in a random spot with every move you make. This makes the board fill up faster, and the rows more difficult to move as the game goes on.";

      document.getElementById("lstPlayHeader").innerHTML = "Let's play 2048!";
      document.getElementById("contactMeHeader").innerHTML = "Contact me";
      document.getElementById("nameLabel").innerHTML = "Your name:";
      document.getElementById("messageLabel").innerHTML = "Message:";
      document.getElementById("submit").value = "Submit";
    }
}

