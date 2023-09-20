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

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    // Función para verificar si una sección está próxima a entrar en la ventana de visualización
    function isSectionComingIntoView(section) {
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.9;
        // Ajusta este valor para determinar cuánto de la sección debe estar visible antes de activarla
    }

    // Función para activar las secciones que están próximas a entrar en la vista
    function activateSections() {
        sections.forEach(function (section) {
            if (isSectionComingIntoView(section)) {
                section.classList.add('active');
            }
        });
    }

    // Activa las secciones que están próximas a entrar en la vista al cargar la página
    activateSections();

    // Activa las secciones mientras se desplaza
    window.addEventListener('scroll', activateSections);
});

