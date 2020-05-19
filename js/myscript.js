var userName = prompt('What\'s your name?');
console.log(userName);

var userSurname = prompt('What\'s your surname');
console.log(userSurname);

var favouriteColor = prompt('What\'s your favorite color?');
console.log(favouriteColor);

var currentYear = 20;
console.log(currentYear)

var newPassword = userName + userSurname + favouriteColor + currentYear
document.getElementById('js-pswd').innerHTML = newPassword;
