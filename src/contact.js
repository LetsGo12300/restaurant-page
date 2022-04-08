function addContact(){
    let mainContent = document.querySelector('.main-content');
    
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact us!';
    contactTitle.classList.add('yellow-font');
    contact.appendChild(contactTitle);

    const restaurantTitle = document.createElement('h4');
    restaurantTitle.textContent = 'Fresh Sushi (新鮮な寿司) 123 Makati City, Philippines';
    contact.appendChild(restaurantTitle);

    const mobile = document.createElement('h4');
    mobile.textContent = 'Mobile: +63 912 345 6789';
    contact.appendChild(mobile);

    const email = document.createElement('h4');
    email.textContent = 'Email: fresh@sushi.ph';
    contact.appendChild(email);
    
    mainContent.appendChild(contact);
}

export default addContact;