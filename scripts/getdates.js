// getdates.js - Dynamic date functionality for WDD 131 Home Page

// Function to update the current year in the footer
function updateCurrentYear() {
  const currentYearElement = document.getElementById("currentyear");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
}

// Function to update the last modified date in the footer
function updateLastModified() {
  const lastModifiedElement = document.getElementById("lastModified");
  if (lastModifiedElement) {
    const lastModified = new Date(document.lastModified);
    const formattedDate = lastModified.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    const formattedTime = lastModified.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    
    lastModifiedElement.textContent = `Last Modification: ${formattedDate} at ${formattedTime}`;
  }
}

// Initialize functions when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  updateCurrentYear();
  updateLastModified();
});

// Alternative approach using direct assignment (as shown in requirements)
// This ensures compatibility even if DOMContentLoaded doesn't fire as expected
try {
  // Update current year
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  
  // Update last modified with formatted date
  document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
} catch (error) {
  // If elements don't exist yet, the DOMContentLoaded listener will handle it
  console.log("Elements not ready yet, will update when DOM loads");
}