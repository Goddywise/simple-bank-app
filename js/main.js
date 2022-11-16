//let showAside = 0;
const handleAside = ()=>{
    const aside = document.querySelector('aside');
    aside.classList.toggle('showAside');
    // if(showAside == 0){
    //     aside.style.display = 'flex';
    //     showAside++;
    // }
    // else{
    //     showAside = 0;
    //     aside.style.display = 'none';
    // }

}

const showMenu =(menu,content)=>{
    let   allContent = document.querySelectorAll('.content')
    allContent.forEach(eachContent=>{
        eachContent.style.display="none";
    });
    document.querySelector(`${content}`).style.display="flex";

    let allMenu = document.querySelectorAll('.menu');
    allMenu.forEach(eachMenu =>{
        eachMenu.classList.remove('activeMenu');
    })
    try{
        console.log(menu)
        menu.classList.add('activeMenu');
    }
    catch(e){
        console.log(e.name)
    }
    if(menu){
        handleAside();
    }
//The above Try and Catch is to stop error for the code to run till the end---
    //menu.classList.add('activeMenu');
}

window.onload = () =>{
    let user = localStorage.getItem('user')
    //The (user)  in above after getItem is what will use to set the data 
    //so we can still use it to get data-----
    // if(!user){
    //     location.href= 'index.html';
    // }
    // else{
    //     alert('welcome');
    // }
    // console.log(user);
    //localStorage.clear();
    showMenu('','.history-content')
}
