// PDF.js Configuration
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// Global Variables
let currentPage = 0;
let totalPages = 0;
let pdfDoc = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeSectionToggle();
    initializeFAQ();
    initializePDFControls();
    loadPDF();
    disableRightClickOnPDF();
});

// ===== Navigation Menu Toggle =====
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ===== Section Navigation =====
function initializeSectionToggle() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionName = link.getAttribute('data-section');
            showSection(sectionName);
        });
    });

    // Show home section by default
    showSection('home');
}

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Show selected section
    const section = document.getElementById(sectionName);
    if (section) {
        section.classList.add('active');
    }

    // Update active nav link
    document.querySelector(`[data-section="${sectionName}"]`)?.classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

// ===== Scroll to Section Function =====
function scrollToSection(sectionName) {
    showSection(sectionName);
}

// ===== Smooth Scroll Helper =====
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.warn(`Element with ID "${elementId}" not found`);
    }
}

// ===== FAQ Accordion =====
function initializeFAQ() {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// ===== PDF Viewer Functionality =====
async function loadPDF() {
    try {
        // 📌 PDF SETUP INSTRUCTIONS:
        // ========================================
        // 1. Place your PDF file in the same directory as index.html
        //    Example: /exam-guide.pdf
        //
        // 2. Replace the line below with your PDF filename:
        //    const pdfPath = './your-pdf-file.pdf';
        //
        //    Examples:
        //    - const pdfPath = './exam-guide.pdf';
        //    - const pdfPath = './claude-certification.pdf';
        //    - const pdfPath = './study-material.pdf';
        //
        // 3. Make sure the PDF is in the same folder as index.html
        //
        // 4. If loading from URL:
        //    const pdfPath = 'https://example.com/path/to/your-file.pdf';
        // ========================================

        // Load the exam guide PDF file
        const pdfPath = './guide_en.pdf';

        pdfDoc = await pdfjsLib.getDocument(pdfPath).promise;
        totalPages = pdfDoc.numPages;
        document.getElementById('totalPages').textContent = totalPages;

        // Render first page
        renderPage(0);
    } catch (error) {
        console.error('Error loading PDF:', error);
        const canvas = document.getElementById('pdfCanvas');
        canvas.textContent = 'Error: Unable to load guide_en.pdf. Please ensure the file is in the same directory as index.html';
        canvas.style.padding = '2rem';
        canvas.style.display = 'flex';
        canvas.style.alignItems = 'center';
        canvas.style.justifyContent = 'center';
        canvas.style.minHeight = '400px';
        canvas.style.fontSize = '1.1rem';
        canvas.style.color = '#666';
    }
}

async function renderPage(pageNum) {
    if (!pdfDoc || pageNum < 0 || pageNum >= totalPages) return;

    currentPage = pageNum;

    try {
        const page = await pdfDoc.getPage(pageNum + 1);
        const canvas = document.getElementById('pdfCanvas');
        const context = canvas.getContext('2d');

        // Set scale for better quality
        const scale = 1.5;
        const viewport = page.getViewport({ scale: scale });

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };

        await page.render(renderContext).promise;

        // Update page info
        document.getElementById('currentPage').textContent = currentPage + 1;

        // Update button states
        document.getElementById('prevBtn').disabled = currentPage === 0;
        document.getElementById('nextBtn').disabled = currentPage === totalPages - 1;

    } catch (error) {
        console.error('Error rendering page:', error);
    }
}

function initializePDFControls() {
    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentPage > 0) {
            renderPage(currentPage - 1);
        }
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            renderPage(currentPage + 1);
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('pdf-viewer').offsetParent !== null) {
            if (e.key === 'ArrowLeft' && currentPage > 0) {
                renderPage(currentPage - 1);
            } else if (e.key === 'ArrowRight' && currentPage < totalPages - 1) {
                renderPage(currentPage + 1);
            }
        }
    });
}

