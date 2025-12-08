// Form JavaScript - WDD 131 Final Project
// Naija: Stories & Sights - Form Validation and LocalStorage

// ===== FORM VALIDATION AND SUBMISSION =====

// Storage key for form submissions
const FORM_STORAGE_KEY = `naija_form_submissions`;
const MESSAGE_STORAGE_KEY = `naija_user_messages`;

// Function 1: Initialize form when DOM is ready
function initializeForm() {
  const form = document.getElementById(`contact-form`);
  
  if (form) {
    setupFormValidation(form);
    setupCharacterCount();
    setupFormSubmission(form);
    setupSuccessClose();
  }
}

// Function 2: Setup real-time form validation
function setupFormValidation(form) {
  const nameInput = document.getElementById(`full-name`);
  const emailInput = document.getElementById(`email`);
  const phoneInput = document.getElementById(`phone`);
  const messageInput = document.getElementById(`message`);
  const consentCheckbox = document.getElementById(`consent`);
  
  // Add event listeners for real-time validation
  if (nameInput) {
    nameInput.addEventListener(`blur`, () => validateName(nameInput));
    nameInput.addEventListener(`input`, () => clearError(`name-error`, nameInput));
  }
  
  if (emailInput) {
    emailInput.addEventListener(`blur`, () => validateEmail(emailInput));
    emailInput.addEventListener(`input`, () => clearError(`email-error`, emailInput));
  }
  
  if (phoneInput) {
    phoneInput.addEventListener(`blur`, () => validatePhone(phoneInput));
    phoneInput.addEventListener(`input`, () => clearError(`phone-error`, phoneInput));
  }
  
  if (messageInput) {
    messageInput.addEventListener(`blur`, () => validateMessage(messageInput));
    messageInput.addEventListener(`input`, () => clearError(`message-error`, messageInput));
  }
  
  if (consentCheckbox) {
    consentCheckbox.addEventListener(`change`, () => validateConsent(consentCheckbox));
  }
}

// Function 3: Setup character count for message textarea
function setupCharacterCount() {
  const messageInput = document.getElementById(`message`);
  const charCount = document.getElementById(`char-count`);
  
  if (messageInput && charCount) {
    // Event listener
    messageInput.addEventListener(`input`, () => {
      const currentLength = messageInput.value.length;
      charCount.textContent = currentLength;
      
      // Conditional branching
      // Change color based on character count
      if (currentLength > 900) {
        charCount.style.color = `var(--error)`;
      } else if (currentLength > 700) {
        charCount.style.color = `var(--accent-dark)`;
      } else {
        charCount.style.color = `var(--text-light)`;
      }
    });
  }
}

