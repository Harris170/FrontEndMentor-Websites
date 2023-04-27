const toggleBtn = document.querySelectorAll('.toggle__wrapper input');
for(i = 0; i < toggleBtn.length; i++){
    toggleBtn[i].addEventListener('click', ()=>{
        document.getElementById('dark').checked
    ? (document.querySelector('body').classList = '')
    : (document.querySelector('body').classList = 'light');
    });
}

