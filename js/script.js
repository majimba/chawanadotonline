document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Header scroll effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.remove('header-transparent');
            header.classList.add('header-solid');
        } else {
            header.classList.remove('header-solid');
            header.classList.add('header-transparent');
        }
    });

    // Hero background is now static for better stability

    // Scroll-triggered fade-in animations
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenu = document.getElementById('close-mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('-translate-y-full');
    });

    closeMobileMenu.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-y-full');
    });

    // Close menu when clicking a link
    mobileMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            mobileMenu.classList.add('-translate-y-full');
        }
    });

    // Mission Statement Modal
    const missionBtn = document.getElementById('mission-statement-btn');
    const missionModal = document.getElementById('mission-modal');
    const closeMissionModal = document.getElementById('close-mission-modal');

    missionBtn.addEventListener('click', () => {
        missionModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    closeMissionModal.addEventListener('click', () => {
        missionModal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    // Close modal when clicking outside
    missionModal.addEventListener('click', (e) => {
        if (e.target === missionModal) {
            missionModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !missionModal.classList.contains('hidden')) {
            missionModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    // Contact Options Modal
    const contactBtn = document.getElementById('contact-options-btn');
    const navContactBtn = document.getElementById('nav-contact-btn');
    const mobileContactBtn = document.getElementById('mobile-contact-btn');
    const workWithMeBtn = document.getElementById('work-with-me-btn');
    const becomePartnerBtn = document.getElementById('become-partner-btn');
    const contactModal = document.getElementById('contact-modal');
    const closeContactModal = document.getElementById('close-contact-modal');

    // Function to open contact modal
    function openContactModal() {
        contactModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Trigger animation
        setTimeout(() => {
            const modalContent = document.getElementById('contact-modal-content');
            modalContent.classList.remove('scale-95', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
        }, 10);
    }

    // Add event listeners to all contact buttons
    contactBtn.addEventListener('click', openContactModal);
    navContactBtn.addEventListener('click', openContactModal);
    mobileContactBtn.addEventListener('click', () => {
        // Close mobile menu first, then open contact modal
        mobileMenu.classList.add('-translate-y-full');
        openContactModal();
    });
    workWithMeBtn.addEventListener('click', openContactModal);
    becomePartnerBtn.addEventListener('click', openContactModal);

    closeContactModal.addEventListener('click', () => {
        const modalContent = document.getElementById('contact-modal-content');
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');
        
        setTimeout(() => {
            contactModal.classList.add('hidden');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }, 300);
    });

    // Close contact modal when clicking outside
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            const modalContent = document.getElementById('contact-modal-content');
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                contactModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300);
        }
    });

    // Close contact modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !contactModal.classList.contains('hidden')) {
            const modalContent = document.getElementById('contact-modal-content');
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                contactModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300);
        }
    });
});
