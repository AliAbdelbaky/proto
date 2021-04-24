<template lang="pug">
section.hero
    .logo 
        svg#logo(data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 902.63 746.39')
            path(d='M655.76,691.72l-122-359.11h99.67l77.52,234.77,14.64,54.53ZM1138,392.07,1030.1,407l25.24-74.34h103ZM903.63,1079H787.34L681.84,768.44,750.28,700,804,858.62c14.38,45.41,26.57,90.81,37.64,135.12h2.22c11.07-43.2,22.15-87.49,38.75-136.22l73.09-214.83,21.26-79.22,35.63-104.89,107.86-14.86Z' transform='translate(-533.75 -332.61)')
            path(d='M909,618.67,811.8,332.61h99.67l45,136.24ZM1421.92,375l-105.53,7.69,17-50.1h103Zm-240.23,704H1065.4l-56-164.65,49.36-124.28L1082,858.62c14.4,45.41,26.57,90.81,37.65,135.12h2.21c11.07-43.2,22.15-87.49,38.76-136.22l73.08-214.83L1255,563.47l44.37-130.62,105.44-7.69Z' transform='translate(-533.75 -332.61)')
    h2.info Devoloping experiences for<span> purpose driven </span>brands
    .s-hero-images
        .s-hero-wrapper
            .s-hero-image
                img(src="../../assets/me/me1.jpg", alt="alt")
            .s-hero-image
                img(src="../../assets/me/me3.jpeg", alt="alt")
            .s-hero-image
                img(src="../../assets/me/me2.jpg", alt="alt")
            .s-hero-image
                img(src="../../assets/me/me4.jpeg", alt="alt")
            .s-hero-image
                img(src="../../assets/me/me2.jpg", alt="alt")
            .s-hero-image
                img(src="../../assets/me/me3.jpeg", alt="alt")
            .s-hero-image
                img(src="../../assets/me/me1.jpg", alt="alt")
            .s-hero-image
                img(src="../../assets/me/me4.jpeg", alt="alt")
</template>
<script>
//- Animation Plugine
import { TimelineMax } from "gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//---------------
//------------
export default {
    name: "herosection",
    mounted() {
        //----
        const body = document.body,
            scrollWarp = document.querySelector(".smooth-scroll-warpper"),
            heightH = scrollWarp.getBoundingClientRect().height - 1,
            speed = 0.04,
            //-Animation Hooks
            navbar = document.querySelector("header");
        //---------------------------
        let offset = 0;
        body.style.height = Math.floor(heightH) + "px";
        function smoothScroll() {
            offset += (window.pageYOffset - Math.floor(offset)) * speed;
            var scroll = "translateY(-" + offset + "px) translateZ(0)";
            var navbartop = "translateY(" + offset + "px) translateZ(0)";
            scrollWarp.style.transform = scroll;
            //- NavTop
            navbar.style.transform = navbartop;
            requestAnimationFrame(smoothScroll);
        }
        //----
        //- Animation
        const tl = new TimelineMax();
        //- Items
        const herologo = document.querySelector(".hero .logo svg"),
            heroinfo = document.querySelector(".hero .info"),
            heroimgs = document.querySelectorAll(".hero .s-hero-image"),
            navHeader = document.querySelector("header");
        tl
            //- Hero Images
            .fromTo(
                heroimgs[4],
                1.2,
                { x: "561%", scale: "1.1" },
                { x: "0%", y: "-96%" }
            )
            .fromTo(
                heroimgs[7],
                1.2,
                { x: "561%", scale: "1.1" },
                { x: "0%", y: "-100%" },
                "-=1.1"
            )
            .fromTo(
                heroimgs[0],
                1.2,
                { x: "561%", scale: "1.1" },
                { x: "0%", y: "-100%" },
                "-=1.1"
            )
            .fromTo(
                heroimgs[1],
                1.2,
                { x: "561%", scale: "1.1" },
                { x: "0%", y: "-100%" },
                "-=1"
            )
            .fromTo(
                heroimgs[2],
                1.2,
                { x: "561%", scale: "1.1" },
                { x: "0%", y: "-123%" },
                "-=1.2"
            )
            //-toggle down Images
            .to(heroimgs[0], 1, { y: "-80%" }, "-=0.3")
            .to(heroimgs[1], 1, { y: "-80%" }, "-=1")
            .to(heroimgs[7], 1, { y: "-80%" }, "-=1")
            .to(heroimgs[4], 1, { y: "-74%" }, "-=1.1")
            .to(heroimgs[2], 1, { y: "-97%" }, "-=1.1")
            //- Down images
            .fromTo(
                heroimgs[4],
                1,
                { y: "-74%", scale: "1.1" },
                { y: "0%", scale: "1" }
            )
            .fromTo(
                heroimgs[2],
                1,
                { y: "-97%", scale: "1.1" },
                { y: "0%", scale: "1" },
                "-=1"
            )
            .fromTo(
                heroimgs[1],
                1,
                { y: "-80%", scale: "1.1" },
                { y: "0%", scale: "1" },
                "-=0.9"
            )
            .fromTo(
                heroimgs[7],
                1,
                { y: "-80%", scale: "1.1" },
                { y: "0%", scale: "1" },
                "-=1"
            )
            .fromTo(
                heroimgs[0],
                1,
                { y: "-80%", scale: "1.1" },
                { y: "0%", scale: "1" },
                "-=1"
            )
            //---------------------------
            //- Hero info
            .fromTo(
                heroinfo,
                1,
                { opacity: 0, y: "50%" },
                { opacity: 1, y: "0%" },
                "-=0.9"
            )
            .to(herologo, 2.8, {
                strokeDashoffset: "0px",
                opacity: "1"
            })
            .to(herologo, 1, {
                fill: "#1f1f1f"
            })
            .fromTo(
                navHeader,
                1,
                { opacity: "0", pointerEvents: "none" },
                { opacity: "1", pointerEvents: "all" },
                "-=1"
            )
            .eventCallback("onComplete", () => {
                window.scrollTo(0, 0);
                if ("scrollRestoration" in history) {
                    history.scrollRestoration = "manual";
                }
                smoothScroll();
            });
        //-------------------
        //- Slider Scrollmove
        const sliderTl = new TimelineMax(),
            herosection = document.querySelector(".homepage .hero "),
            sliderWarper = document.querySelector(
                ".homepage .hero .s-hero-images .s-hero-wrapper"
            );
        sliderTl.fromTo(sliderWarper, { x: "0%" }, { x: "-50%" });
        ScrollTrigger.create({
            trigger: herosection,
            start: "top 5%",
            end: herosection.innerHeight + 600,
            scrub: 2,
            animation: sliderTl
        });
    }
};
</script>
