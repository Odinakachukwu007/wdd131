// Temple Album JavaScript - BYU-I WDD 131 Assignment
// Hamburger menu toggle functionality and dynamic footer content

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Hamburger menu toggle
    const menuButton = document.querySelector("#menuButton");
    const navMenu = document.querySelector("nav");
    
    if (menuButton && navMenu) {
        menuButton.addEventListener("click", function() {
            navMenu.classList.toggle("open");
            const isOpen = navMenu.classList.contains("open");
            menuButton.textContent = isOpen ? "❎" : "☰";
            
            // Update aria-expanded for accessibility
            menuButton.setAttribute("aria-expanded", isOpen);
        });
        
        // Close menu when clicking outside
        document.addEventListener("click", function(event) {
            if (!menuButton.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove("open");
                menuButton.textContent = "☰";
                menuButton.setAttribute("aria-expanded", "false");
            }
        });
        
        // Close menu when pressing Escape key
        document.addEventListener("keydown", function(event) {
            if (event.key === "Escape" && navMenu.classList.contains("open")) {
                navMenu.classList.remove("open");
                menuButton.textContent = "☰";
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.focus(); // Return focus to menu button
            }
        });
    }
    
    // Dynamic footer content
    const currentYearElement = document.querySelector("#currentyear");
    const lastModifiedElement = document.querySelector("#lastModified");
    
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Last Modified: " + document.lastModified;
    }
    
    // Lazy loading fallback for older browsers
    if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading is supported
        console.log('Native lazy loading supported');
    } else {
        // Fallback for browsers that don't support native lazy loading
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.removeAttribute('loading');
        });
    }
    
    // Simple image error handling
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.alt = this.alt + ' (Image not available)';
            this.style.background = '#f0f0f0';
            this.style.color = '#666';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.minHeight = '200px';
        });
    });
});

// Performance optimization: Preload critical resources
window.addEventListener('load', function() {
    // Optional: Preload next page resources if needed
    console.log('Temple Album page fully loaded');
});