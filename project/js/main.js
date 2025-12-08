// Main JavaScript File
// Naija: Stories & Sights

// ===== ARRAYS =====
const nigerianFacts = [
  { title: `Capital City`, info: `Abuja (moved from Lagos in 1991)` },
  { title: `Population`, info: `Over 220 million people` },
  { title: `Languages`, info: `Over 500 languages spoken` },
  { title: `Independence`, info: `October 1, 1960 from Britain` },
  { title: `Currency`, info: `Nigerian Naira (₦)` },
  { title: `Largest City`, info: `Lagos - Africa's largest city` }
];

const nigerianStats = [
  { number: `220M+`, label: `Population` },
  { number: `250+`, label: `Ethnic Groups` },
  { number: `500+`, label: `Languages` },
  { number: `36`, label: `States` }
];

const ethnicGroups = [
  {
    name: `Hausa-Fulani`,
    region: `Northern Nigeria`,
    description: `The largest ethnic group, known for their rich Islamic heritage, elaborate turbans, and the ancient city of Kano. The Hausa language is widely spoken across West Africa.`,
    language: `Hausa`
  },
  {
    name: `Yoruba`,
    region: `Southwestern Nigeria`,
    description: `Known for vibrant festivals, sophisticated art forms including bronze casting and wood carving, and cities like Lagos, Ibadan, and Ile-Ife - the spiritual home of Yoruba culture.`,
    language: `Yoruba`
  },
  {
    name: `Igbo`,
    region: `Southeastern Nigeria`,
    description: `Celebrated for their entrepreneurial spirit, rich cultural traditions including the Igbo Landing story, and contributions to Nigerian commerce and arts.`,
    language: `Igbo`
  }
];

const cuisineItems = [
  {
    name: `Jollof Rice`,
    description: `Nigeria's most famous dish - rice cooked in a rich tomato and pepper sauce with spices. Each cook has their secret recipe.`,
    category: `food`
  },
  {
    name: `Suya`,
    description: `Spicy grilled meat (usually beef or chicken) seasoned with ground peanuts, pepper, and spices. Perfect street food.`,
    category: `food`
  },
  {
    name: `Egusi Soup`,
    description: `Hearty soup made with ground melon seeds, vegetables, and meat or fish. Served with pounded yam or fufu.`,
    category: `food`
  },
  {
    name: `Puff Puff`,
    description: `Sweet, deep-fried dough balls similar to donuts. A popular snack at parties and celebrations.`,
    category: `food`
  },
  {
    name: `Chin Chin`,
    description: `Crunchy, slightly sweet fried snack made from flour, sugar, and milk. Addictively delicious.`,
    category: `food`
  },
  {
    name: `Moi Moi`,
    description: `Steamed bean pudding made from black-eyed peas, onions, and peppers. Nutritious and flavorful.`,
    category: `food`
  }
];

const culturalElements = [
  { name: `Durbar Festival`, category: `festivals`, description: `Spectacular horse parade in Northern Nigeria` },
  { name: `Calabar Carnival`, category: `festivals`, description: `Africa's biggest street party every December` },
  { name: `Afrobeats`, category: `music`, description: `Global music genre pioneered by Nigerian artists` },
  { name: `Nollywood`, category: `music`, description: `World's second-largest film industry by volume` },
  { name: `Adire Fabric`, category: `art`, description: `Traditional Yoruba tie-dye textile art` },
  { name: `Uli Art`, category: `art`, description: `Traditional Igbo body and wall painting` },
  { name: `Jollof Rice`, category: `food`, description: `Nigeria's most famous rice dish` },
  { name: `Suya`, category: `food`, description: `Spicy grilled meat - beloved street food` }
];

