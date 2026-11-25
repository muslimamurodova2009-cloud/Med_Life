let cards = document.querySelectorAll(".card");
        
        let lines = document.querySelectorAll(".slider-lines .line");

        let chap = document.getElementById("chapga");
        let ong = document.getElementById("ongga");

        let index = 0;

        // Cardlarni almashtiruvchi funksiya
        function showCard(){
            
            // Barcha cardlardan active class olish uchun
            cards.forEach(function(card){
                card.classList.remove("active");
            });

            // Barcha chiziqlardan active class olish uchun
            lines.forEach(function(line){
                line.classList.remove("active");
            });

            // Tanlangan cardga active class qoshish
            cards[index].classList.add("active");

            // Tanlangan chiziqqa active class qoshish 
            lines[index].classList.add("active");

        }

        // Keyingi card

        chap.addEventListener("click", function(){
            index = index + 1;

            if(index >= cards.length){
                index = 0;
            }

            showCard();
        });

        ong.addEventListener("click", function(){
            index--;

            if(index < 0){
                index = cards.length -1
            }

            showCard();
        })

        // Chiziqlarni bosganda almashtirish
        lines.forEach(function(line, i){
            line.addEventListener("click", function(){
                index = i;
                showCard();
            });
        });

        setInterval(function(){
            index++;

            if(index >= cards.length){
                index = 0;
            }

            showCard();
        }, 5000)



        // Navbar uchun

        let navbar = document.getElementById("navbar");

        window.addEventListener("scroll", function(){
            if(window.scrollY > 50){
                navbar.classList.add("active");
            }else{
                navbar.classList.remove("active");
            }
        })

        let topBtn = document.getElementById("topBtn");

        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                topBtn.style.display = "block"
            }else{
                topBtn.style.display = "none"
            }
        })

        topBtn.addEventListener("click", function(){
            window.scrollTo({
                top:0,
                behavior:"smooth"

            })
        })

        let nav2 = document.getElementById("nav2");
        let btn = document.getElementById("btn");

        btn.addEventListener("click", function(){
            nav2.classList.toggle("activ");
        })

        const sectionlar = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-link");


        const kuzatuvchi = new IntersectionObserver((entries) => {
            entries.forEach(entry =>{
                if(entry.isIntersecting){
                    navLinks.forEach(link =>{
                        link.classList.remove("active");
                    });

                    const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);

                    if(activeLink){
                        activeLink.classList.add("active");
                    }
                }
            });
        }, {threshold: 0.5});

        sectionlar.forEach(section =>{
            kuzatuvchi.observe(section)
        })


const openVideo = document.getElementById("openVideo");
const closeVideo = document.getElementById("closeVideo");
const videoModal = document.getElementById("videoModal");
const aboutVideo = document.getElementById("aboutvideo");

openVideo.addEventListener("click", () => {
    videoModal.hidden = false;
});

function closeVideoModal() {
    videoModal.hidden = true;
}

closeVideo.addEventListener("click", closeVideoModal);

videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) {
        closeVideoModal();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !videoModal.hidden) {
        closeVideoModal();
    }
});