// ===== Disable Download and Copy on PDF =====
function disableRightClickOnPDF() {
    const pdfViewer = document.querySelector('.pdf-viewer');

    pdfViewer.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showNotification('Download is disabled for this PDF');
    });

    // Prevent dragging
    document.getElementById('pdfCanvas').addEventListener('dragstart', (e) => {
        e.preventDefault();
    });

    // Disable keyboard shortcuts for saving
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
            if (document.getElementById('pdf-viewer').offsetParent !== null) {
                e.preventDefault();
                showNotification('Downloads are disabled');
            }
        }
    });
}

// ===== Notification System =====
function showNotification(message) {
    // Create notification element if it doesn't exist
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ef4444;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            z-index: 2000;
            animation: slideIn 0.3s ease;
        `;
        document.body.appendChild(notification);
    }

    notification.textContent = message;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Add animation for notification
if (!document.querySelector('style[data-notification]')) {
    const style = document.createElement('style');
    style.setAttribute('data-notification', 'true');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
}

// ===== Smooth Scroll Behavior =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== Open External Links =====
document.querySelectorAll('a[target="_self"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const url = link.getAttribute('href');
        window.location.href = url;
    });
});

// ===== Print Functionality =====
function printPage() {
    window.print();
}

// ===== Add CSS for notification animation =====
const addNotificationStyles = () => {
    if (!document.querySelector('style[data-slide-in]')) {
        const style = document.createElement('style');
        style.setAttribute('data-slide-in', 'true');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            @keyframes slideInMobile {
                from {
                    transform: translateY(-100%);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            @media (max-width: 640px) {
                #notification {
                    animation: slideInMobile 0.3s ease !important;
                    left: 20px !important;
                    right: 20px !important;
                }
            }
        `;
        document.head.appendChild(style);
    }
};

addNotificationStyles();

// ===== Prevent Console Access when PDF is opened =====
function protectPDFViewer() {
    // Note: This is basic protection. Real protection would require server-side measures
    if (document.getElementById('pdf-viewer').offsetParent !== null) {
        // Additional security measures could be added here
    }
}

// ===== Mobile Responsiveness Check =====
function handleResponsiveness() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Adjust PDF viewer height for mobile
        const pdfViewer = document.querySelector('.pdf-viewer');
        if (pdfViewer) {
            pdfViewer.style.minHeight = '300px';
        }
    }
}

window.addEventListener('resize', handleResponsiveness);
handleResponsiveness();

// ===== Loading State Management =====
function showLoadingState() {
    const canvas = document.getElementById('pdfCanvas');
    if (canvas) {
        canvas.style.opacity = '0.5';
    }
}

function hideLoadingState() {
    const canvas = document.getElementById('pdfCanvas');
    if (canvas) {
        canvas.style.opacity = '1';
    }
}

// ===== Export Functions for Easy Use =====
window.scrollToSection = scrollToSection;
window.printPage = printPage;
window.showNotification = showNotification;
window.smoothScrollTo = smoothScrollTo;

// ===== Session Storage for Settings =====
function saveUserSettings() {
    const settings = {
        lastSection: document.querySelector('.section.active').id,
        timestamp: new Date().toISOString()
    };
    sessionStorage.setItem('userSettings', JSON.stringify(settings));
}

function loadUserSettings() {
    const settings = JSON.parse(sessionStorage.getItem('userSettings'));
    if (settings && settings.lastSection) {
        showSection(settings.lastSection);
    }
}

// Save settings before leaving page
window.addEventListener('beforeunload', saveUserSettings);

// Initialize on page visible
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        loadUserSettings();
    }
});

// ===== Analytics-like Tracking (Optional) =====
function trackPageView(sectionName) {
    // This is where you could implement analytics
    console.log(`Viewed section: ${sectionName}`);
}

// Track section changes
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const sectionName = link.getAttribute('data-section');
        trackPageView(sectionName);
    });
});

console.log('✅ Website initialized successfully');
console.log('📚 Claude Certified Architect Foundations Exam Platform');
console.log('🔒 PDF viewing is protected');
