import setInitialTemplate, {clearMainContent} from "./templates";
import addHomepage from "./home";
import './styles.css';

setInitialTemplate();
addHomepage();

const tabLinks = Array.from(document.querySelectorAll('.tab-link'));

tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (tabLinks.indexOf(link) === 0){
            clearMainContent();
            addHomepage();
        }
    });
});