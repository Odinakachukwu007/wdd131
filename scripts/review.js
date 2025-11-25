// Review Confirmation Page - localStorage Review Counter
// This script tracks how many reviews have been submitted from this browser

document.addEventListener('DOMContentLoaded', function() {
  
  // Get the current review count from localStorage
  let reviewCount = localStorage.getItem('reviewCount');
  
  // If this is the first review, initialize the counter
  if (!reviewCount) {
    reviewCount = 0;
  }
  
  // Convert to number and increment
  reviewCount = parseInt(reviewCount) + 1;
  
  // Save the updated count back to localStorage
  localStorage.setItem('reviewCount', reviewCount);
  
  // Display the count on the page
  const reviewCountElement = document.querySelector('#reviewCount');
  if (reviewCountElement) {
    // Create a friendly message based on the count
    let message = '';
    
    if (reviewCount === 1) {
      message = 'This is your first review submitted from this device. Thank you for getting started!';
    } else if (reviewCount === 2) {
      message = 'Great! This is your second review. You\'re becoming a regular contributor!';
    } else {
      message = `Awesome! You've submitted ${reviewCount} reviews from this device. Your feedback really helps!`;
    }
    
    reviewCountElement.textContent = message;
  }
  
  // Set current year in footer
  const currentYearElement = document.querySelector('#currentyear');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
  
  // Set last modified date in footer
  const lastModifiedElement = document.querySelector('#lastModified');
  if (lastModifiedElement) {
    lastModifiedElement.textContent = 'Last Modified: ' + document.lastModified;
  }
});
