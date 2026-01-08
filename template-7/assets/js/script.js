function repositionWidget(){let e=document.querySelector("#launcher"),t=window.matchMedia("(max-width:768px)").matches?"60px":"50px";if(e){e.style.setProperty("bottom",t,"important"),e.style.setProperty("left","5px","important"),e.style.setProperty("right","auto","important"),e.style.setProperty("transform","none","important");let n=document.querySelector("iframe[title*='Chat']");n&&n.parentElement&&(n.parentElement.style.setProperty("bottom",t,"important"),n.parentElement.style.setProperty("left","5px","important"),n.parentElement.style.setProperty("right","auto","important"))}}function forceRepositioning(){let e=window.matchMedia("(max-width:768px)").matches?"50px":"60px";["#launcher","[data-testid='launcher']",".zEWidget-launcher","iframe[title*='Chat']"].forEach(t=>{let n=document.querySelector(t);if(n){let r=n.parentElement||n;r.style.setProperty("bottom",e,"important"),r.style.setProperty("left","5px","important"),r.style.setProperty("right","auto","important"),r.style.setProperty("transform","none","important")}})}function loadZeSnippet(){setTimeout(function(){var e=document.createElement("script");e.id="ze-snippet",e.src="https://static.zdassets.com/ekr/snippet.js?key=94b386d0-0e8f-40fe-b5ff-a939cb332fbc",document.head.appendChild(e),e.onload=function(){var e=setInterval(function(){if("undefined"!=typeof zE&&document.querySelector("#launcher")&&(clearInterval(e),repositionWidget(),zE("webWidget:on","open",function(){setTimeout(repositionWidget,100)}),zE("webWidget:on","close",function(){setTimeout(repositionWidget,100),setTimeout(forceRepositioning,500)}),zE("webWidget:on","minimize",function(){setTimeout(repositionWidget,100),setTimeout(forceRepositioning,500)}),zE("webWidget:on","maximize",function(){setTimeout(repositionWidget,100)}),zE("webWidget:on","launcherClick",function(){setTimeout(repositionWidget,100)}),setInterval(forceRepositioning,2e3),window.MutationObserver)){let t=new MutationObserver(function(e){e.forEach(function(e){"attributes"!==e.type||"style"!==e.attributeName&&"class"!==e.attributeName||setTimeout(repositionWidget,50)})});setTimeout(function(){let e=document.querySelector("#launcher");e&&(t.observe(e,{attributes:!0,subtree:!0}),e.parentElement&&t.observe(e.parentElement,{attributes:!0,subtree:!0}))},1e3)}},100)}},4e3)}function toggleTab(e){document.querySelectorAll('.tab input[type="checkbox"]').forEach(function(t){t.id!==e&&(t.checked=!1)})}function addPersistentCSS(){let e=document.createElement("style");e.textContent="\n        #launcher,\n        [data-testid='launcher'],\n        .zEWidget-launcher {\n            bottom: 50px !important;\n            left: 5px !important;\n            right: auto !important;\n            transform: none !important;\n        }\n        \n        /* Target the iframe container as well */\n        iframe[title*=\"Chat\"] {\n            position: fixed !important;\n            bottom: 50px !important;\n            left: 5px !important;\n            right: auto !important;\n        }\n\n        @media (max-width:768px) {\n            #launcher,\n        [data-testid='launcher'],\n        .zEWidget-launcher {\n            bottom: 60px !important;\n            left: 5px !important;\n            right: auto !important;\n            transform: none !important;\n        }\n        \n        /* Target the iframe container as well */\n        iframe[title*=\"Chat\"] {\n            position: fixed !important;\n            bottom: 60px !important;\n            left: 5px !important;\n            right: auto !important;\n        }\n        }\n    ",document.head.appendChild(e)}