const itineraries = {
  3: {
    title: `3-Day Lagos Express`,
    days: [
      `Day 1: Arrive Lagos, visit Lekki Conservation Centre, relax at Elegushi Beach`,
      `Day 2: Explore Nike Art Gallery, shop at Lekki Market, experience Lagos nightlife`,
      `Day 3: Visit National Museum, tour Lagos Island, depart`
    ]
  },
  5: {
    title: `5-Day Cultural Journey`,
    days: [
      `Day 1: Arrive Lagos, settle in, evening beach visit`,
      `Day 2: Full day Lagos - museums, markets, and culture`,
      `Day 3: Fly to Abuja, visit Zuma Rock and Aso Rock`,
      `Day 4: Explore Abuja - National Mosque, Arts Village, Millennium Park`,
      `Day 5: Morning shopping, return flight`
    ]
  },
  7: {
    title: `7-Day Nigeria Discovery`,
    days: [
      `Day 1: Arrive Lagos, check in, evening orientation`,
      `Day 2: Lagos exploration - beaches, markets, galleries`,
      `Day 3: Day trip to Abeokuta - Olumo Rock and historical sites`,
      `Day 4: Fly to Abuja, Zuma Rock visit`,
      `Day 5: Abuja full day - monuments, parks, and culture`,
      `Day 6: Optional: Yankari National Park day trip or more Abuja`,
      `Day 7: Last-minute shopping, departure`
    ]
  }
};

// ===== OBJECTS =====
const siteConfig = {
  siteName: `Naija: Stories & Sights`,
  author: `Prosper Anosike`,
  course: `WDD 131`,
  year: new Date().getFullYear(),
  lastModified: document.lastModified
};

// LocalStorage keys object
const storageKeys = {
  visitCount: `naija_visit_count`,
  userMessages: `naija_user_messages`,
  formSubmissions: `naija_form_submissions`,
  preferences: `naija_user_preferences`
};

// ===== FUNCTIONS =====

// Function 1: Initialize the page
function initializePage() {
  updateCopyrightYear();
  updateLastModified();
  setupNavigation();
  trackVisits();
  displayStoredMessages();
  
  // Page-specific initialization
  const currentPage = getCurrentPage();
  
  if (currentPage === `index.html` || currentPage === `/`) {
    initializeHomePage();
  } else if (currentPage === `culture.html`) {
    initializeCulturePage();
  } else if (currentPage === `tourism.html`) {
    initializeTourismPage();
  }
}

// Function 2: Update copyright year
function updateCopyrightYear() {
  const yearElement = document.getElementById(`currentyear`);
  if (yearElement) {
    yearElement.textContent = siteConfig.year;
  }
}

// Function 3: Update last modified date
function updateLastModified() {
  const modifiedElement = document.getElementById(`lastModified`);
  if (modifiedElement) {
    modifiedElement.textContent = `Last Updated: ${siteConfig.lastModified}`;
  }
}

// Function 4: Setup navigation with event listeners
function setupNavigation() {
  const menuToggle = document.getElementById(`menu-toggle`);
  const navMenu = document.getElementById(`nav-menu`);
  
  if (menuToggle && navMenu) {
    // Event listener
    menuToggle.addEventListener(`click`, () => {
      const isExpanded = menuToggle.getAttribute(`aria-expanded`) === `true`;
      
      // Toggle menu state
      if (isExpanded) {
        menuToggle.setAttribute(`aria-expanded`, `false`);
        navMenu.classList.remove(`show`);
      } else {
        menuToggle.setAttribute(`aria-expanded`, `true`);
        navMenu.classList.add(`show`);
      }
    });

    // Close menu when clicking outside
    document.addEventListener(`click`, (event) => {
      if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
        menuToggle.setAttribute(`aria-expanded`, `false`);
        navMenu.classList.remove(`show`);
      }
    });

    // Close menu on window resize (for responsive behavior)
    window.addEventListener(`resize`, () => {
      if (window.innerWidth >= 1024) {
        menuToggle.setAttribute(`aria-expanded`, `false`);
        navMenu.classList.remove(`show`);
      }
    });
  }
}

// Function 5: Track visits using localStorage
function trackVisits() {
  let visitCount = parseInt(localStorage.getItem(storageKeys.visitCount)) || 0;
  visitCount++;
  localStorage.setItem(storageKeys.visitCount, visitCount.toString());
  
  // Conditional branching
  if (visitCount === 1) {
    console.log(`Welcome to your first visit!`);
  } else if (visitCount < 10) {
    console.log(`Welcome back! Visit #${visitCount}`);
  } else {
    console.log(`Thanks for being a loyal visitor! Visit #${visitCount}`);
  }
}

// Function 6: Get current page name
function getCurrentPage() {
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf(`/`) + 1);
  return page || `index.html`;
}

