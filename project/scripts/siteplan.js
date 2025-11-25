// Site Plan JavaScript - Dynamic Footer Content
// This script populates the footer with the current year and last modified date

document.addEventListener('DOMContentLoaded', function() {
  // Get current year and insert into footer
  const currentYearElement = document.querySelector('#currentyear');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
  
  // Get document last modified date and insert into footer
  const lastModifiedElement = document.querySelector('#lastModified');
  if (lastModifiedElement) {
    lastModifiedElement.textContent = 'Last Modified: ' + document.lastModified;
  }
});