// document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("hamburger"),t=document.getElementById("sidebar");e.addEventListener("click",()=>{t.classList.add("openSidebar")});document.getElementById("sidebar-close").addEventListener("click",()=>{t.classList.remove("openSidebar")});document.querySelectorAll(".nav-item").forEach(e=>{e.addEventListener("click",n=>{n.preventDefault(),document.getElementById(e.getAttribute("href").substring(1)).scrollIntoView({behavior:"smooth"}),t.classList.remove("openSidebar")})}),document.querySelectorAll(".downloadBrochure").forEach(e=>{e.addEventListener("click",()=>{t.classList.remove("openSidebar")})});let a=document.querySelectorAll(".readMoreBtn"),s=document.querySelectorAll(".clampText");a.forEach((e,t)=>{e.addEventListener("click",n=>{n.preventDefault(),"block"==s[t].style.display?(s[t].style.display="-webkit-box",s[t].style.webkitLineClamp="4",e.innerHTML="Read More ",s[t].scrollIntoView({behavior:"smooth"})):(s[t].style.display="block",s[t].style.webkitLineClamp="unset",e.innerHTML="Read Less ")})});let c=document.querySelector(".body"),d=document.querySelectorAll(".amenitiesCard img"),p=document.querySelector(".amenitiesSlide"),u=document.querySelectorAll(".amenities-description"),m=d.length-1,y=0,f=0,g=!1,v=setInterval(b,5e3);function h(){return window.innerWidth<769?105:35}function E(){return window.innerWidth<769?m+1:m-1}function L(){p.style.transform=`translateX(-${y*h()}%)`}function b(){L(),y=(y+1)%E()}function S(){clearInterval(v),v=setInterval(b,3e3)}d.forEach((e,t)=>{e.addEventListener("mouseenter",()=>clearInterval(v)),e.addEventListener("mouseout",e=>{e.preventDefault(),g||(v=setInterval(b,5e3))}),e.addEventListener("click",()=>{document.getElementById("amenities-overlay").style.display="block",document.getElementById("amenities-popupimage").src=e.src,g=!0,f=t,clearInterval(v),document.querySelector(".amenities-popup-text").innerHTML=u[f].innerHTML,c.classList.add("noscroll")}),e.addEventListener("touchstart",()=>{},{passive:!0})}),document.querySelector(".amenities-popup-close").addEventListener("click",e=>{e.preventDefault(),document.getElementById("amenities-overlay").style.display="none",document.getElementById("amenities-popupimage").src="",g=!1,v=setInterval(b,5e3),c.classList.remove("noscroll")}),document.getElementById("amenities_prevBtn").addEventListener("click",()=>{f=(f-1+d.length)%d.length,document.getElementById("amenities-popupimage").src=d[f].src,document.querySelector(".amenities-popup-text").innerHTML=u[f].innerHTML}),document.getElementById("amenities_nextBtn").addEventListener("click",()=>{f=(f+1)%d.length,document.getElementById("amenities-popupimage").src=d[f].src,document.querySelector(".amenities-popup-text").innerHTML=u[f].innerHTML}),document.querySelector(".amenities_prevBtn").addEventListener("click",e=>{e.preventDefault(),y=(y-1+E())%E(),L(),S()}),document.querySelector(".amenities_nextBtn").addEventListener("click",()=>{y=(y+1)%E(),L(),S()}),window.addEventListener("resize",()=>{L()});let $=document.querySelectorAll(".galleryCard img"),q=document.querySelector(".gallerySlide"),_=$.length-1,k=0,x=0,B=!1,w=setInterval(C,5e3);function W(){return window.innerWidth<769?105:35}function I(){return window.innerWidth<769?_+1:_-1}function A(){q.style.transform=`translateX(-${k*W()}%)`}function C(){A(),k=(k+1)%I()}function M(){clearInterval(w),w=setInterval(C,3e3)}function P(){document.querySelector(".popup-overlay").style.display="none",c.classList.remove("noscroll"),document.querySelectorAll(".payment-table-container").forEach(e=>{e.classList.contains("show-full")&&e.classList.remove("show-full")})}function T(){document.querySelector(".popup-overlay").style.display="block",c.classList.add("noscroll")}$.forEach((e,t)=>{e.addEventListener("mouseenter",()=>clearInterval(w)),e.addEventListener("mouseout",()=>{B||(w=setInterval(C,5e3))}),e.addEventListener("click",()=>{document.getElementById("gallery-overlay").style.display="block",document.getElementById("gallery-popupimage").src=e.src,B=!0,x=t,clearInterval(w),c.classList.add("noscroll")})}),document.querySelector(".gallery-popup-close").addEventListener("click",e=>{e.preventDefault(),document.getElementById("gallery-overlay").style.display="none",document.getElementById("gallery-popupimage").src="",B=!1,w=setInterval(C,5e3),c.classList.remove("noscroll")}),document.getElementById("gallery_prevBtn").addEventListener("click",()=>{x=(x-1+$.length)%$.length,document.getElementById("gallery-popupimage").src=$[x].src}),document.getElementById("gallery_nextBtn").addEventListener("click",()=>{x=(x+1)%$.length,document.getElementById("gallery-popupimage").src=$[x].src}),document.querySelector(".gallery_prevBtn").addEventListener("click",e=>{e.preventDefault(),k=(k-1+I())%I(),A(),M()}),document.querySelector(".gallery_nextBtn").addEventListener("click",()=>{k=(k+1)%I(),A(),M()}),window.addEventListener("resize",e=>{e.preventDefault(),A()}),document.querySelector(".popupform-close").addEventListener("click",()=>{P()}),document.querySelectorAll(".popup-trigger").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),document.querySelector("#popupform-heading").innerHTML=e.getAttribute("data-heading"),T()})}),window.addEventListener("load",e=>{e.preventDefault(),setTimeout(()=>{T()},4e3)});let z=document.querySelectorAll(".accordion-content"),D=document.querySelectorAll(".mobile-accordionBtn"),H=document.querySelectorAll(".accordion-arrow");function R(e){if(D[e].classList.contains("accordion-active")){D[e].classList.remove("accordion-active"),z[e].classList.remove("contentactive"),H[e].classList.remove("accordion-arrow-active");return}for(let t=0;t<D.length;t++)D[t].classList.remove("accordion-active"),z[t].classList.remove("contentactive"),H[t].classList.remove("accordion-arrow-active");D[e].classList.contains("accordion-active")||(D[e].classList.add("accordion-active"),z[e].classList.add("contentactive"),H[e].classList.add("accordion-arrow-active"))}D.forEach((e,t)=>{e.addEventListener("click",()=>{R(t)})});let X=document.querySelectorAll(".floorCard img"),N=document.querySelector(".floorSlide"),O=X.length-1,V=0,Z=setInterval(J,5e3);function j(){return window.innerWidth<768?105:0}function F(){return window.innerWidth<768?O+1:O-1}function G(){N.style.transform=`translateX(-${V*j()}%)`}function J(){G(),V=(V+1)%F()}function K(){clearInterval(Z),Z=setInterval(J,5e3)}document.querySelector(".floor_prevBtn").addEventListener("click",()=>{V=(V-1+F())%F(),G(),K()}),document.querySelector(".floor_nextBtn").addEventListener("click",()=>{V=(V+1)%F(),G(),K()}),window.addEventListener("resize",()=>(G(),window.innerWidth<768?K():clearInterval(Z))),document.querySelectorAll(".paymentEnquireBtn").forEach((e,t)=>{e.addEventListener("click",()=>{document.querySelectorAll(".payment-table-container")[t].classList.add("show-full")})})});

 let n=setInterval(l,5e3),r=document.querySelectorAll(".bannerImage"),i=document.querySelector(".bannerSlides"),o=0;function l(){i.style.transform=`translateX(-${100*o}%)`,(o+=1)>r.length-1&&(o=0)}document.querySelector(".bannerPrev").addEventListener("click",()=>{o=(o-1+r.length)%r.length,i.style.transform=`translateX(-${100*o}%)`,clearInterval(n),n=setInterval(l,5e3)}),document.querySelector(".bannerNext").addEventListener("click",()=>{o=(o+1)%r.length,i.style.transform=`translateX(-${100*o}%)`,clearInterval(n),n=setInterval(l,5e3)});

