var userName = prompt('What\'s your name?');
console.log(userName);

var userSurname = prompt('What\'s your surname');
console.log(userSurname);

var favouriteColor = prompt('What\'s your favorite color?');
console.log(fvrtColor)

var currentYear = 20;

var newPassword = userName + userSurname + favouriteColor + currentYear
document.getElementById('js-pswd').innerHTML = newPassword;
