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
        aboutModal: document.getElementById('aboutModal'),
        categoryModal: document.getElementById('categoryModal')
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
    
    const categoryItems = document.querySelectorAll('.category-item');
    const categoryTitle = document.getElementById('categoryTitle');
    const categoryProducts = document.getElementById('categoryProducts');
    
    const productsByCategory = {
        sockets: [
            { name: 'Розетка Salvador черная', price: '1200 руб.', image: '/src/images/IMGP7632-copy-500x500.svg' },
            { name: 'Розетка Salvador белая', price: '1100 руб.', image: '/src/images/IMGP7632-copy-500x500.svg' },
            { name: 'Розетка Salvador медная', price: '1400 руб.', image: '/src/images/IMGP7632-copy-500x500.svg' }
        ],
        switches: [
            { name: 'Выключатель Ретро черный', price: '950 руб.', image: '/src/images/34024а.png' },
            { name: 'Выключатель Ретро белый', price: '900 руб.', image: '/src/images/34024а.png' },
            { name: 'Выключатель Ретро медный', price: '1100 руб.', image: '/src/images/34024а.png' }
        ],
        frames: [
            { name: 'Рамка деревянная темная', price: '750 руб.', image: '/src/images/IMGP2404-copy.png' },
            { name: 'Рамка деревянная светлая', price: '700 руб.', image: '/src/images/IMGP2404-copy.png' },
            { name: 'Рамка деревянная натуральная', price: '800 руб.', image: '/src/images/IMGP2404-copy.png' }
        ],
        boxes: [
            { name: 'Коробка распаечная круглая', price: '450 руб.', image: '/src/images/330-СК.png' },
            { name: 'Коробка распаечная квадратная', price: '500 руб.', image: '/src/images/330-СК.png' },
            { name: 'Коробка распаечная угловая', price: '550 руб.', image: '/src/images/330-СК.png' }
        ],
        insulators: [
            { name: 'Изолятор кабельный белый', price: '350 руб.', image: '/src/images/IMGP7888-copy-500x500.png' },
            { name: 'Изолятор кабельный черный', price: '350 руб.', image: '/src/images/IMGP7888-copy-500x500.png' },
            { name: 'Изолятор кабельный коричневый', price: '380 руб.', image: '/src/images/IMGP7888-copy-500x500.png' }
        ],
        wires: [
            { name: 'Провод витой белый', price: '150 руб./м', image: '/src/images/проводда.png' },
            { name: 'Провод витой черный', price: '150 руб./м', image: '/src/images/проводда.png' },
            { name: 'Провод витой коричневый', price: '170 руб./м', image: '/src/images/проводда.png' }
        ],
        accessories: [
            { name: 'Клеммы соединительные', price: '200 руб.', image: '/src/images/аксессуары.png' },
            { name: 'Подрозетники деревянные', price: '300 руб.', image: '/src/images/аксессуары.png' },
            { name: 'Крепежные элементы', price: '150 руб.', image: '/src/images/аксессуары.png' }
        ],
        lamps: [
            { name: 'Лампа Эдисона E27', price: '650 руб.', image: '/src/images/A60F2C-500x500.png' },
            { name: 'Лампа Эдисона E14', price: '550 руб.', image: '/src/images/A60F2C-500x500.png' },
            { name: 'Лампа Эдисона декоративная', price: '850 руб.', image: '/src/images/A60F2C-500x500.png' }
        ]
    };
    
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.getAttribute('data-category');
            const categoryName = item.querySelector('h3').textContent;
            
            categoryTitle.textContent = categoryName;
            
            categoryProducts.innerHTML = '';
            
            const products = productsByCategory[category] || [];
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'bg-white p-4 rounded shadow-sm';
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="w-full h-32 object-contain mb-4">
                    <h3 class="font-bold">${product.name}</h3>
                    <p class="text-gray-600">${product.price}</p>
                    <button class="mt-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-4 py-1 rounded-full text-sm">В корзину</button>
                `;
                categoryProducts.appendChild(productElement);
            });
            
            modals.categoryModal.style.display = 'block';
        });
    });
});