addPersistentCSS(),loadZeSnippet(),window.addEventListener("resize",repositionWidget);

document.addEventListener("DOMContentLoaded", () => {
    let e = document.getElementById("hamburger"),
        t = document.getElementById("sidebar");
    e.addEventListener("click", () => {
        t.classList.add("openSidebar");
    });
    document.getElementById("sidebar-close").addEventListener("click", () => {
        t.classList.remove("openSidebar");
    });
    document.querySelectorAll(".nav-item").forEach((e) => {
        e.addEventListener("click", (n) => {
            // n.preventDefault(),
                document.getElementById(e.getAttribute("href").substring(1)).scrollIntoView({ behavior: "smooth" }),
                t.classList.remove("openSidebar");
        });
    }),
        document.querySelectorAll(".downloadBrochure").forEach((e) => {
            e.addEventListener("click", () => {
                t.classList.remove("openSidebar");
            });
        });
    let a = document.querySelectorAll(".readMoreBtn"),
        s = document.querySelectorAll(".clampText");
    a.forEach((e, t) => {
        e.addEventListener("click", (n) => {
            n.preventDefault(),
                "block" == s[t].style.display
                    ? ((s[t].style.display = "-webkit-box"),
                      (s[t].style.webkitLineClamp = "4"),
                      (e.innerHTML = "Read More "),
                      s[t].scrollIntoView({ behavior: "smooth" }))
                    : ((s[t].style.display = "block"),
                      (s[t].style.webkitLineClamp = "unset"),
                      (e.innerHTML = "Read Less "));
        });
    });

    let c = document.querySelector(".body");
    function P() {
        (document.querySelector(".popup-overlay").style.display = "none"),
            c.classList.remove("noscroll"),
            document.querySelectorAll(".payment-table-container").forEach((e) => {
                e.classList.contains("show-full") && e.classList.remove("show-full");
            });
    }
    function T() {
        (document.querySelector(".popup-overlay").style.display = "block"), c.classList.add("noscroll");
    }
        document.querySelector(".popupform-close").addEventListener("click", () => {
            P();
        }),
        document.querySelectorAll(".popup-trigger").forEach((e) => {
            e.addEventListener("click", (t) => {
                t.preventDefault(),
                    (document.querySelector("#popupform-heading").innerHTML = e.getAttribute("data-heading")),
                    T();
            });
        }),
        window.addEventListener("load", (e) => {
            e.preventDefault(),
                setTimeout(() => {
                    T();
                }, 4e3);
        });
    let z = document.querySelectorAll(".accordion-content"),
        D = document.querySelectorAll(".mobile-accordionBtn"),
        H = document.querySelectorAll(".accordion-arrow");
    function R(e) {
        if (D[e].classList.contains("accordion-active")) {
            D[e].classList.remove("accordion-active"),
                z[e].classList.remove("contentactive"),
                H[e].classList.remove("accordion-arrow-active");
            return;
        }
        for (let t = 0; t < D.length; t++)
            D[t].classList.remove("accordion-active"),
                z[t].classList.remove("contentactive"),
                H[t].classList.remove("accordion-arrow-active");
        D[e].classList.contains("accordion-active") ||
            (D[e].classList.add("accordion-active"),
            z[e].classList.add("contentactive"),
            H[e].classList.add("accordion-arrow-active"));
    }
    D.forEach((e, t) => {
        e.addEventListener("click", () => {
            R(t);
        });
    });
    let X = document.querySelectorAll(".floorCard img"),
        N = document.querySelector(".floorSlide"),
        O = X.length - 1,
        V = 0,
        Z = setInterval(J, 5e3);
    function j() {
        return window.innerWidth < 769 ? 105 : 0;
    }
    function F() {
        return window.innerWidth < 769 ? O + 1 : O - 1;
    }
    function G() {
        N.style.transform = `translateX(-${V * j()}%)`;
    }
    function J() {
        G(), (V = (V + 1) % F());
    }
    function K() {
        clearInterval(Z), (Z = setInterval(J, 5e3));
    }
    document.querySelector(".floor_prevBtn").addEventListener("click", () => {
        (V = (V - 1 + F()) % F()), G(), K();
    }),
        document.querySelector(".floor_nextBtn").addEventListener("click", () => {
            (V = (V + 1) % F()), G(), K();
        }),
        window.addEventListener("resize", () => (G(), window.innerWidth < 768 ? K() : clearInterval(Z))),
        document.querySelectorAll(".paymentEnquireBtn").forEach((e, t) => {
            e.addEventListener("click", () => {
                document.querySelectorAll(".payment-table-container")[t].classList.add("show-full");
            });
        });
});

