document.addEventListener('DOMContentLoaded', function() {
            const carousel = document.getElementById('carousel');
            const slides = document.querySelectorAll('.carousel-slide');
            const indicators = document.querySelectorAll('.indicator');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            let currentIndex = 0;
            const slideCount = slides.length;

            function updateCarousel() {
                carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                indicators.forEach((indicator, index) => {
                    if (index === currentIndex) {
                        indicator.classList.remove('bg-white/50');
                        indicator.classList.add('bg-white');
                    } else {
                        indicator.classList.remove('bg-white');
                        indicator.classList.add('bg-white/50');
                    }
                });
            }

            function nextSlide() {
                currentIndex = (currentIndex + 1) % slideCount;
                updateCarousel();
            }

            function prevSlide() {
                currentIndex = (currentIndex - 1 + slideCount) % slideCount;
                updateCarousel();
            }

            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
            
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    currentIndex = index;
                    updateCarousel();
                });
            });

            setInterval(nextSlide, 5000);

            const testimonialCarousel = document.getElementById('testimonialCarousel');
            const testimonialSlides = document.querySelectorAll('.testimonial-slide');
            const testimonialIndicators = document.querySelectorAll('.testimonial-indicator');
            const prevTestimonialBtn = document.getElementById('prevTestimonialBtn');
            const nextTestimonialBtn = document.getElementById('nextTestimonialBtn');
            let currentTestimonialIndex = 0;
            const testimonialSlideCount = testimonialSlides.length;

            function updateTestimonialCarousel() {
                testimonialCarousel.style.transform = `translateX(-${currentTestimonialIndex * 100}%)`;
                
                testimonialIndicators.forEach((indicator, index) => {
                    if (index === currentTestimonialIndex) {
                        indicator.classList.remove('bg-gray-300');
                        indicator.classList.add('bg-amber-500');
                    } else {
                        indicator.classList.remove('bg-amber-500');
                        indicator.classList.add('bg-gray-300');
                    }
                });
            }

            function nextTestimonialSlide() {
                currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialSlideCount;
                updateTestimonialCarousel();
            }

            function prevTestimonialSlide() {
                currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialSlideCount) % testimonialSlideCount;
                updateTestimonialCarousel();
            }

            nextTestimonialBtn.addEventListener('click', nextTestimonialSlide);
            prevTestimonialBtn.addEventListener('click', prevTestimonialSlide);
            
            testimonialIndicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    currentTestimonialIndex = index;
                    updateTestimonialCarousel();
                });
            });

            setInterval(nextTestimonialSlide, 7000);

            const modals = {
                callbackModal: document.getElementById('callbackModal'),
                cartModal: document.getElementById('cartModal'),
                wishlistModal: document.getElementById('wishlistModal'),
                profileModal: document.getElementById('profileModal'),
                catalogModal: document.getElementById('catalogModal'),
                aboutModal: document.getElementById('aboutModal')
            };

            const modalTriggers = {
                callbackBtn: document.getElementById('callbackBtn'),
                cartBtn: document.getElementById('cartBtn'),
                wishlistBtn: document.getElementById('wishlistBtn'),
                profileBtn: document.getElementById('profileBtn'),
                catalogBtn: document.getElementById('catalogBtn'),
                aboutBtn: document.getElementById('aboutBtn')
            };

            const closeButtons = document.querySelectorAll('.close');

            for (const [modalId, trigger] of Object.entries(modalTriggers)) {
                if (trigger) {
                    trigger.addEventListener('click', function(e) {
                        e.preventDefault();
                        modals[modalId].style.display = 'block';
                    });
                }
            }

            closeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    for (const modal of Object.values(modals)) {
                        modal.style.display = 'none';
                    }
                });
            });

            window.addEventListener('click', function(event) {
                for (const [modalId, modal] of Object.entries(modals)) {
                    if (event.target === modal) {
                        modal.style.display = 'none';
                    }
                }
            });
        });