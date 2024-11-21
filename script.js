const contactBtn = document.querySelector('.contact-btn');
const contactInfo = document.querySelector('.contact-info');

contactBtn.addEventListener('click', () => {
    contactInfo.style.display = contactInfo.style.display === 'block' ? 'none' : 'block';
    contactBtn.textContent = contactInfo.style.display === 'block' ? 'Hide Contact' : 'Show Contact';
});
