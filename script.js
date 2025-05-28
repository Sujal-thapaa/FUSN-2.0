
// Sample university data for demonstration
const sampleUniversities = [
    {
        id: 1,
        universityName: "Texas A&M Texarkana",
        state: "Texas",
        class10gpa: 3.35,
        class11gpa: 2.6,
        class12gpa: 3.21,
        satScore: null,
        englishTest: "Duolingo",
        englishScore: 105,
        coa: 22055,
        //Scholarship: $14000,
        //Tution_after_scholarship: $6970,
        i20Image: "/images/i-20-1.png",
        submissionDate: "2025-05-16",
        //Text:"Accepted with in 15days after sending transcript from .edu email Get i20 within 5 days"

      },
      {
        id: 2,
        universityName: "South Dakota state University",
        state: "South Dakota",
        class10gpa: 3.30,
        class11gpa: 2.65,
        class12gpa: 2.91,
        satScore: null,
        englishTest: "IELTS",
        englishScore: 6.5,
        coa: 24322,
        i20Image: "/images/i-20-2.png",
        submissionDate: "2025-05-15"
  
      },

      {
        id: 3,
        universityName: "Neumann University ",
        state: "Pennsylvania",
        class10gpa: 3.8,
        class11gpa: null,
        class12gpa: 3.38,
        satScore: 1360,
        englishTest: "IELTS",
        englishScore: 7.5,
        coa: 0,
        i20Image: "/images/i-20-3.png",
        submissionDate: "2025-05-15"
        //Text:"Enrollment fee - 300$ I20 after 1 month Application fee- ×× Friend I20"

 

      },
      {
        id: 4,
        universityName: "Dakota state university ",
        state: " South Dakota",
        class10gpa: 3.05,
        class11gpa: 3.37,
        class12gpa: 3.45,
        satScore: null,
        englishTest: "Dulingo",
        englishScore: 110,
        coa: 26000,
        i20Image: "/images/i-20-4.png",
        submissionDate: "2025-05-09"
        //Text:"i20sent:may6 and received today .Paid application fee $20"
        
      },
      {
        id: 5,
        universityName: "Texas A&M University - Texarkana ",
        state: "Texas",
        class10gpa: 3.30,
        class11gpa: 3.81,
        class12gpa: 3.62,
        satScore: null,
        englishTest: "IELTS",
        englishScore: 7.0,
        coa: 22055,
        i20Image: "/images/i-20-5.png",
        submissionDate: "2024-03-18"
        //Text:"VISA STATUS: APPROVED"
      },

     
      {
        id: 6,
        universityName: "Georgia State University",
        state: "Georgia",
        class10gpa: null,
        class11gpa: null,
        class12gpa: null,
        satScore: null,
        englishTest: "English Proficiency",
        englishScore: null,
        coa: 28560,
        i20Image: "/images/i-20-6.png",
        submissionDate: "2025-05-05"
      },
      {
        id: 7,
        universityName: "Louisiana Tech University ",
        state: "Louisiana",
        class10gpa: 2.45,
        class11gpa: 2.9,
        class12gpa: 3.2,
        satScore: null,
        englishTest: "English Proficiency",
        englishScore: null,
        coa: 21423,
        i20Image: "/images/i-20-7.png",
        submissionDate: "2025-04-26"
        //Text:"Got i20 on 1 month"

      },
      {
        id: 8,
        universityName: "Washington University of Science and Technology",
        state: "Virginia",
        class10gpa: 2.95,
        class11gpa: null,
        class12gpa: 2.76,
        satScore: null,
        englishTest: "IELTS",
        englishScore: 6,
        coa: 22310,
        i20Image: "/images/i-20-8.png",
        submissionDate: "2025-04-25"
        //Text: "No Application fee, Got i20 within 1 month"
      },
   
      {
        id: 9,
        universityName: "Avila University",
        state: "Missouri",
        class10gpa: 2.95,
        class11gpa: null,
        class12gpa: 2.76,
        satScore: null,
        englishTest: "IELTS",
        englishScore: 6,
        coa: 25706,
        i20Image: "/images/i-20-9.png",
        submissionDate: "2025-04-05"
      },
      {
        id: 10,
        universityName: "Louisiana Tech University",
        state: "Louisiana",
        class10gpa: 3.55,
        class11gpa: 3.29,
        class12gpa: 3.29,
        satScore: null,
        englishTest: "IELTS",
        englishScore: 7.0,
        coa: 21423,
        i20Image: "/images/i-20-10.png",
        submissionDate: "2025-04-22"
        //Text:"Application sent-march 20, I20 received-april 22(they actually sent me my i20 in april ,17 they said but malai ako thena ani they resent it in april 22) ,University -louisiana tech university ,Letsss gooo, Application fee:waived"
      },
      {
        id: 11,
        universityName: "St. Cloud State University",
        state: "Minnesota",
        class10gpa: null,
        class11gpa: null,
        class12gpa: 3.70,
        satScore: null,
        englishTest: "PTE",
        englishScore: 61,
        coa: 26569,
        i20Image: "/images/i-20-11.png",
        submissionDate: "2025-04-22"
        //Text:"Scholarship same for everyone .No need of application fee .,Major:Computer and information system ."
      },

      {
        id: 12,
        universityName: "University of Louisiana at Monroe",
        state: "Louisiana",
        class10gpa: 3.85,
        class11gpa: 3.71,
        class12gpa: 3.82,
        satScore: 1320,
        englishTest: "IELTS",
        englishScore: 7,
        coa: 14678,
        i20Image: "/images/i-20-11.png",
        submissionDate: "2025-04-22"
        //Text:"application fee: 30$ _____paid 10$ ,use SENIOR2025 TO GET 20$ DISCOUNT."
      }
   

    
    
  ];
  
