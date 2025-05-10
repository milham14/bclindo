// active-menu.js - Handles active menu highlighting

document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL
    const currentLocation = window.location.pathname;
    
    // Get all menu items
    const menuItems = document.querySelectorAll('.nav-menu li a');
    
    // Remove active class from all menu items
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to current page menu item
    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href) {
            // Check if the href matches the current location
            if (currentLocation.endsWith(href) || 
                (href === 'index.html' && (currentLocation === '/' || currentLocation.endsWith('/')))) {
                item.classList.add('active');
            }
        }
    });
});