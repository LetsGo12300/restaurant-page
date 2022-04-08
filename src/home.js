function addHomepage(){
    let mainContent = document.querySelector('.main-content');
    
    const about = document.createElement('div');
    about.classList.add('about');
    
    const aboutContent = document.createElement('div');
    aboutContent.classList.add('yellow');
    aboutContent.textContent =  'Fresh Sushi (新鮮な寿司) offers the freshest sushi and sashimi sets in the Philippines since 1998.';
    about.appendChild(aboutContent);
    mainContent.appendChild(about);
    
    const reviews = document.createElement('div');
    reviews.classList.add('reviews');
    
    const reviewsTitle = document.createElement('div');
    reviewsTitle.classList.add('yellow');
    reviewsTitle.textContent =  'What did they say?';
    reviews.appendChild(reviewsTitle);
    
    const pList = ['"Best sushi around Makati city! Went yesterday night. The sushi is fresh and savory. Will definitely visit again! I would rate it 5/5"', '☆☆☆☆☆', '"I can quite honestly say that this is some of the best Japanese food I have ever eaten, including a lot of food actually in Japan. We are literally trying to agree a date to go back – and we NEVER go back."'];
    
    pList.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item;
        reviews.appendChild(p);
    });
    
    mainContent.appendChild(reviews);
}

export default addHomepage;