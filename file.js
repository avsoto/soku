window.onload=function(){
    const toggleBtn = document.querySelector('.toggle_btn')
    const toggleBtnIcon = document.querySelector('.toggle_btn i')
            const dropDownMenu = document.querySelector('.sidebar')
    
            toggleBtn.onclick = function(){
                dropDownMenu.classList.toggle('active')
                const isOpen = dropDownMenu.classList.contains('active')
    
              /*  toggleBtnIcon.classList = isOpen
                    ? 'fa-solid fa-xmark'
                    : 'fa-solid fa-bars'*/
            } 
    const btnCloseIcon = document.querySelector('.btn_close i')
    
    btnCloseIcon.onclick = function(){
        dropDownMenu.classList.remove('active')
    }
}






  




  


