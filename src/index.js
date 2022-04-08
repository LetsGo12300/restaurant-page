import setInitialTemplate, {clearMainContent} from "./templates";
import addHomepage from "./home";
import addMenu from "./menu";
import addContact from "./contact";
import './styles.css';

setInitialTemplate();
addHomepage();

const tabLinks = Array.from(document.querySelectorAll('.tab-link'));
tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (tabLinks.indexOf(link) === 0){
            clearMainContent();
            addHomepage();
        } else if (tabLinks.indexOf(link) === 1){
            clearMainContent();
            addMenu();
        } else if (tabLinks.indexOf(link) === 2){
            clearMainContent();
            addContact();
        }
    });
});