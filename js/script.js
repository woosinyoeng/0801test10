 
 /* custom-cursor */
 
 const text = "WSY PORTFOLIO • ";
    const radius = 35;
    const circleText = document.getElementById("circleText");
    const circleInner = document.getElementById("circleInner");

    const chars = text.split("");
    const len = chars.length;

    chars.forEach((char, i) => {
      const span = document.createElement("span");
      span.className = "circle-letter";
      span.textContent = char;
      circleInner.appendChild(span);
    });

    function positionLetters() {
      const letters = circleInner.querySelectorAll(".circle-letter");
      letters.forEach((span, i) => {
        const angle = (360 / len) * i;
        const rad = angle * (Math.PI / 180);
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
        span.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      });
    }

    window.onload = () => {
      positionLetters();
    };

    // 회전
    let rotation = 0;
    setInterval(() => {
      rotation += 1;
      circleInner.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
    }, 20);

    // 커서 중심 정렬 방식
    document.addEventListener("mousemove", (e) => {
      circleText.style.left = `${e.clientX}px`;
      circleText.style.top = `${e.clientY}px`;
    });


const interactiveElements = document.querySelectorAll("a, button");

interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    // 애니메이션 강제 재시작: remove → reflow → add
    circleText.classList.remove("cursor-hover");
    void circleText.offsetWidth; // 리플로우 트릭
    circleText.classList.add("cursor-hover");
  });
});









/* gsap / problem1 */
      gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".problem1").forEach((el, i) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: i * 0.2 
    });
  });

  gsap.fromTo(
  ".contents",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contents",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  }
);




/* slider */
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 4000, // ✅ 4초마다 자동 전환
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    on: {
      init: function () {
        animateText(this.slides[this.activeIndex]);
      },
      slideChangeTransitionStart: function () {
        animateText(this.slides[this.activeIndex]);
      }
    }
  });

  function animateText(slide) {
    const content = slide.querySelector(".slide-content");
    if (!content) return;

    gsap.fromTo(content,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
    );
  }


   gsap.registerPlugin(ScrollTrigger);

  // 각 텍스트 요소를 배열로 선택
  const elements = document.querySelectorAll(".text_2 > h2, .text_2 > h3, .text_2 > h4, .text_2 > a");

  gsap.from(elements, {
    scrollTrigger: {
      trigger: ".wrap",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.3 // 0.3초 간격으로 하나씩 등장
  });



 gsap.registerPlugin(ScrollTrigger);

// 타이틀
gsap.from(".title", {
  scrollTrigger: {
    trigger: ".overlay",
    start: "top 85%",
    toggleActions: "play none none none"
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
});

// 서브타이틀
gsap.from(".subtitle", {
  scrollTrigger: {
    trigger: ".overlay",
    start: "top 85%",
    toggleActions: "play none none none"
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  delay: 0.4,
  ease: "power2.out"
});

// 버튼
gsap.from(".contact-button", {
  scrollTrigger: {
    trigger: ".overlay",
    start: "top 85%",
    toggleActions: "play none none none"
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  delay: 0.6,
  ease: "power2.out"
});
