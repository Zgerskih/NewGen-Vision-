class UserService {
    var username; // лучше использовать let    указать тип данных, например, строку:
    var password; // лучше использовать let    указать тип данных, например, строку:
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    get username() {                     // необходимо переименовать одноимённое свойство либо метод название должно быть уникальным
        return UserService.username;    // get name()
                                        // return this.username;
    }
    get password() {
        throw "you are not allowed to get password";  // set
    }
    static authenticate_user() {
        let xhr = new XMLHttpRequest();    // лучше использовать fetch и обрабатывать ошибки внутри catch возвращая false
        xhr.open('GET', 'https://examples.com/api/user/authenticate?username=' +
            UserService.username + '&pasword=' + UserService.password, true);
        xhr.responseType = 'json';
         const result = false;     // лучше ипользовать let

        xhr.onload = function() {
            if (xhr.status !== '200') {  // убрать одинарные ковычки
               result = xhr.response;
            } else {
               result = true;
            }

        };
        // добавить вызов метода send
        return result; //  по моему result false????
    }
}
//необходимо подключить библиотеку jQuery и вызывать функцию $ внутри её контекста
// либо использовать querySelector

$('form #login') .click(function () {
    var username = $('#username');  // лучше ипользовать let // лучше использовать document.querySelector и брать value которое также нужно проверить на валидность и наличие
    var password = $('#password');  // лучше ипользовать let // лучше использовать document.querySelector и брать value которое также нужно проверить на валидность и наличие

   // создать экземпляр класса, используя ключевое слово new:
    var res = UserService(username, password).authenticate_user();
   // var res = new UserService(username.val(), password.val()).authenticate_user();
    if (res === true) {
        document.location.href = '/home';
    } else {
        alert(res.error);  // сохранить ошибку в свойстве объекта, например, message
    }
})





