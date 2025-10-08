function toggleMenu()
    {

         document.getElementById("mobileMenu").classList.toggle("show");
        const iconChar = document.getElementById('icon-char')
        const menuIconContainer = document.querySelector('.menu-icon');

        if(iconChar.innerHTML.trim() == '☰')
        {
            iconChar.innerHTML = '✖';
            menuIconContainer.classList.add('menu-opened');
        }
        else
        {
            iconChar.innerHTML = '☰';
            menuIconContainer.classList.remove('menu-opened');
        }
       
    }