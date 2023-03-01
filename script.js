const collapseFun =() =>{
    
    const element = document.getElementById("menuButton");
    var menuBar=document.getElementById('menuBar');
    if(menuBar.className==='hidden lg:flex flex-col items-center lg:flex-wrap lg:flex-row lg:w-full lg:justify-center  font-semibold'){
        menuBar.className='flex lg:flex flex-col items-center lg:flex-wrap lg:flex-row lg:w-full lg:justify-center  font-semibold'
        element.innerHTML='<span class="material-symbols-outlined">close</span>';
    }
    else{
        element.innerHTML='<span class="material-symbols-outlined">menu</span>';
        menuBar.className='hidden lg:flex flex-col items-center lg:flex-wrap lg:flex-row lg:w-full lg:justify-center  font-semibold'
    }

}