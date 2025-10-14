function toggleMenu() {

    document.getElementById("mobileMenu").classList.toggle("show");
    const iconChar = document.getElementById('icon-char')
    const menuIconContainer = document.querySelector('.menu-icon');

    if (iconChar.innerHTML.trim() == '☰') {
        iconChar.innerHTML = '✖';
        menuIconContainer.classList.add('menu-opened');
    }
    else {
        iconChar.innerHTML = '☰';
        menuIconContainer.classList.remove('menu-opened');
    }

}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.mobile-menu a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const id = this.getAttribute('href').slice(1);
            const target = document.getElementById(id);
            if (target) {
                if(window.innerWidth <= 768) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
               
                
            }


            const mobileMenu = document.getElementById("mobileMenu");
            if (mobileMenu) mobileMenu.classList.remove("show");
            const iconChar = document.getElementById('icon-char');
            if (iconChar) iconChar.innerHTML = '☰';
            const menuIconContainer = document.querySelector('.menu-icon');
            if (menuIconContainer) menuIconContainer.classList.remove('menu-opened');
        });
      });
});