// Initialize EmailJS
var emailjs = {
    init: function(userId) {
        // Placeholder for EmailJS initialization
        console.log("EmailJS initialized with user ID:", userId);
    },
    sendForm: function(serviceId, templateId, form) {
        return new Promise(function(resolve, reject) {
            // Placeholder for EmailJS sendForm function
            console.log("Sending email using service ID:", serviceId, "template ID:", templateId, "form:", form);
            setTimeout(function() {
                // Simulate success
                resolve({ status: 200, text: 'OK' });

                // Simulate failure
                // reject({ error: 'Simulated error' });
            }, 500);
        });
    }
};

(function() {
    emailjs.init("07nxNgZIMZg1EjJEV");
})();

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();

    // Initialize page-specific functionality
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    switch(currentPage) {
        case 'index.html':
        case '':
            initializeHomePage();
            break;
        case 'submit.html':
            initializeSubmitPage();
            break;
        case 'explore.html':
            initializeExplorePage();
            break;
    }
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Home page initialization
function initializeHomePage() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Submit page initialization
function initializeSubmitPage() {
    const form = document.getElementById('submissionForm');

    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }
}

// Form submission handler with EmailJS
function handleFormSubmission(event) {
    event.preventDefault();

    const form = event.target;
    const submitBtn = form.querySelector('.submit-btn');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    // Hide previous messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> Submitting...';
    submitBtn.disabled = true;

    // Validate required fields
    const class12gpa = form.querySelector('#class12gpa').value;
    const universityName = form.querySelector('#universityName').value;
    const i20Upload = form.querySelector('#i20Upload').files[0];
    const consent = form.querySelector('#consent').checked;

    if (!class12gpa || !universityName || !i20Upload || !consent) {
        showError('Please fill in all required fields.');
        resetSubmitButton(submitBtn, originalText);
        return;
    }

    // Send email using EmailJS
    emailjs.sendForm('service_0nzygde', 'template_k4enxm2', form)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showSuccess();
            form.reset();
        }, function(error) {
            console.log('FAILED...', error);
            showError('Failed to submit. Please try again.');
        })
        .finally(function() {
            resetSubmitButton(submitBtn, originalText);
        });
}

function showSuccess() {
    const successMessage = document.getElementById('successMessage');
    const form = document.getElementById('submissionForm');

    successMessage.style.display = 'block';
    form.style.display = 'none';

    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth' });
}

function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.querySelector('p').textContent = message;
    errorMessage.style.display = 'block';

    // Scroll to error message
    errorMessage.scrollIntoView({ behavior: 'smooth' });
}

function resetSubmitButton(button, originalText) {
    button.textContent = originalText;
    button.disabled = false;
}

// Explore page initialization
function initializeExplorePage() {
    const findButton = document.getElementById('findUniversities');

    if (findButton) {
        findButton.addEventListener('click', findMatchingUniversities);
    }
}

