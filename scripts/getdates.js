// getdates.js - Dynamic date functionality for WDD 131 Home Page

// Update current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Update last modified date in footer
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;