var userName = prompt('What\'s your name?');
console.log(userName);

var userSurname = prompt('What\'s your surname');
console.log(userSurname);

var fvrtColor = prompt('What\'s your favorite color?');
console.log(fvrtColor)

var currentYear = 20;

var newPsswd = userName + userSurname + fvrtColor + currentYear
document.getElementById('js-pswd').innerHTML = newPsswd;
