

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();


            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');


            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');

            let isValid = true;

            [name, email, message].forEach(el => {
                el.classList.remove('input-error');
                el.style.borderColor = '#222';
            });
            [nameError, emailError, messageError].forEach(el => el.innerText = '');


            if (name.value.trim() === "") {
                nameError.innerText = "Name is required";
                name.classList.add('input-error');
                isValid = false;
            }


            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                emailError.innerText = "Please enter a valid email address";
                email.classList.add('input-error');
                isValid = false;
            }


            if (message.value.trim().length < 10) {
                messageError.innerText = "Message must be at least 10 characters";
                message.classList.add('input-error');
                isValid = false;
            }


            if (isValid) {
                alert("Thank you! Your message has been sent successfully.");
                form.reset();
            }
        });
    }
});


const backToTopBtn = document.getElementById('backToTop');
const navWrapper = document.querySelector('.nav-wrapper');

window.addEventListener('scroll', function () {
    // 1. منطق ظهور زرار Back to Top
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }

    // 2. منطق الـ Navbar Scrolled (عشان الـ Blur اللي عملناه قبل كدة)
    if (navWrapper) {
        if (window.scrollY > 50) {
            navWrapper.classList.add('navbar-scrolled');
        } else {
            navWrapper.classList.remove('navbar-scrolled');
        }
    }
});

// تنفيذ الطلوع لفوق عند الضغط
backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const chatToggle = document.getElementById('chatToggleButton');
const chatCard = document.getElementById('chatCard');
const closeChat = document.getElementById('closeChat');
const chatInput = document.getElementById('chatInput');
const chatBody = document.getElementById('chatBody');
const sendBtn = document.getElementById('sendMessage');

if (chatToggle) {
    chatToggle.onclick = () => chatCard.classList.toggle('active');
    closeChat.onclick = () => chatCard.classList.remove('active');

    function sendMsg() {
        const text = chatInput.value;
        if (text.trim() === "") return;


        chatBody.innerHTML += `<div class="user-msg">${text}</div>`;
        chatInput.value = "";


        setTimeout(() => {
            let response = "I'm still learning, but I can tell you that Mostafa is a great developer!";
            if (text.toLowerCase().includes("hello")) response = "Hello! How can I help you today?";
            if (text.toLowerCase().includes("skills")) response = "Mostafa knows HTML, CSS, JS, and more!";

            chatBody.innerHTML += `<div class="bot-msg">${response}</div>`;
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }

    sendBtn.onclick = sendMsg;
    chatInput.onkeypress = (e) => { if (e.key === 'Enter') sendMsg(); };
}





document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');
    if (textElement) {
        const words = ["Mostafa", "A Web Developer", "Mostafa", "Frontend Developer"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 150;

        function type() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                textElement.innerText = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 80;
            } else {
                textElement.innerText = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 150;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typeSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 600;
            }
            setTimeout(type, typeSpeed);
        }
        type();
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const modals = document.querySelectorAll('.modal');

    modals.forEach(modal => {
        modal.addEventListener('hide.bs.modal', function () {
         
            const video = this.querySelector('video');
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });


        modal.addEventListener('show.bs.modal', function () {
            const video = this.querySelector('video');
            if (video) {
                video.load();
            }
        });
    });
});

window.addEventListener('scroll', function() {
    const navWrapper = document.querySelector('.nav-wrapper');
    if (window.scrollY > 50) {
        navWrapper.classList.add('navbar-scrolled');
    } else {
        navWrapper.classList.remove('navbar-scrolled');
    }
});
function toggleProjectVideo(overlay) {
    const container = overlay.parentElement;
    const video = container.querySelector('.project-video');
    
    container.classList.add('playing');
    video.play();
    video.muted = false;
    

    container.parentElement.parentElement.addEventListener('mouseleave', () => {
        container.classList.remove('playing');
        video.pause();
        video.currentTime = 0;
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const videoModal = document.getElementById('dynamicVideoModal');
    const videoPlayer = document.getElementById('mainVideoPlayer');
    const videoSource = videoPlayer.querySelector('source');


    videoModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget; //
        const videoFile = button.getAttribute('data-video'); // رابط الفيديو من الزرار

        videoSource.setAttribute('src', videoFile); // حط الرابط في المودال
        videoPlayer.load(); // حمل الفيديو الجديد
        videoPlayer.play(); // شغله فوراً
    });

    // أول ما تقفل المودال
    videoModal.addEventListener('hide.bs.modal', function () {
        videoPlayer.pause(); // وقف الفيديو
        videoSource.setAttribute('src', ''); // امسح الرابط عشان ميفضلش شغال في الخلفية
    });
});


// loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 2000); 
});
// page transition
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    const url = this.href;

    if (url && !url.includes("#")) {
      e.preventDefault();
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = url;
      }, 500);
    }
  });
});



window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");

    
    if (!sessionStorage.getItem("doNotShowLoader")) {
        
     
        setTimeout(() => {
            preloader.classList.add("loader-hidden");
            
            sessionStorage.setItem("doNotShowLoader", "true");
        }, 2500);

    } else {
        
        preloader.style.display = "none";
    }
});

window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");

    if (!sessionStorage.getItem("doNotShowLoader")) {
        setTimeout(() => {
            preloader.classList.add("loader-hidden");
            sessionStorage.setItem("doNotShowLoader", "true");
            
          
            startCounters(); 
            
        }, 2500); 
    } else {
        preloader.style.display = "none";
        
        startCounters();
    }
});


function startCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        counter.innerText = '0'; 
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 300; 
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 10); 
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}

const glassCard = document.querySelector('.glass-card');

glassCard.addEventListener('mousemove', (e) => {
   
    const rect = glassCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    
    glassCard.style.setProperty('--mouse-x', `${x}px`);
    glassCard.style.setProperty('--mouse-y', `${y}px`);
});


window.onscroll = function() {
    const nav = document.querySelector('.nav-wrapper');
    if (window.scrollY > 50) {
        nav.classList.add('navbar-scrolled');
    } else {
        nav.classList.remove('navbar-scrolled');
    }
};

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
   
    if (sessionStorage.getItem("visited")) {
        preloader.style.display = "none";
        return;
    }

    const percentText = document.querySelector('.loading-number');
    const progressFill = document.querySelector('.loader-progress-fill');
    let count = 0;

    const counter = setInterval(() => {
        count++;
        percentText.innerText = count + "%";
        progressFill.style.width = count + "%";

        if (count === 100) {
            clearInterval(counter);
            
            setTimeout(() => {
                preloader.classList.add('loader-hidden');
                
               
                sessionStorage.setItem("visited", "true");
                
               
                setTimeout(() => {
                    preloader.style.display = "none";
                }, 800); 
            }, 500);
        }
    }, 15); 
});






window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    if (sessionStorage.getItem("visited")) {
        preloader.style.display = "none";
        return;
    }

    const percentText = document.querySelector('.loading-number');
    const progressFill = document.querySelector('.loader-progress-fill');
    let count = 0;

    const counter = setInterval(() => {
        count++;
        if(percentText) percentText.innerText = count + "%";
        if(progressFill) progressFill.style.width = count + "%";

        if (count === 100) {
            clearInterval(counter);
            setTimeout(() => {
                preloader.classList.add('loader-hidden');
                sessionStorage.setItem("visited", "true");
                setTimeout(() => { preloader.style.display = "none"; }, 800);
            }, 500);
        }
    }, 20); 
});




