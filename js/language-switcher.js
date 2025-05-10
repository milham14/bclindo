document.addEventListener('DOMContentLoaded', function() {
    // Get the dropdown toggle element
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdown = document.querySelector('.language-dropdown');
    
    // Toggle dropdown when clicking the language button
    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); // Prevent event from bubbling up
        dropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });

    // Set default language or get from localStorage
    let currentLang = localStorage.getItem('language') || 'en';
    
    // Update UI based on saved language
    updateLanguageUI(currentLang);
    
    // Language selection
    const langLinks = document.querySelectorAll('.dropdown-menu a');
    langLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            
            // Update dropdown toggle text
            const text = lang === 'en' ? '🌐 EN' : '🌐 ID';
            dropdownToggle.innerHTML = text + ' <i class="fas fa-chevron-down"></i>';
            
            // Close dropdown
            dropdown.classList.remove('active');
            
            // Save selected language
            localStorage.setItem('language', lang);
            currentLang = lang;
            
            // Update all text on the page
            updateLanguage(lang);
        });
    });
    
    // Initial language update
    updateLanguage(currentLang);
});

// Function to update all translatable elements on the page
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        
        if (translations[key] && translations[key][lang]) {
            element.textContent = translations[key][lang];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update language UI
    updateLanguageUI(lang);
}

// Function to update language UI elements
function updateLanguageUI(lang) {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const text = lang === 'en' ? '🌐 EN' : '🌐 ID';
    dropdownToggle.innerHTML = text + ' <i class="fas fa-chevron-down"></i>';
}