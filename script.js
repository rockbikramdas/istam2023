

window.addEventListener('DOMContentLoaded',()=>{
    const menuBtn = document.getElementById("menuButton");
    var menuBar=document.getElementById('menuBar');
    menuBtn.addEventListener('click',()=>{
        menuBar.classList.toggle('hidden');
        menuBar.classList.toggle('flex');
    })
    
    
})