class AmenitiesCarousel {
    constructor() {
        (this.track = document.querySelector(".amenitiesSlide")),
            (this.slides = document.querySelectorAll(".amenitiesCard")),
            (this.prevBtn = document.querySelector(".amenities_prevBtn")),
            (this.nextBtn = document.querySelector(".amenities_nextBtn")),
            (this.lightbox = document.querySelector(".amenities-overlay")),
            (this.lightboxImage = document.getElementById("amenities-popupimage")),
            (this.lightboxTitle = document.getElementById("amenitiesLightboxTitle")),
            (this.lightboxCounter = document.getElementById("amenitiesLightboxCounter")),
            (this.lightboxClose = document.getElementById("amenitiesLightboxClose")),
            (this.lightboxPrevBtn = document.getElementById("amenities_prevBtn")),
            (this.lightboxNextBtn = document.getElementById("amenities_nextBtn")),
            (this.totalSlides = this.slides.length),
            (this.currentSlide = this.totalSlides),
            (this.autoSlideInterval = null),
            (this.autoSlideDelay = 5e3),
            (this.lightboxCurrentSlide = 0),
            (this.isTransitioning = !1),
            this.init();
    }
    init() {
        this.cloneSlides(),
            (this.slides = document.querySelectorAll(".amenitiesCard")),
            this.setupEventListeners(),
            this.updateSlidePosition(!1),
            this.startAutoSlide();
    }
    cloneSlides() {
        let t = window.innerWidth >= 1025,
            e = t ? 3 : 1;
        for (let i = this.totalSlides - 1; i >= this.totalSlides - e; i--) {
            let s = this.slides[i].cloneNode(!0);
            s.classList.add("clone"), this.track.insertBefore(s, this.track.firstChild);
        }
        for (let l = 0; l < e; l++) {
            let n = this.slides[l].cloneNode(!0);
            n.classList.add("clone"), this.track.appendChild(n);
        }
    }
    setupEventListeners() {
        this.prevBtn && this.prevBtn.addEventListener("click", () => this.previousSlide()),
            this.nextBtn && this.nextBtn.addEventListener("click", () => this.nextSlide()),
            this.lightboxClose && this.lightboxClose.addEventListener("click", () => this.closeLightbox()),
            this.lightboxPrevBtn && this.lightboxPrevBtn.addEventListener("click", () => this.lightboxPrevious()),
            this.lightboxNextBtn && this.lightboxNextBtn.addEventListener("click", () => this.lightboxNext()),
            this.slides.forEach((t, e) => {
                t.addEventListener("click", () => this.openLightboxFromSlide(e));
            }),
            this.lightbox &&
                this.lightbox.addEventListener("click", (t) => {
                    t.target === this.lightbox && this.closeLightbox();
                }),
            document.addEventListener("keydown", (t) => {
                if (this.lightbox && this.lightbox.classList.contains("active"))
                    switch (t.key) {
                        case "Escape":
                            this.closeLightbox();
                            break;
                        case "ArrowLeft":
                            this.lightboxPrevious();
                            break;
                        case "ArrowRight":
                            this.lightboxNext();
                    }
            });
        let t = document.querySelector(".amenities-arrows");
        t &&
            (t.addEventListener("mouseenter", () => this.stopAutoSlide()),
            t.addEventListener("mouseleave", () => this.startAutoSlide())),
            this.track && this.track.addEventListener("transitionend", () => this.handleTransitionEnd()),
            window.addEventListener("resize", () => {
                this.handleResize();
            });
            let clientX;
        this.lightbox.addEventListener("touchstart",(e)=>{
            clientX = e.touches[0].clientX;
        });
        this.lightbox.addEventListener("touchend",(e)=>{
            const endClientX = e.changedTouches[0].clientX;
            if (endClientX > clientX + 50) {
                this.lightboxPrevious();
            }
            else if (endClientX < clientX - 50) {
                this.lightboxNext();
            }
        })

    }
    updateSlidePosition(t = !0) {
        let e = window.innerWidth >= 1025;
        if (this.track) {
            if ((t || (this.track.style.transition = "none"), e)) {
                let i = -(33.33 * this.currentSlide);
                this.track.style.transform = `translateX(${i}%)`;
            } else {
                let s = -(100 * this.currentSlide);
                this.track.style.transform = `translateX(${s}%)`;
            }
            t || (this.track.offsetHeight, (this.track.style.transition = ""));
        }
    }
    nextSlide() {
        this.isTransitioning || ((this.isTransitioning = !0), this.currentSlide++, this.updateSlidePosition(!0));
    }
    previousSlide() {
        this.isTransitioning || ((this.isTransitioning = !0), this.currentSlide--, this.updateSlidePosition(!0));
    }
    handleTransitionEnd() {
        this.isTransitioning = !1;
        let t = window.innerWidth >= 1025,
            e = t ? 3 : 1;
        this.currentSlide >= this.totalSlides + e && ((this.currentSlide = e), this.updateSlidePosition(!1)),
            this.currentSlide < e && ((this.currentSlide = this.totalSlides + e - 1), this.updateSlidePosition(!1));
    }
    handleResize() {
        let t = window.innerWidth >= 1025;
        (this.currentSlide = t ? 3 : 1), this.updateSlidePosition(!1);
    }
    startAutoSlide() {
        this.stopAutoSlide(),
            (this.autoSlideInterval = setInterval(() => {
                this.nextSlide();
            }, this.autoSlideDelay));
    }
    stopAutoSlide() {
        this.autoSlideInterval && (clearInterval(this.autoSlideInterval), (this.autoSlideInterval = null));
    }
    openLightboxFromSlide(t) {
        let e = window.innerWidth >= 1025,
            i = e ? 3 : 1,
            s;
        (s = t < i ? this.totalSlides - (i - t) : t >= this.totalSlides + i ? t - this.totalSlides - i : t - i),
            this.openLightbox(s);
    }
    openLightbox(t) {
        this.lightboxCurrentSlide = t;
        let e = document.querySelectorAll(".amenitiesCard:not(.clone)"),
            i = e[t],
            s = i.querySelector(".amenitiesImage"),
            l = i.querySelector(".amenities-description").textContent;
        this.lightboxImage && ((this.lightboxImage.src = s.src), (this.lightboxImage.alt = s.alt)),
            this.lightboxTitle && (this.lightboxTitle.textContent = l),
            this.lightboxCounter && (this.lightboxCounter.textContent = `${t + 1} / ${this.totalSlides}`),
            this.lightbox && this.lightbox.classList.add("active");
    }
    closeLightbox() {
        this.lightbox && this.lightbox.classList.remove("active");
    }
    lightboxNext() {
        (this.lightboxCurrentSlide = (this.lightboxCurrentSlide + 1) % this.totalSlides), this.updateLightboxContent();
    }
    lightboxPrevious() {
        (this.lightboxCurrentSlide =
            0 === this.lightboxCurrentSlide ? this.totalSlides - 1 : this.lightboxCurrentSlide - 1),
            this.updateLightboxContent();
    }
    updateLightboxContent() {
        let t = document.querySelectorAll(".amenitiesCard:not(.clone)"),
            e = t[this.lightboxCurrentSlide],
            i = e.querySelector(".amenitiesImage"),
            s = e.querySelector(".amenities-description").textContent;
        this.lightboxImage && ((this.lightboxImage.src = i.src), (this.lightboxImage.alt = i.alt)),
            this.lightboxTitle && (this.lightboxTitle.textContent = s),
            this.lightboxCounter &&
                (this.lightboxCounter.textContent = `${this.lightboxCurrentSlide + 1} / ${this.totalSlides}`);
    }
}