// Function 7: Initialize home page with dynamic content
function initializeHomePage() {
  displayStats();
  displayFacts();
  setupExploreButton();
  displayRecentMessages();
}

// Function 8: Display stats using array method
function displayStats() {
  const statsDisplay = document.getElementById(`stats-display`);
  
  if (statsDisplay) {
    // Array method (map)
    // Template literals
    const statsHTML = nigerianStats.map(stat => `
      <div class="stat-card">
        <span class="stat-number">${stat.number}</span>
        <span class="stat-label">${stat.label}</span>
      </div>
    `).join(``);
    
    // DOM modification
    statsDisplay.innerHTML = statsHTML;
  }
}

// Function 9: Display facts using array method
function displayFacts() {
  const factsContainer = document.getElementById(`facts-container`);
  
  if (factsContainer) {
    // Array method (forEach)
    nigerianFacts.forEach(fact => {
      // Template literal
      const factHTML = `
        <div class="fact-item">
          <h4>${fact.title}</h4>
          <p>${fact.info}</p>
        </div>
      `;
      
      // DOM modification
      factsContainer.innerHTML += factHTML;
    });
  }
}

// Function 10: Setup explore button with event listener
function setupExploreButton() {
  const exploreBtn = document.getElementById(`explore-btn`);
  
  if (exploreBtn) {
    // Event listener
    exploreBtn.addEventListener(`click`, () => {
      // Scroll to featured cards section
      const cardsSection = document.querySelector(`.featured-cards`);
      if (cardsSection) {
        cardsSection.scrollIntoView({ behavior: `smooth` });
      }
    });
  }
}

// Function 11: Display recent messages from localStorage
function displayRecentMessages() {
  const messagesDisplay = document.getElementById(`messages-display`);
  
  if (messagesDisplay) {
    // Get messages from localStorage
    const messages = JSON.parse(localStorage.getItem(storageKeys.userMessages)) || [];
    
    // Conditional branching
    if (messages.length === 0) {
      messagesDisplay.innerHTML = `<p class="no-messages">No messages yet. Be the first to share your thoughts!</p>`;
    } else {
      // Array method (filter and slice)
      const recentMessages = messages.filter(msg => msg.message).slice(-3).reverse();
      
      // Template literal
      const messagesHTML = recentMessages.map(msg => `
        <div class="message-item">
          <div class="message-header">
            <span class="message-name">${msg.name}</span>
            <span class="message-date">${msg.date}</span>
          </div>
          <p>${msg.message}</p>
        </div>
      `).join(``);
      
      messagesDisplay.innerHTML = messagesHTML;
    }
  }
}

// Function 12: Store message to localStorage
function storeMessage(messageData) {
  // Get existing messages
  const messages = JSON.parse(localStorage.getItem(storageKeys.userMessages)) || [];
  
  // Add new message
  messages.push(messageData);
  
  // Store back to localStorage
  localStorage.setItem(storageKeys.userMessages, JSON.stringify(messages));
}

// Function 13: Display stored messages for submissions page
function displayStoredMessages() {
  const submissionsDisplay = document.getElementById(`submissions-display`);
  
  if (submissionsDisplay) {
    const submissions = JSON.parse(localStorage.getItem(storageKeys.formSubmissions)) || [];
    
    // Conditional branching
    if (submissions.length === 0) {
      submissionsDisplay.innerHTML = `<p class="no-submissions">No submissions yet. Be the first to share your thoughts!</p>`;
    } else {
      // Array method (map)
      const submissionsHTML = submissions.map(sub => `
        <div class="submission-item">
          <div class="submission-header">
            <span class="submission-name">${sub.name}</span>
            <span class="submission-date">${sub.date}</span>
          </div>
          <p><strong>Email:</strong> ${sub.email}</p>
          ${sub.visitStatus ? `<p><strong>Visit Status:</strong> ${sub.visitStatus}</p>` : ``}
          ${sub.interests ? `<p><strong>Interests:</strong> ${sub.interests}</p>` : ``}
          <p><strong>Message:</strong> ${sub.message}</p>
        </div>
      `).join(``);
      
      submissionsDisplay.innerHTML = submissionsHTML;
    }
  }
}

