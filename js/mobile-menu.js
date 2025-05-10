// mobile-menu.js - Controls mobile menu functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initMobileMenu();
});

function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const floatingToggle = document.querySelector('.mobile-menu-toggle.floating');
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    if ((menuToggle || floatingToggle) && navMenu && menuOverlay) {
        // Toggle menu when clicking the regular menu button
        if (menuToggle) {
            menuToggle.addEventListener('click', toggleMenu);
        }
        
        // Toggle menu when clicking the floating menu button
        if (floatingToggle) {
            floatingToggle.addEventListener('click', toggleMenu);
        }
        
        // Close menu when clicking outside
        menuOverlay.addEventListener('click', closeMenu);
        
        // Close menu when clicking a menu item (except dropdown toggle and language options)
        const menuItems = navMenu.querySelectorAll('a:not(.dropdown-toggle):not([data-lang])');
        menuItems.forEach(item => {
            item.addEventListener('click', closeMenu);
        });
    }
    
    function toggleMenu() {
        navMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        
        // Change icon based on menu state
        const icon = this.querySelector('i');
        const floatingIcon = floatingToggle ? floatingToggle.querySelector('i') : null;
        
        if (navMenu.classList.contains('active')) {
            if (icon) icon.className = 'fas fa-times';
            if (floatingIcon) floatingIcon.className = 'fas fa-times';
        } else {
            if (icon) icon.className = 'fas fa-bars';
            if (floatingIcon) floatingIcon.className = 'fas fa-bars';
        }
    }
    
    function closeMenu() {
        navMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        
        // Reset icons
        const icon = menuToggle ? menuToggle.querySelector('i') : null;
        const floatingIcon = floatingToggle ? floatingToggle.querySelector('i') : null;
        
        if (icon) icon.className = 'fas fa-bars';
        if (floatingIcon) floatingIcon.className = 'fas fa-bars';
    }
}