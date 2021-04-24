<template lang="pug">
header
    h3.logo {{username}}
    nav.nav-close
        ul.nav-list
            li.nav-links
                <router-link to="/">Home</router-link>
            li.nav-links
                <router-link to="/about">About</router-link>
            li.nav-links
                a(target="_blank" href="https://www.docfly.com/files/print_view/?f=71714d3c36966f84") Resume
        button.burger-btn
            span
            span
            span
        .nav-open
            .container-fluid
                .row
                    .col-md-4.img-container
                        img(src="../../assets/me/me2.jpg", alt="alt")
                    .col-md-8.content
                        .row
                            .col-sm-6.links
                                .logo {{username}}
                                ul.navopen-list
                                    li.nav-links
                                        <router-link to="/">Home</router-link>
                                    li.nav-links
                                        <router-link to="/about">About</router-link>
                                    li.nav-links
                                        a(target="_blank" href="https://www.docfly.com/files/print_view/?f=71714d3c36966f84") Resume
                                    span.copy-right © 2021 {{username}}
                            .col-sm-6.social
                                h3 
                                    | Let's connect <span> digitally</span>
                                a(href="mailto:ali.abdelbaky2000@gmail.com?subject=Mail%20from%20website") Email
                                a(target="_blank" href="https://github.com/AliAbdelbaky") Github
                                a(target="_blank" href="https://www.linkedin.com/in/ali-abdelbaky") LinkedIn
                                a(target="_blank" href="https://www.instagram.com/ali_abdelbaky/") Instagram
                                a(target="_blank" href="https://www.facebook.com/ali.abdelbaky23/") Facebook
                                a(target="_blank" href="https://twitter.com/abdelbaky_11") Twitter
