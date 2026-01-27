// ============ MOBILE NAVIGATION TOGGLE ============
// Yeh section mobile menu ko open aur close karne ke liye hai

// HTML document se 'navToggle' id wale element ko select kar rahe hain (yeh toggle button hai)
const navToggle = document.getElementById('navToggle');

// HTML document se 'navMenu' id wale element ko select kar rahe hain (yeh navigation menu hai)
const navMenu = document.getElementById('navMenu');

// navToggle button par click event listener laga rahe hain
navToggle.addEventListener('click', () => {
    // Jab button click ho, to navMenu me 'active' class ko toggle karo (add/remove)
    navMenu.classList.toggle('active');
    
    // navToggle button me bhi 'active' class ko toggle karo (animation ke liye)
    navToggle.classList.toggle('active');
});


// ============ MOBILE MENU KO BAND KARNA JAB LINK PAR CLICK HO ============
// Sabhi navigation links ko select kar rahe hain (class 'nav-link' wale elements)
const navLinks = document.querySelectorAll('.nav-link');

// Har ek link par loop chala rahe hain
navLinks.forEach(link => {
    // Har link par click event listener add kar rahe hain
    link.addEventListener('click', () => {
        // Jab koi link click ho, to menu se 'active' class remove karo (menu band ho jayega)
        navMenu.classList.remove('active');
        
        // Toggle button se bhi 'active' class remove karo (original state me aa jayega)
        navToggle.classList.remove('active');
    });
});



// ============ ELEMENT PAR ANIMATION ============
// 'element' id wale element ko select kar rahe hain
const element = document.getElementById('element');

// Jab mouse element ke upar aaye (mouseover), tab event trigger hoga
element.addEventListener('mouseover', () => {
    // Element ka size 1.1 guna bada kar do (10% bada hoga)
    element.style.transform = 'scale(1.1)';
});

// Jab mouse element se bahar jaye (mouseout), tab event trigger hoga
element.addEventListener('mouseout', () => {
    // Element ka size wapas normal (1) kar do
    element.style.transform = 'scale(1)';
});


// ============ SCROLL KARNE PAR ACTIVE NAVIGATION LINK ============
// Window par scroll event listener laga rahe hain
window.addEventListener('scroll', () => {
    // Saare sections ko select kar rahe hain (section tags)
    const sections = document.querySelectorAll('section');
    
    // Current scroll position nikaal rahe hain (window ka Y position + aadhi height)
    const scrollPos = window.scrollY + window.innerHeight / 2;

    // Har section par loop chala rahe hain
    sections.forEach(section => {
        // Section ka top position nikaal rahe hain (page ke top se kitni door hai)
        const sectionTop = section.offsetTop;
        
        // Section ki height nikaal rahe hain
        const sectionHeight = section.offsetHeight;
        
        // Section ka id attribute nikaal rahe hain
        const sectionId = section.getAttribute('id');

        // Check kar rahe hain ki scroll position section ke andar hai ya nahi
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            // Sabhi navigation links par loop chala rahe hain
            navLinks.forEach(link => {
                // Pehle sabhi links se 'active' class remove kar do
                link.classList.remove('active');
                
                // Check kar rahe hain ki link ka href current section se match karta hai ya nahi
                if (link.getAttribute('href') === `#${sectionId}`) {
                    // Agar match karta hai, to usi link me 'active' class add kar do
                    link.classList.add('active');
                }
            });
        }
    });
});


// ============ BACK TO TOP BUTTON ============
// 'backToTop' id wale button ko select kar rahe hain
const backToTopBtn = document.getElementById('backToTop');

// Window par scroll event listener laga rahe hain (button dikhane/chhupane ke liye)
window.addEventListener('scroll', () => {
    // Check kar rahe hain ki page 300 pixels se zyada scroll hui hai ya nahi
    if (window.scrollY > 300) {
        // Agar 300 pixels se zyada scroll hua hai, to button ko dikhao (flex display)
        backToTopBtn.style.display = 'flex';
    } else {
        // Agar 300 pixels se kam hai, to button ko chhupa do (none display)
        backToTopBtn.style.display = 'none';
    }
});

// Back to top button par click event listener laga rahe hain
backToTopBtn.addEventListener('click', () => {
    // Window ko page ke top par scroll karo
    window.scrollTo({
        top: 0, // Page ke sabse upar (0 position par)
        behavior: 'smooth' // Smooth scrolling effect ke saath
    });
});




// ============ PHONE NUMBER HIDE/SHOW FUNCTIONALITY ============
// Yeh section phone number ko hide aur show karne ke liye hai

// Phone number element ko select kar rahe Hu
const phoneNumber = document.getElementById('phoneNumber');

// Asli phone number (yeh hidden rahega)
const actualNumber = '+91 9064-635036';

// Masked phone number (yeh dikhega by default)
const maskedNumber = '+91 XXXX-XXXXXX';

// Phone number initially masked rakh hu
phoneNumber.textContent = maskedNumber;

// Click karne par phone number show/hide karne ke liye event listener laga rahe hu
phoneNumber.addEventListener('click', () => {
    // Agar current text masked hai, to asli number dikhao,masked matlab chhupa hua
    if (phoneNumber.textContent === maskedNumber) {
        phoneNumber.textContent = actualNumber;
        phoneNumber.style.color = 'var(--green)'; // Color change kar do (highlight ke liye)
    } else {
        // Agar asli number dikh raha hai, to wapas mask kar do
        phoneNumber.textContent = maskedNumber;
        phoneNumber.style.color = ''; // Original color me wapas lao
    }
});


// ============ END OF SCRIPT ============
