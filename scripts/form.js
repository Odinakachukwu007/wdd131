// Product Review Form - Dynamic Product List Population
// This script populates the product dropdown and manages footer content

// Product data array
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
  
  // Populate product dropdown
  const productSelect = document.querySelector('#productName');
  
  if (productSelect) {
    // Use forEach to add each product as an option
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
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
