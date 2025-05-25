const selectedState = document.getElementById('stateFilter').value.trim().toLowerCase();
const matchesState = selectedState === '' || university.state.toLowerCase() === selectedState;


// Sample university data for demonstration
const sampleUniversities = [

    {
        id: 1,
        universityName: "Arizona State University",
        class10gpa: 3.5,
        class11gpa: 3.6,
        class12gpa: 3.7,
        satScore: 1200,
        englishTest: "IELTS",
        englishScore: 6.5,
        coa: 35000,
        i20Image: "i20_1.png",
        submissionDate: "2024-01-15"
    },
    {
        id: 2,
        universityName: "University of Central Florida",
        class10gpa: 3.4,
        class11gpa: 3.5,
        class12gpa: 3.6,
        satScore: 1250,
        englishTest: "TOEFL",
        englishScore: 85,
        coa: 38000,
        i20Image: "/placeholder.svg?height=200&width=300",
        submissionDate: "2024-01-20"
    },
    {
        id: 3,
        universityName: "San Jose State University",
        class10gpa: 3.6,
        class11gpa: 3.7,
        class12gpa: 3.8,
        satScore: 1300,
        englishTest: "Duolingo",
        englishScore: 115,
        coa: 42000,
        i20Image: "/placeholder.svg?height=200&width=300",
        submissionDate: "2024-02-01"
    },
    {
        id: 4,
        universityName: "University of Houston",
        class10gpa: 3.3,
        class11gpa: 3.4,
        class12gpa: 3.5,
        satScore: 1180,
        englishTest: "PTE",
        englishScore: 65,
        coa: 33000,
        i20Image: "/placeholder.svg?height=200&width=300",
        submissionDate: "2024-02-10"
    },
    {
        id: 5,
        universityName: "Florida International University",
        class10gpa: 3.2,
        class11gpa: 3.3,
        class12gpa: 3.4,
        satScore: 1150,
        englishTest: "IELTS",
        englishScore: 6.0,
        coa: 31000,
        i20Image: "/placeholder.svg?height=200&width=300",
        submissionDate: "2024-02-15"
    },
    {
        id: 6,
        universityName: "George Mason University",
        class10gpa: 3.7,
        class11gpa: 3.8,
        class12gpa: 3.9,
        satScore: 1350,
        englishTest: "TOEFL",
        englishScore: 95,
        coa: 45000,
        i20Image: "/placeholder.svg?height=200&width=300",
        submissionDate: "2024-02-20"
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

    // Filter universities based on criteria
    const matchingUniversities = sampleUniversities.filter(university => {
        // University requirements should be <= user's scores
        let matches = true;

        if (searchClass12 > 0 && university.class12gpa > searchClass12) {
            matches = false;
        }

        if (searchSAT > 0 && university.satScore > searchSAT) {
            matches = false;
        }

        if (searchEnglishType && searchEnglishScore > 0) {
            if (university.englishTest === searchEnglishType && university.englishScore > searchEnglishScore) {
                matches = false;
            }
        }

        return matches;
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