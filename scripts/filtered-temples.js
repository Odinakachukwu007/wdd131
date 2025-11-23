// Filtered Temple Album JavaScript
// This file handles dynamic temple card creation and filtering

// Temple data array with 10 temples total
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53997,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo_japan_temple-2305933-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
  }
];

// Function to create and display temple cards
function createTempleCard(filteredTemples) {
  const container = document.querySelector("#temple-cards");
  container.innerHTML = "";
  
  filteredTemples.forEach(temple => {
    let card = document.createElement("figure");
    
    let name = document.createElement("h3");
    name.textContent = temple.templeName;
    
    let location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
    
    let dedication = document.createElement("p");
    dedication.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
    
    let size = document.createElement("p");
    size.innerHTML = `<strong>Size:</strong> ${temple.area.toLocaleString()} sq ft`;
    
    let img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");
    
    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(size);
    
    container.appendChild(card);
  });
}

// Get the year from dedicated date string
function getYear(dateString) {
  return parseInt(dateString.split(",")[0]);
}

// Filter functions
function filterOld() {
  const oldTemples = temples.filter(temple => getYear(temple.dedicated) < 1900);
  createTempleCard(oldTemples);
}

function filterNew() {
  const newTemples = temples.filter(temple => getYear(temple.dedicated) > 2000);
  createTempleCard(newTemples);
}

function filterLarge() {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  createTempleCard(largeTemples);
}

function filterSmall() {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  createTempleCard(smallTemples);
}

function showAll() {
  createTempleCard(temples);
}

// Wait for page to load before running scripts
document.addEventListener('DOMContentLoaded', function() {
  
  // Show all temples on initial load
  showAll();
  
  // Navigation filter event listeners
  document.querySelector("#home").addEventListener("click", function(e) {
    e.preventDefault();
    showAll();
  });
  
  document.querySelector("#old").addEventListener("click", function(e) {
    e.preventDefault();
    filterOld();
  });
  
  document.querySelector("#new").addEventListener("click", function(e) {
    e.preventDefault();
    filterNew();
  });
  
  document.querySelector("#large").addEventListener("click", function(e) {
    e.preventDefault();
    filterLarge();
  });
  
  document.querySelector("#small").addEventListener("click", function(e) {
    e.preventDefault();
    filterSmall();
  });
  
  // Hamburger menu functionality
  const menuButton = document.querySelector("#menuButton");
  const navMenu = document.querySelector("nav");
  
  if (menuButton && navMenu) {
    menuButton.addEventListener("click", function() {
      navMenu.classList.toggle("open");
      const isOpen = navMenu.classList.contains("open");
      menuButton.textContent = isOpen ? "❎" : "☰";
      menuButton.setAttribute("aria-expanded", isOpen);
    });
    
    // Close menu when clicking a nav link
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
      link.addEventListener("click", function() {
        navMenu.classList.remove("open");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener("click", function(event) {
      if (!menuButton.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove("open");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
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
});
