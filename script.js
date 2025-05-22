document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link (optional)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation on scroll (optional)
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.hero-content, .hero-image').forEach(el => {
        observer.observe(el);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.progress').forEach(progress => {
                    const width = progress.style.width;
                    progress.style.width = '0';
                    setTimeout(() => {
                        progress.style.width = width;
                    }, 100);
                });
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }
});

// Add this to your existing IntersectionObserver code
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillCards = document.querySelectorAll('.skill-card');
            skillCards.forEach(card => {
                card.style.animationPlayState = 'running';
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

const skillsSection = document.querySelector('.skills-cards');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}
// Projects Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Animation on scroll
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                projectObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        projectObserver.observe(card);
    });
});
// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll just log it and show an alert
            console.log({ name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
            
            // In a real implementation, you would use:
            // fetch('/send-email', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ name, email, subject, message })
            // })
            // .then(response => response.json())
            // .then(data => {
            //     alert('Message sent successfully!');
            //     contactForm.reset();
            // })
            // .catch(error => {
            //     alert('Error sending message. Please try again.');
            // });
        });
    }

    // Animation for contact section
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.contact-info').classList.add('animate');
                entry.target.querySelector('.contact-form').classList.add('animate');
                contactObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const contactSection = document.querySelector('.contact');
    if (contactSection) {
        contactObserver.observe(contactSection);
    }
});
// Update copyright year automatically
document.addEventListener('DOMContentLoaded', function() {
    // Copyright year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            // Here you would typically send the email to your newsletter service
            console.log('Subscribed with:', email);
            alert('Thank you for subscribing!');
            this.reset();
        });
    }

    // Footer animation
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                footerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const footer = document.querySelector('.footer');
    if (footer) {
        footerObserver.observe(footer);
    }
});


// Text Rotator Animation
class TextRotator {
    constructor(element) {
        this.element = element;
        this.period = parseInt(element.getAttribute('data-period'), 2000) || 2000;
        this.rotateText = JSON.parse(element.getAttribute('data-rotate')) || [];
        this.loopNum = 0;
        this.txt = '';
        this.isDeleting = false;
        this.tick();
    }
    
    tick() {
        const i = this.loopNum % this.rotateText.length;
        const fullTxt = this.rotateText[i];
        
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        
        this.element.textContent = this.txt;
        
        let delta = 200 - Math.random() * 100;
        
        if (this.isDeleting) {
            delta /= 2;
        }
        
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        
        setTimeout(() => this.tick(), delta);
    }
}

// Initialize animations when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize text rotator
    const rotateElements = document.querySelectorAll('.text-rotate');
    rotateElements.forEach(element => new TextRotator(element));
    
    // Add animation class to trigger CSS animations
    setTimeout(() => {
        document.querySelector('.animated-text').classList.add('animate');
        document.querySelector('.name-animate').classList.add('animate');
    }, 100);
});