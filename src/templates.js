import githubLogo from './GitHub-Mark-Light-64px.png';

let content = document.getElementById('content');

function createHeader(){
    //HEADER (title + navbar)
    const header = document.createElement('div');
    header.classList.add('header');

    const headerTitle = document.createElement('div');
    headerTitle.classList.add('restaurant-title');
    headerTitle.textContent = 'Fresh Sushi (新鮮な寿司)';
    header.appendChild(headerTitle);

    const navBar = document.createElement('ul');
    const navBarList = ['Home', 'Menu', 'Contact'];

    navBarList.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('tab');

        const a = document.createElement('a');
        a.href = '#'; //to edit
        a.classList.add('tab-link');
        a.textContent = item;

        li.appendChild(a);
        navBar.appendChild(li);
    });

    header.appendChild(navBar);
    content.appendChild(header);
}

function createMainContent(){
    //MAIN
    const main = document.createElement('div');
    main.classList.add('main');
    
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    main.appendChild(mainContent);
    content.appendChild(main);
}

function createFooter(){
    //FOOTER
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const bg = document.createElement('div');
    bg.classList.add('bg');

    footer.appendChild(bg);

    const footerText = document.createElement('p');
    footerText.classList.add('footer-text');
    footerText.textContent = 'Copyright © 2022 ';

    //github logo 
    const Icon = new Image();
    Icon.src = githubLogo;
    Icon.className = 'github-logo';

    const logo = document.createElement('span');
    logo.appendChild(Icon);
    footerText.appendChild(logo);
    footerText.append('LetsGo12300');

    footer.appendChild(footerText);
    content.appendChild(footer);
}

function setInitialTemplate(){
    createHeader();
    createMainContent();
    createFooter();
}

function clearMainContent(){
    let mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = '';
}

export default setInitialTemplate;
export {clearMainContent};