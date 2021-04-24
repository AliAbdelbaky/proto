<template lang="pug">
section.contact
    .container-fluid.text-center
        .collaborate
            h1
                | You got a cool project on mind? Let’s collaborate and create powerful 
                br
                | ‍
                span Product & Brand
                |  for your startup.
            svg(width='878' height='16' viewBox='0 0 878 16' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(d='M4 12.2765C59.9097 5.28768 121.262 8.07546 177.506 5.14558C209.18 3.49565 241.132 4.72612 272.835 4.72612C302.162 4.72612 331.488 4.72612 360.815 4.72612C400.824 4.72612 440.598 8.27556 480.571 8.5013C561.191 8.95659 641.615 12.2765 722.269 12.2765C761.024 12.2765 799.722 12.4892 838.45 10.8084C850.246 10.2964 862.219 8.5013 874 8.5013' stroke='#1f1f1f' stroke-width='7' stroke-linecap='round' stroke-linejoin='bevel')
        .getintouch
            p
                span.green Available
                |  for freelance & Full Time Jop
                br
                span Get in
                |  touch! 
                a(href="mailto:ali.abdelbaky2000@gmail.com?subject=Mail%20from%20website") Drop me an email
            a.sayHello(href="mailto:ali.abdelbaky2000@gmail.com?subject=Mail%20from%20website") Say Hello
</template>
<script>
//- Animation Plugine
import { TimelineMax } from "gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
    name: "contactsection",
    mounted() {
        //- Animations
        const contactSection = document.querySelector(".homepage .contact"),
            contactH1 = contactSection.querySelector(".collaborate h1"),
            contactP = contactSection.querySelector(".getintouch p"),
            contactsvg = contactSection.querySelector(".collaborate svg"),
            contactBtn = contactSection.querySelector(".getintouch .sayHello");
        const contactTween = new TimelineMax();
        contactTween
            .fromTo(
                contactH1,
                0.8,
                { y: "100%", opacity: "0" },
                { y: "0%", opacity: "1" }
            )
            .fromTo(
                contactP,
                0.8,
                { y: "100%", opacity: "0" },
                { y: "0%", opacity: "1" },
                "-=0.4"
            )
            .fromTo(
                contactsvg,
                0.8,
                { x: "-100%", opacity: "0" },
                { x: "0%", opacity: "1" },
                "-=0.4"
            )
            .fromTo(
                contactBtn,
                0.2,
                { y: "100%", opacity: "0" },
                { y: "0%", opacity: "1" },
                "-=0.6"
            );
        ScrollTrigger.create({
            trigger: contactSection,
            start: "top 40%",
            end: "+=200",
            scrub: 3,
            animation: contactTween
        });
        //----------------------
        //- Cursor
        let mianCursor = document.querySelector(".cursor .main");
        const emailword = contactSection.querySelector(".getintouch a");
        contactH1.addEventListener("mouseenter", () => {
            mianCursor.classList.add("filter");
        });
        contactH1.addEventListener("mouseleave", () => {
            mianCursor.classList.remove("filter");
        });
        emailword.addEventListener("mouseenter", () => {
            mianCursor.classList.add("filter");
        });
        emailword.addEventListener("mouseleave", () => {
            mianCursor.classList.remove("filter");
        });
        contactBtn.addEventListener("mouseenter", () => {
            mianCursor.classList.add("filter");
        });
        contactBtn.addEventListener("mouseleave", () => {
            mianCursor.classList.remove("filter");
        });
    }
};
</script>