// Function 4: Validate name field
function validateName(input) {
  const nameError = document.getElementById(`name-error`);
  const value = input.value.trim();
  
  // Conditional branching
  if (value === ``) {
    showError(nameError, input, `Name is required`);
    return false;
  } else if (value.length < 2) {
    showError(nameError, input, `Name must be at least 2 characters`);
    return false;
  } else if (value.length > 100) {
    showError(nameError, input, `Name must not exceed 100 characters`);
    return false;
  } else if (!/^[a-zA-Z\s'-]+$/.test(value)) {
    showError(nameError, input, `Name can only contain letters, spaces, hyphens, and apostrophes`);
    return false;
  } else {
    clearError(`name-error`, input);
    return true;
  }
}

// Function 5: Validate email field
function validateEmail(input) {
  const emailError = document.getElementById(`email-error`);
  const value = input.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Conditional branching
  if (value === ``) {
    showError(emailError, input, `Email is required`);
    return false;
  } else if (!emailRegex.test(value)) {
    showError(emailError, input, `Please enter a valid email address`);
    return false;
  } else {
    clearError(`email-error`, input);
    return true;
  }
}

// Function 6: Validate phone field (optional but if filled, should be valid)
function validatePhone(input) {
  const phoneError = document.getElementById(`phone-error`);
  const value = input.value.trim();
  
  // Phone is optional, so empty is valid
  if (value === ``) {
    clearError(`phone-error`, input);
    return true;
  }
  
  // If provided, should be reasonably formatted
  const phoneRegex = /^[\d\s\-+()]+$/;
  
  // Conditional branching
  if (value.length < 10) {
    showError(phoneError, input, `Phone number seems too short`);
    return false;
  } else if (!phoneRegex.test(value)) {
    showError(phoneError, input, `Please enter a valid phone number`);
    return false;
  } else {
    clearError(`phone-error`, input);
    return true;
  }
}

// Function 7: Validate message field
function validateMessage(input) {
  const messageError = document.getElementById(`message-error`);
  const value = input.value.trim();
  
  // Conditional branching
  if (value === ``) {
    showError(messageError, input, `Message is required`);
    return false;
  } else if (value.length < 10) {
    showError(messageError, input, `Message must be at least 10 characters`);
    return false;
  } else if (value.length > 1000) {
    showError(messageError, input, `Message must not exceed 1000 characters`);
    return false;
  } else {
    clearError(`message-error`, input);
    return true;
  }
}

// Function 8: Validate consent checkbox
function validateConsent(checkbox) {
  const consentError = document.getElementById(`consent-error`);
  
  // Conditional branching
  if (!checkbox.checked) {
    showError(consentError, checkbox, `You must consent to store your information`);
    return false;
  } else {
    clearError(`consent-error`, checkbox);
    return true;
  }
}

// Function 9: Show error message
function showError(errorElement, inputElement, message) {
  // DOM modification
  if (errorElement) {
    errorElement.textContent = message;
  }
  
  if (inputElement) {
    inputElement.classList.add(`error`);
    inputElement.setAttribute(`aria-invalid`, `true`);
  }
}

// Function 10: Clear error message
function clearError(errorId, inputElement) {
  const errorElement = document.getElementById(errorId);
  
  // DOM modification
  if (errorElement) {
    errorElement.textContent = ``;
  }
  
  if (inputElement) {
    inputElement.classList.remove(`error`);
    inputElement.removeAttribute(`aria-invalid`);
  }
}

// Function 11: Setup form submission with event listener
function setupFormSubmission(form) {
  // Event listener
  form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    
    // Validate all fields
    const isNameValid = validateName(document.getElementById(`full-name`));
    const isEmailValid = validateEmail(document.getElementById(`email`));
    const isPhoneValid = validatePhone(document.getElementById(`phone`));
    const isMessageValid = validateMessage(document.getElementById(`message`));
    const isConsentValid = validateConsent(document.getElementById(`consent`));
    
    // Conditional branching
    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid && isConsentValid) {
      // All validations passed
      const formData = collectFormData(form);
      saveFormSubmission(formData);
      showSuccessMessage();
      form.reset();
      
      // Reset character count
      const charCount = document.getElementById(`char-count`);
      if (charCount) {
        charCount.textContent = `0`;
        charCount.style.color = `var(--text-light)`;
      }
    } else {
      // Scroll to first error
      const firstError = form.querySelector(`.error`);
      if (firstError) {
        firstError.scrollIntoView({ behavior: `smooth`, block: `center` });
        firstError.focus();
      }
    }
  });
  
  // Reset button event listener
  const resetButton = form.querySelector(`.reset-btn`);
  if (resetButton) {
    resetButton.addEventListener(`click`, () => {
      // Clear all errors
      clearAllErrors();
      
      // Reset character count
      const charCount = document.getElementById(`char-count`);
      if (charCount) {
        charCount.textContent = `0`;
        charCount.style.color = `var(--text-light)`;
      }
    });
  }
}

// Function 12: Collect form data into object
function collectFormData(form) {
  const formData = new FormData(form);
  
  // Get checkbox values (interests)
  const interests = [];
  const interestCheckboxes = form.querySelectorAll(`input[name="interests"]:checked`);
  interestCheckboxes.forEach(checkbox => {
    interests.push(checkbox.value);
  });
  
  // Create submission object - Object usage 
  const submission = {
    name: formData.get(`fullName`),
    email: formData.get(`email`),
    phone: formData.get(`phone`) || `Not provided`,
    visitStatus: formData.get(`visitStatus`) || `Not specified`,
    interests: interests.length > 0 ? interests.join(`, `) : `Not specified`,
    message: formData.get(`message`),
    date: new Date().toLocaleString(),
    timestamp: Date.now()
  };
  
  return submission;
}