// Find matching universities based on user input
function findMatchingUniversities() {
    const searchClass10 = parseFloat(document.getElementById('searchClass10').value) || 0;
    const searchClass11 = parseFloat(document.getElementById('searchClass11').value) || 0;
    const searchClass12 = parseFloat(document.getElementById('searchClass12').value) || 0;
    const searchSAT = parseInt(document.getElementById('searchSAT').value) || 0;
    const searchEnglishType = document.getElementById('searchEnglishType').value;
    const searchEnglishScore = parseFloat(document.getElementById('searchEnglishScore').value) || 0;
    const selectedState = document.getElementById('stateFilter').value.trim().toLowerCase();

    const matchingUniversities = sampleUniversities.filter(university => {
        // ✅ Fix is here: matchesState must be checked *inside* filter
        const matchesState = selectedState === '' || university.state.toLowerCase() === selectedState;

        if (!matchesState) return false;
        if (searchClass12 > 0 && university.class12gpa > searchClass12) return false;
        if (searchSAT > 0 && (university.satScore === null || university.satScore > searchSAT)) return false;

        if (searchEnglishType && searchEnglishScore > 0) {
            if (university.englishTest === searchEnglishType && university.englishScore > searchEnglishScore) {
                return false;
            }
        }

        return true;
    });

    displayResults(matchingUniversities);
}


// Display search results
function displayResults(universities) {
    const resultsSection = document.getElementById('resultsSection');
    const resultsGrid = document.getElementById('resultsGrid');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');

    resultsSection.style.display = 'block';

    if (universities.length === 0) {
        resultsGrid.style.display = 'none';
        noResults.style.display = 'block';
        resultsCount.textContent = 'No results found';
        return;
    }

    resultsGrid.style.display = 'grid';
    noResults.style.display = 'none';
    resultsCount.textContent = `Found ${universities.length} matching ${universities.length === 1 ? 'university' : 'universities'}`;

    resultsGrid.innerHTML = universities.map(university => `
        <div class="university-card">
            <h4>${university.universityName}</h4>
            <div class="university-details">
                <p><strong>Class 12 GPA:</strong> ${university.class12gpa}</p>
                <p><strong>SAT Score:</strong> ${university.satScore}</p>
                <p><strong>English Test:</strong> ${university.englishTest} - ${university.englishScore}</p>
                <p><strong>COA:</strong> $${university.coa.toLocaleString()}</p>
            </div>
            <div class="i20-preview">
                <strong>I-20 Document:</strong>
                <br>
                <img src="${university.i20Image}" alt="I-20 Document" loading="lazy" onclick="showImage('${university.i20Image}')">
            </div>
            <div class="submission-date">
                Submitted: ${new Date(university.submissionDate).toLocaleDateString()}
            </div>
        </div>
    `).join('');

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Utility functions for form validation
function validateGPA(value) {
    const gpa = parseFloat(value);
    return !isNaN(gpa) && gpa >= 0 && gpa <= 4;
}

function validateSAT(value) {
    const sat = parseInt(value);
    return !isNaN(sat) && sat >= 400 && sat <= 1600;
}

function validateEnglishScore(testType, score) {
    const numScore = parseFloat(score);
    if (isNaN(numScore)) return false;

    switch(testType) {
        case 'IELTS':
            return numScore >= 0 && numScore <= 9;
        case 'TOEFL':
            return numScore >= 0 && numScore <= 120;
        case 'Duolingo':
            return numScore >= 10 && numScore <= 160;
        case 'PTE':
            return numScore >= 10 && numScore <= 90;
        default:
            return true;
    }
}

// Add real-time validation feedback
document.addEventListener('DOMContentLoaded', function() {
    // Add validation to GPA fields
    document.querySelectorAll('input[id*="gpa"]').forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !validateGPA(this.value)) {
                this.style.borderColor = '#e63946';
                showTooltip(this, 'GPA must be between 0 and 4');
            } else {
                this.style.borderColor = '#e9ecef';
                hideTooltip(this);
            }
        });
    });

    // Add validation to SAT fields
    document.querySelectorAll('input[id*="SAT"], input[id*="sat"]').forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !validateSAT(this.value)) {
                this.style.borderColor = '#e63946';
                showTooltip(this, 'SAT score must be between 400 and 1600');
            } else {
                this.style.borderColor = '#e9ecef';
                hideTooltip(this);
            }
        });
    });
});

function showTooltip(element, message) {
    // Remove existing tooltip
    hideTooltip(element);

    const tooltip = document.createElement('div');
    tooltip.className = 'validation-tooltip';
    tooltip.textContent = message;
    tooltip.style.cssText = `
        position: absolute;
        background: #e63946;
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 12px;
        z-index: 1000;
        margin-top: 5px;
        white-space: nowrap;
    `;

    element.parentNode.style.position = 'relative';
    element.parentNode.appendChild(tooltip);
}

function hideTooltip(element) {
    const tooltip = element.parentNode.querySelector('.validation-tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// Smooth animations for page elements
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.step-card, .usage-card, .benefit-card, .university-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', addScrollAnimations);

function showImage(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

