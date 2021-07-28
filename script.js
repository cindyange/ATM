

let counter = 0;
let username = document.getElementById('username');
let password = document.getElementById('password');
let enterButton = document.getElementById('btn-login')
let text = document.querySelector('.text')

enterButton.addEventListener("click",(event) =>{
    event.preventDefault()
    console.log(username.value);
    console.log(password.value);
    // text.innerHTML ='hello'
    // window.open('./atm.html')
    location.href =('atm.html')
    
    localStorage.setItem('username',username.value);
    localStorage.setItem('password',password.value);
});


let user = {
    username: username.value,
    password: password.value,
};

localStorage.setItem(user.username + counter++,JSON.stringify(user));
localStorage.setItem(user.password + counter++,JSON.stringify(user));