</template>
<script>
//- Animation Plugine
import { TimelineMax } from "gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//---------------
export default {
    name: "navbar",
    data: () => {
        return {
            username: "Ali Abdelbaky"
        };
    },
    mounted() {
        //-Navbar Button Toggle
        const tl = new TimelineMax({ paused: true, reversed: true }),
            burgerBtn = document.querySelector("nav .burger-btn"),
            spans = document.querySelectorAll("nav .burger-btn span"),
            navOpen = document.querySelector("nav .nav-open"),
            navOpenImgContainer = navOpen.querySelector(".img-container"),
            navOpenContent = navOpen.querySelector(".content"),
            contentLinks = navOpenContent.querySelectorAll(
                ".navopen-list .nav-links"
            ),
            navcopyRight = navOpenContent.querySelector(
                ".navopen-list .copy-right"
            ),
            navOpenLogo = navOpen.querySelector(".links .logo"),
            navcontentContainer = navOpen.querySelector(".navopen-list"),
            contentSocial = navOpenContent.querySelectorAll(".social a"),
            sociaH3 = navOpenContent.querySelector(".social h3");
        tl.to(spans[0], 0.7, { rotate: "46deg" }, "-=1")
            .to(spans[1], 0.1, { opacity: "0" }, "-=1")
            .to(spans[2], 0.7, { rotate: "-45deg", y: "-100%" }, "-=1")
            .fromTo(
                navOpen,
                1,
                { opacity: "1", y: "-100%" },
                {
                    opacity: "1",
                    y: "0%"
                },
                "-=1"
            )
            .fromTo(
                navOpenContent,
                0.8,
                { height: "0%" },
                {
                    height: "100vh",
                    onComplete: () => {
                        navOpen.style.pointerEvents = "all";
                    },
                    onReverseComplete: () => {
                        navOpen.style.pointerEvents = "none";
                    }
                },
                "-=1"
            )
            .fromTo(
                navOpenImgContainer,
                0.8,
                { height: "0%" },
                { height: "100vh" },
                "-=0.8"
            )
            .fromTo(
                navcopyRight,
                0.8,
                { opacity: "0", y: "-20%" },
                { opacity: "1", y: "0%" },
                "-=0.8"
            )
            .fromTo(
                navcontentContainer,
                1,
                { opacity: "0" },
                { opacity: "1" },
                "-=0.5"
            )
            .fromTo(
                contentLinks[3],
                0.5,
                { opacity: "0", y: "-20%" },
                { opacity: "1", y: "0%" },
                "-=1"
            )
            .fromTo(
                contentLinks[2],
                0.5,
                { opacity: "0", y: "-20%" },
                { opacity: "1", y: "0%" },
                "-=0.8"
            )
            .fromTo(
                contentLinks[1],
                0.5,
                { opacity: "0", y: "-20%" },
                { opacity: "1", y: "0%" },
                "-=0.8"
            )
            .fromTo(
                contentLinks[0],
                0.5,
                { opacity: "0", y: "-20%" },
                { opacity: "1", y: "0%" },
                "-=0.8"
            )
            .fromTo(
                contentSocial[5],
                0.8,
                { opacity: "0", y: "-20%" },
                { opacity: "1", y: "0%" },
                "-=0.8"
            )
            .fromTo(
                contentSocial[4],
                0.8,
                { opacity: "0", y: "-20%" },
                { opacity: "1", y: "0%" },
                "-=1"
            )
            .fromTo(
                contentSocial[3],
                0.8,
                { opacity: "0", y: "-20%" },
                { opacity: "1", y: "0%" },
                "-=0.8"
            )
            .fromTo(
                contentSocial[2],
                0.8,
                { opacity: "0", y: "-20%" },
                { opacity: "1", y: "0%" },
                "-=0.8"
            )
            .fromTo(
                contentSocial[1],
                0.8,
                { opacity: "0", y: "-20%" },
                { opacity: "1", y: "0%" },
                "-=0.8"
            )
            .fromTo(
                contentSocial[0],
                0.8,
                { opacity: "0", y: "-20%" },
                { opacity: "1", y: "0%" },
                "-=0.8"
            )
            .fromTo(
                sociaH3,
                0.5,
                { opacity: "0", y: "-20%" },
                { opacity: "1", y: "0%" },
                "-=0.8"
            )
            .fromTo(
                navOpenLogo,
                0.2,
                { opacity: "0", y: "-445%" },
                { opacity: "1", y: "-425%" },
                "-=0.8"
            );
        //-----------------------------
        //- Click On the Button
        burgerBtn.addEventListener("click", e => {
            if (tl.isActive()) {
                e.preventDefault();
                e.stopImmediatePropagation();
                return false;
            }
            toggleTween(tl);
        });
        function toggleTween(tween) {
            tween.reversed() ? tween.play() : tween.reverse();
        }
        //-----------------------
        //- navHide
        const navHideTween = new TimelineMax();
        //- Items
        const header = document.querySelector("header"),
            navlinks = document.querySelectorAll(
                ".nav-close .nav-list .nav-links"
            ),
            headerLogo = document.querySelector("header .logo");
        //- Toggle Hide Navbar
        navHideTween
            .fromTo(
                navlinks[0],
                0.2,
                { opacity: "1" },
                { opacity: "0" },
                "-=0.2"
            )
            .fromTo(
                navlinks[1],
                0.2,
                { opacity: "1" },
                { opacity: "0" },
                "-=0.02"
            )
            .fromTo(
                navlinks[2],
                0.2,
                { opacity: "1" },
                { opacity: "0" },
                "-=0.04"
            )
            .fromTo(
                navlinks[3],
                0.2,
                { opacity: "1" },
                { opacity: "0" },
                "-=0.06"
            )
            .fromTo(
                navlinks[4],
                0.2,
                { opacity: "1" },
                { opacity: "0" },
                "-=0.08"
            )
            .fromTo(
                headerLogo,
                0.2,
                { opacity: "1" },
                {
                    opacity: "0",
                    onComplete: () => {
                        navlinks.forEach(link => {
                            link.style.pointerEvents = "none";
                        });
                    },
                    onReverseComplete: () => {
                        navlinks.forEach(link => {
                            link.style.pointerEvents = "all";
                        });
                    }
                },
                "-=0.010"
            );
        ScrollTrigger.create({
            trigger: header,
            start: "100% 10%",
            end: "+=180 10%",
            scrub: 0,
            animation: navHideTween
        });
        //-----------------
        //-Cursor
        let mianCursor = document.querySelector(".cursor .main");
        //- Nav
        navlinks.forEach(link => {
            link.addEventListener("mouseenter", () => {
                mianCursor.classList.add("filter");
            });
            link.addEventListener("mouseleave", () => {
                mianCursor.classList.remove("filter");
            });
        });
        //----
        burgerBtn.addEventListener("mouseenter", () => {
            mianCursor.classList.add("filter");
        });
        burgerBtn.addEventListener("mouseleave", () => {
            mianCursor.classList.remove("filter");
        });
        //- Navopen
        contentLinks.forEach(link => {
            link.addEventListener("mouseenter", () => {
                mianCursor.classList.add("filter");
            });
            link.addEventListener("mouseleave", () => {
                mianCursor.classList.remove("filter");
            });
        });
        contentSocial.forEach(link => {
            link.addEventListener("mouseenter", () => {
                mianCursor.classList.add("filter");
            });
            link.addEventListener("mouseleave", () => {
                mianCursor.classList.remove("filter");
            });
        });
        //-------
        //- Refresh page
        contentLinks[0].addEventListener("click", () => {
            window.location = window.location.href;
        });
        contentLinks[1].addEventListener("click", () => {
            window.location = window.location.href;
        });
        navlinks[0].addEventListener("click", () => {
            window.location = window.location.href;
        });
        navlinks[1].addEventListener("click", () => {
            window.location = window.location.href;
        });
    }
};
</script>