class GalleryCarousel {
    constructor() {
        (this.track = document.querySelector(".gallerySlide")),
            (this.slides = document.querySelectorAll(".galleryCard")),
            (this.prevBtn = document.querySelector(".gallery_prevBtn")),
            (this.nextBtn = document.querySelector(".gallery_nextBtn")),
            (this.lightbox = document.querySelector(".gallery-overlay")),
            (this.lightboxImage = document.getElementById("gallery-popupimage")),
            // (this.lightboxTitle = document.getElementById("galleryLightboxTitle")),
            (this.lightboxCounter = document.getElementById("galleryLightboxCounter")),
            (this.lightboxClose = document.getElementById("galleryLightboxClose")),
            (this.lightboxPrevBtn = document.getElementById("gallery_prevBtn")),
            (this.lightboxNextBtn = document.getElementById("gallery_nextBtn")),
            (this.totalSlides = this.slides.length),
            (this.currentSlide = this.totalSlides),
            (this.autoSlideInterval = null),
            (this.autoSlideDelay = 5e3),
            (this.lightboxCurrentSlide = 0),
            (this.isTransitioning = !1),
            this.init();
    }
    init() {
        this.cloneSlides(),
            (this.slides = document.querySelectorAll(".galleryCard")),
            this.setupEventListeners(),
            this.updateSlidePosition(!1),
            this.startAutoSlide();
    }
    cloneSlides() {
        let t = window.innerWidth >= 1025,
            e = t ? 3 : 1;
        for (let i = this.totalSlides - 1; i >= this.totalSlides - e; i--) {
            let s = this.slides[i].cloneNode(!0);
            s.classList.add("clone"), this.track.insertBefore(s, this.track.firstChild);
        }
        for (let l = 0; l < e; l++) {
            let n = this.slides[l].cloneNode(!0);
            n.classList.add("clone"), this.track.appendChild(n);
        }
    }
    setupEventListeners() {
        this.prevBtn && this.prevBtn.addEventListener("click", () => this.previousSlide()),
            this.nextBtn && this.nextBtn.addEventListener("click", () => this.nextSlide()),
            this.lightboxClose && this.lightboxClose.addEventListener("click", () => this.closeLightbox()),
            this.lightboxPrevBtn && this.lightboxPrevBtn.addEventListener("click", () => this.lightboxPrevious()),
            this.lightboxNextBtn && this.lightboxNextBtn.addEventListener("click", () => this.lightboxNext()),
            this.slides.forEach((t, e) => {
                t.addEventListener("click", () => this.openLightboxFromSlide(e));
            }),
            this.lightbox &&
                this.lightbox.addEventListener("click", (t) => {
                    t.target === this.lightbox && this.closeLightbox();
                }),
            document.addEventListener("keydown", (t) => {
                if (this.lightbox && this.lightbox.classList.contains("active"))
                    switch (t.key) {
                        case "Escape":
                            this.closeLightbox();
                            break;
                        case "ArrowLeft":
                            this.lightboxPrevious();
                            break;
                        case "ArrowRight":
                            this.lightboxNext();
                    }
            });
        let t = document.querySelector(".gallery-arrows");
        t &&
            (t.addEventListener("mouseenter", () => this.stopAutoSlide()),
            t.addEventListener("mouseleave", () => this.startAutoSlide())),
            this.track && this.track.addEventListener("transitionend", () => this.handleTransitionEnd()),
            window.addEventListener("resize", () => {
                this.handleResize();
            });
        let clientX;
        this.lightbox.addEventListener("touchstart",(e)=>{
            clientX = e.touches[0].clientX;
        });
        this.lightbox.addEventListener("touchend",(e)=>{
            const endClientX = e.changedTouches[0].clientX;
            if (endClientX > clientX + 50) {
                this.lightboxPrevious();
            }
            else if (endClientX < clientX - 50) {
                this.lightboxNext();
            }
        })
    }
    updateSlidePosition(t = !0) {
        let e = window.innerWidth >= 1025;
        if (this.track) {
            if ((t || (this.track.style.transition = "none"), e)) {
                let i = -(33.33 * this.currentSlide);
                this.track.style.transform = `translateX(${i}%)`;
            } else {
                let s = -(100 * this.currentSlide);
                this.track.style.transform = `translateX(${s}%)`;
            }
            t || (this.track.offsetHeight, (this.track.style.transition = ""));
        }
    }
    nextSlide() {
        this.isTransitioning || ((this.isTransitioning = !0), this.currentSlide++, this.updateSlidePosition(!0));
    }
    previousSlide() {
        this.isTransitioning || ((this.isTransitioning = !0), this.currentSlide--, this.updateSlidePosition(!0));
    }
    handleTransitionEnd() {
        this.isTransitioning = !1;
        let t = window.innerWidth >= 1025,
            e = t ? 3 : 1;
        this.currentSlide >= this.totalSlides + e && ((this.currentSlide = e), this.updateSlidePosition(!1)),
            this.currentSlide < e && ((this.currentSlide = this.totalSlides + e - 1), this.updateSlidePosition(!1));
    }
    handleResize() {
        let t = window.innerWidth >= 1025;
        (this.currentSlide = t ? 3 : 1), this.updateSlidePosition(!1);
    }
    startAutoSlide() {
        this.stopAutoSlide(),
            (this.autoSlideInterval = setInterval(() => {
                this.nextSlide();
            }, this.autoSlideDelay));
    }
    stopAutoSlide() {
        this.autoSlideInterval && (clearInterval(this.autoSlideInterval), (this.autoSlideInterval = null));
    }
    openLightboxFromSlide(t) {
        let e = window.innerWidth >= 1025,
            i = e ? 3 : 1,
            s;
        (s = t < i ? this.totalSlides - (i - t) : t >= this.totalSlides + i ? t - this.totalSlides - i : t - i),
            this.openLightbox(s);
    }
    openLightbox(t) {
        this.lightboxCurrentSlide = t;
        let e = document.querySelectorAll(".galleryCard:not(.clone)"),
            i = e[t],
            s = i.querySelector(".galleryImage");
            // l = i.querySelector(".gallery-description").textContent;
        this.lightboxImage && ((this.lightboxImage.src = s.src), (this.lightboxImage.alt = s.alt)),
            // this.lightboxTitle && (this.lightboxTitle.textContent = l),
            this.lightboxCounter && (this.lightboxCounter.textContent = `${t + 1} / ${this.totalSlides}`),
            this.lightbox && this.lightbox.classList.add("active");
    }
    closeLightbox() {
        this.lightbox && this.lightbox.classList.remove("active");
    }
    lightboxNext() {
        (this.lightboxCurrentSlide = (this.lightboxCurrentSlide + 1) % this.totalSlides), this.updateLightboxContent();
    }
    lightboxPrevious() {
        (this.lightboxCurrentSlide =
            0 === this.lightboxCurrentSlide ? this.totalSlides - 1 : this.lightboxCurrentSlide - 1),
            this.updateLightboxContent();
    }
    updateLightboxContent() {
        let t = document.querySelectorAll(".galleryCard:not(.clone)"),
            e = t[this.lightboxCurrentSlide],
            i = e.querySelector(".galleryImage");
            // s = e.querySelector(".gallery-description").textContent;
        this.lightboxImage && ((this.lightboxImage.src = i.src), (this.lightboxImage.alt = i.alt)),
            // this.lightboxTitle && (this.lightboxTitle.textContent = s),
            this.lightboxCounter &&
                (this.lightboxCounter.textContent = `${this.lightboxCurrentSlide + 1} / ${this.totalSlides}`);
    }
}

document.addEventListener("DOMContentLoaded",function(){
    new AmenitiesCarousel();
    new GalleryCarousel();
    const bannerLength = document.querySelectorAll(".bannerCard").length;
    if (bannerLength <= 1) {
        document.querySelector(".bannerNav").style.display = "none";
    }
    const priceLength = document.querySelectorAll(".floorCard").length;
    if (priceLength <= 1) {
        document.querySelector(".floor-arrows").style.display = "none";
    }
})