// Function 14: Initialize culture page
function initializeCulturePage() {
  displayEthnicGroups();
  displayCuisine();
  setupCultureFilters();
}

// Function 15: Display ethnic groups
function displayEthnicGroups() {
  const groupsDisplay = document.getElementById(`ethnic-groups-display`);
  
  if (groupsDisplay) {
    // Array method (map)
    const groupsHTML = ethnicGroups.map(group => `
      <div class="ethnic-group-card">
        <h4>${group.name}</h4>
        <p><strong>Region:</strong> ${group.region}</p>
        <p><strong>Language:</strong> ${group.language}</p>
        <p>${group.description}</p>
      </div>
    `).join(``);
    
    groupsDisplay.innerHTML = groupsHTML;
  }
}

// Function 16: Display cuisine items
function displayCuisine() {
  const cuisineDisplay = document.getElementById(`cuisine-display`);
  
  if (cuisineDisplay) {
    // Array method (map)
    const cuisineHTML = cuisineItems.map(item => `
      <div class="cuisine-card">
        <h4>${item.name}</h4>
        <p>${item.description}</p>
      </div>
    `).join(``);
    
    cuisineDisplay.innerHTML = cuisineHTML;
  }
}

// Function 17: Setup culture filters with event listeners
function setupCultureFilters() {
  const filterButtons = document.querySelectorAll(`.filter-btn`);
  const filteredContent = document.getElementById(`filtered-content`);
  
  if (filterButtons.length > 0 && filteredContent) {
    // Event listeners
    filterButtons.forEach(button => {
      button.addEventListener(`click`, (e) => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove(`active`));
        
        // Add active class to clicked button
        e.target.classList.add(`active`);
        
        const category = e.target.getAttribute(`data-category`);
        displayFilteredElements(category, filteredContent);
      });
    });
    
    // Display all elements initially
    displayFilteredElements(`all`, filteredContent);
  }
}

// Function 18: Display filtered cultural elements
function displayFilteredElements(category, container) {
  // Array method (filter)
  // Conditional branching
  const filtered = category === `all` 
    ? culturalElements 
    : culturalElements.filter(element => element.category === category);
  
  // Template literal
  const elementsHTML = filtered.map(element => `
    <div class="fact-item">
      <h4>${element.name}</h4>
      <p>${element.description}</p>
      <span class="highlight-tag">${element.category}</span>
    </div>
  `).join(``);
  
  // Conditional branching
  if (filtered.length === 0) {
    container.innerHTML = `<p class="no-messages">No items found in this category.</p>`;
  } else {
    container.innerHTML = elementsHTML;
  }
}

// Function 19: Initialize tourism page
function initializeTourismPage() {
  setupItinerarySelector();
}

// Function 20: Setup itinerary selector with event listeners
function setupItinerarySelector() {
  const itineraryButtons = document.querySelectorAll(`.itinerary-btn`);
  const itineraryDisplay = document.getElementById(`itinerary-display`);
  
  if (itineraryButtons.length > 0 && itineraryDisplay) {
    // Event listeners
    itineraryButtons.forEach(button => {
      button.addEventListener(`click`, (e) => {
        // Remove active class from all buttons
        itineraryButtons.forEach(btn => btn.classList.remove(`active`));
        
        // Add active class to clicked button
        e.target.classList.add(`active`);
        
        const days = parseInt(e.target.getAttribute(`data-days`));
        displayItinerary(days, itineraryDisplay);
      });
    });
  }
}

// Function 21: Display selected itinerary
function displayItinerary(days, container) {
  const itinerary = itineraries[days];
  
  // Conditional branching
  if (!itinerary) {
    container.innerHTML = `<p>Itinerary not available.</p>`;
    return;
  }
  
  // Template literal
  const itineraryHTML = `
    <div class="itinerary-details">
      <h3>${itinerary.title}</h3>
      <ul>
        ${itinerary.days.map(day => `<li>${day}</li>`).join(``)}
      </ul>
      <p class="mt-3"><em>This itinerary can be customized based on your interests and preferences.</em></p>
    </div>
  `;
  
  container.innerHTML = itineraryHTML;
}

// ===== INITIALIZATION - DOM CONTENT LOADED =====
// Event listener
document.addEventListener(`DOMContentLoaded`, initializePage);
