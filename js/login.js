const username = 'james'
const password = '12345'

const handleSubmit = (e) =>{
//This (e) is representing event in index.html
    e.preventDefault();
//preventDefault can't be anything--- is a special js code
    const user = document.querySelectorAll('input')[0].value;
    const pass = document.querySelectorAll('input')[1].value;
    if(user === username && pass === password){
        localStorage.setItem('user',username);
    //Here will use  the 'user'  use to set data, and get the data in 
        location.href = 'main.html';
         console.log(username);
    }
    else{
        alert('invalid username or password')
    }
    
    
}