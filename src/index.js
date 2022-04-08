import './styles.css';
import githubLogo from './GitHub-Mark-Light-64px.png';



let logo = document.getElementById('logo');

const myIcon = new Image();
myIcon.src = githubLogo;
myIcon.className = 'github-logo';

logo.appendChild(myIcon);