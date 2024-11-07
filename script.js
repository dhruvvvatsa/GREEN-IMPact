// JavaScript to shrink the title on scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    const title = document.getElementById('main-title');
    
    if (window.scrollY > 50) {
        title.style.fontSize = '1.5rem';
    } else {
        title.style.fontSize = '2.5rem';
    }
});
