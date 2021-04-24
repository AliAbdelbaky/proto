<template lang="pug">
section.footer
    footer
        .container-fluid
            .row
                .col-md-12
                    h2.logo
                        | Ali Abdelbaky
            .content
                .row
                    .col-md-7.col-sm-7.d-content
                        .row
                            .col-md-4.col-sm-4
                                ul
                                    .title Navigate
                                    li
                                        <router-link to="/">Home</router-link>
                                    li
                                        <router-link to="/about">About</router-link>
                                    li
                                        a(target="_blank" href="https://www.docfly.com/files/print_view/?f=71714d3c36966f84") Resume
                                    
                            .col-md-4.col-sm-4
                                ul
                                    .title.help Need 
                                        span  help?
                                    li
                                        a(href="mailto:ali.abdelbaky2000@gmail.com?subject=Mail%20from%20website") Email
                                    li
                                        a(target="_blank" href="https://github.com/AliAbdelbaky") Github 
                                    li
                                        a(target="_blank" href="https://www.linkedin.com/in/ali-abdelbaky") LinkedIn
                            .col-md-4.col-sm-4
                                ul
                                    .title Social
                                    li
                                        a(target="_blank" href="https://www.instagram.com/ali_abdelbaky/") Instagram
                                    li
                                        a(target="_blank" href="https://www.facebook.com/ali.abdelbaky23/") Facebook
                                    li
                                        a(target="_blank" href="https://twitter.com/abdelbaky_11") Twitter
                    .col-md-5.col-sm-5.d-content
                        .logo-svg.text-center
                            svg#Layer_1(data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 902.63 746.39')
                                title logo
                                path(d='M655.76,691.72l-122-359.11h99.67l77.52,234.77,14.64,54.53ZM1138,392.07,1030.1,407l25.24-74.34h103ZM903.63,1079H787.34L681.84,768.44,750.28,700,804,858.62c14.38,45.41,26.57,90.81,37.64,135.12h2.22c11.07-43.2,22.15-87.49,38.75-136.22l73.09-214.83,21.26-79.22,35.63-104.89,107.86-14.86Z' transform='translate(-533.75 -332.61)')
                                path(d='M909,618.67,811.8,332.61h99.67l45,136.24ZM1421.92,375l-105.53,7.69,17-50.1h103Zm-240.23,704H1065.4l-56-164.65,49.36-124.28L1082,858.62c14.4,45.41,26.57,90.81,37.65,135.12h2.21c11.07-43.2,22.15-87.49,38.76-136.22l73.08-214.83L1255,563.47l44.37-130.62,105.44-7.69Z' transform='translate(-533.75 -332.61)')
                .license.row
                    .col-md-6
                        .copy-right.text-left
                            span All rights reserved — 2020 © Ali Abdelbaky
                    .col-md-6
                        .info.text-center
                            span  Website by Ali Abdelbaky
</template>
<script>
//- Animation Plugine
import { TimelineMax } from "gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
    name: "footersection",
    mounted() {
        //- Paralax Footer
        //-Homepage
        const conatctSection = document.querySelector(".homepage .contact"),
            footer = document.querySelector(".homepage .footer"),
            footerHTween = new TimelineMax();
        footerHTween.to(footer, { y: "0%" });
        ScrollTrigger.create({
            trigger: conatctSection,
            animation: footerHTween,
            start: "90% 95%",
            end: "150% 95%",
            scrub: 1
        });
        //- Aboutpage
        const mapSection = document.querySelector(".aboutpage .map"),
            footerAboutpage = document.querySelector(".aboutpage .footer"),
            footerATween = new TimelineMax();
        footerATween.to(footerAboutpage, { y: "0%" });
        ScrollTrigger.create({
            trigger: mapSection,
            animation: footerATween,
            start: "100% 95%",
            end: "150% 95%",
            scrub: 1
        });
        //----------------------
        //-refresh page
        const footerlinks = document.querySelectorAll(
            ".footer .content ul li a"
        );
        footerlinks[0].addEventListener("click", () => {
            window.location = window.location.href;
        });
        footerlinks[1].addEventListener("click", () => {
            window.location = window.location.href;
        });
    }
};
</script>
