(function () {
    const menu_btn = document.querySelector('.menu_btn');
    const links_section = document.querySelector('#links_section');
    const link_lists = document.querySelectorAll('.links_lists li a');
    const headerContainer = document.querySelector('.header_container');
    const logo = document.querySelector('.logo img');
    const screenWidth = window.innerWidth;
    const links = document.querySelectorAll('.page_link');

    function closeBar() {
        links_section.classList.add('hidden');
        links_section.classList.remove('visible');
        menu_btn.textContent = 'Menu';
        headerContainer.classList.remove('dark-and-white');
        logo.src = './logo/adina_logo.svg';
        menu_btn.classList.remove('white_menu_btn');
    }

    function manipulateMenu() {
        if (links_section.className === 'hidden') {
            links_section.classList.add('visible');
            links_section.classList.remove('hidden');
            menu_btn.textContent = 'Cancel';
            link_lists.forEach(item => item.classList.add('white_text'));
            headerContainer.classList.add('dark-and-white');
            logo.src = './logo/adina_logo_white.svg';
            menu_btn.classList.add('white_menu_btn');
        }
        else {
            closeBar();
        }
    }

    function checkScreenWidth() {
        if (screenWidth < 1000) {
            closeBar();
        } else {
            return;
        }
    }

    const clicked = menu_btn.addEventListener('click', manipulateMenu);
    const linkClicked = links.forEach(item => item.addEventListener('click', checkScreenWidth));
    return { clicked, linkClicked };
})()