// Function 13: Save form submission to localStorage
function saveFormSubmission(submissionData) {
  // Get existing submissions from localStorage
  let submissions = [];
  const storedData = localStorage.getItem(FORM_STORAGE_KEY);
  
  // Conditional branching
  if (storedData) {
    try {
      submissions = JSON.parse(storedData);
    } catch (error) {
      console.error(`Error parsing stored submissions:`, error);
      submissions = [];
    }
  }
  
  // Add new submission
  submissions.push(submissionData);
  
  // Save to localStorage
  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(submissions));
  
  // Also save a simplified version for messages display
  const messageData = {
    name: submissionData.name,
    message: submissionData.message,
    date: submissionData.date
  };
  
  saveMessage(messageData);
  
  console.log(`Form submission saved successfully!`);
}

// Function 14: Save message to messages localStorage
function saveMessage(messageData) {
  let messages = [];
  const storedMessages = localStorage.getItem(MESSAGE_STORAGE_KEY);
  
  if (storedMessages) {
    try {
      messages = JSON.parse(storedMessages);
    } catch (error) {
      console.error(`Error parsing stored messages:`, error);
      messages = [];
    }
  }
  
  messages.push(messageData);
  
  // Keep only last 10 messages
  if (messages.length > 10) {
    messages = messages.slice(-10);
  }
  
  localStorage.setItem(MESSAGE_STORAGE_KEY, JSON.stringify(messages));
}

// Function 15: Show success message
function showSuccessMessage() {
  const formContainer = document.querySelector(`.form-container form`);
  const successMessage = document.getElementById(`form-success`);
  
  // DOM modification
  if (formContainer && successMessage) {
    formContainer.style.display = `none`;
    successMessage.classList.remove(`hidden`);
  }
}

// Function 16: Setup success message close button
function setupSuccessClose() {
  const closeButton = document.getElementById(`close-success`);
  
  if (closeButton) {
    // Event listener
    closeButton.addEventListener(`click`, () => {
      const formContainer = document.querySelector(`.form-container form`);
      const successMessage = document.getElementById(`form-success`);
      
      // DOM modification
      if (formContainer && successMessage) {
        successMessage.classList.add(`hidden`);
        formContainer.style.display = `block`;
      }
    });
  }
}

// Function 17: Clear all form errors
function clearAllErrors() {
  const errorMessages = document.querySelectorAll(`.error-message`);
  const errorInputs = document.querySelectorAll(`.error`);
  
  // Clear error messages
  errorMessages.forEach(error => {
    error.textContent = ``;
  });
  
  // Remove error class from inputs
  errorInputs.forEach(input => {
    input.classList.remove(`error`);
    input.removeAttribute(`aria-invalid`);
  });
}

// Function 18: Load and display previous submissions
function loadPreviousSubmissions() {
  const submissionsDisplay = document.getElementById(`submissions-display`);
  
  if (submissionsDisplay) {
    const submissions = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY)) || [];
    
    // Conditional branching
    if (submissions.length === 0) {
      submissionsDisplay.innerHTML = `<p class="no-submissions">No submissions yet. Be the first to share your thoughts!</p>`;
    } else {
      // Array method (map)
      // Template literal
      const submissionsHTML = submissions.slice(-5).reverse().map(sub => `
        <div class="submission-item">
          <div class="submission-header">
            <span class="submission-name">${sub.name}</span>
            <span class="submission-date">${sub.date}</span>
          </div>
          <p><strong>Email:</strong> ${sub.email}</p>
          ${sub.phone && sub.phone !== `Not provided` ? `<p><strong>Phone:</strong> ${sub.phone}</p>` : ``}
          ${sub.visitStatus && sub.visitStatus !== `Not specified` ? `<p><strong>Visit Status:</strong> ${sub.visitStatus}</p>` : ``}
          ${sub.interests && sub.interests !== `Not specified` ? `<p><strong>Interests:</strong> ${sub.interests}</p>` : ``}
          <p><strong>Message:</strong> ${sub.message}</p>
        </div>
      `).join(``);
      
      // DOM modification
      submissionsDisplay.innerHTML = submissionsHTML;
    }
  }
}

// ===== INITIALIZATION =====
// Event listener
document.addEventListener(`DOMContentLoaded`, () => {
  initializeForm();
  loadPreviousSubmissions();
});
