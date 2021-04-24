<template lang="pug">
section.github#gitHub
    .container-fluid
        h6 SPOTLIGHT
        h2 Explore my
            span  Github
        table
            tbody
                tr.disabled
                    td.p-year
                        span Year
                    td.p-title
                        span Title
                    td.p-at
                        span Made at
                    td.t-status
                        span Built with
                    td.t-explore
                        |Link
                tr
                    td.column-num
                        span 2020
                    td.p-name
                        span Darkmode Theme
                    td.p-date
                        span Home
                    td.t-status
                        span JavaScript - Pug - Sass
                    td.t-explore
                        a(href="https://github.com/AliAbdelbaky/Dark-mode-theme" target="_blank") <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                tr
                    td.column-num
                        span 2019
                    td.p-name
                        span Bab-dashboard
                    td.p-date
                        span Home
                    td.t-status
                        span JavaScript - Pug - Sass
                    td.t-explore
                        a(href="https://github.com/AliAbdelbaky/bab-dashboard" target="_blank") <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                tr
                    td.column-num
                        span 2019
                    td.p-name
                        span Todos
                    td.p-date
                        span Home
                    td.t-status
                        span VueJs - Css - HTML
                    td.t-explore
                        a(href="https://github.com/AliAbdelbaky/Todos-app" target="_blank") <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                tr
                    td.column-num
                        span 2019
                    td.p-name
                        span Ipadaa
                    td.p-date
                        span Ipdaa Teck
                    td.t-status
                        span JavaScript - Css - HTML
                    td.t-explore
                        a(href="https://github.com/AliAbdelbaky/ipda3" target="_blank") <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        a.more(href="https://github.com/AliAbdelbaky?tab=repositories" target="_blank") More
</template>
<script>
//- Animation Plugine
import { TimelineMax } from "gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//---------------
export default {
    name: "githubsection",
    data: function() {
        return {
            compname: "gitHub"
        };
    },
    mounted() {
        const githubContainer = document.querySelector(".homepage .github"),
            githubH6 = githubContainer.querySelector("h6"),
            githubH2 = githubContainer.querySelector("h2"),
            githubTable = githubContainer.querySelector("table"),
            gitBtn = githubContainer.querySelector(".more");
        let bgTween = new TimelineMax();
        bgTween
            .fromTo(
                githubH6,
                0.4,
                { y: "100%", opacity: "0" },
                { y: "0%", opacity: "1" }
            )
            .fromTo(
                githubH2,
                0.8,
                { y: "100%", opacity: "0" },
                { y: "0%", opacity: "1" },
                "-=0.4"
            )
            .fromTo(
                githubTable,
                0.4,
                { y: "100%", opacity: "0" },
                { y: "0%", opacity: "1" },
                "-=0.4"
            )
            .fromTo(
                gitBtn,
                0.2,
                { y: "100%", opacity: "0" },
                { y: "0%", opacity: "1" },
                "-=0.4"
            );
        ScrollTrigger.create({
            trigger: githubContainer,
            start: "top 90%",
            end: "+=180",
            scrub: 2,
            animation: bgTween
        });
        //- Curser
        let mianCursor = document.querySelector(".cursor .main");
        let tableTrs = githubTable.querySelectorAll("tr");
        tableTrs.forEach(tr => {
            tr.addEventListener("mouseenter", () => {
                mianCursor.classList.add("filter");
            });
            tr.addEventListener("mouseleave", () => {
                mianCursor.classList.remove("filter");
            });
        });
        gitBtn.addEventListener("mouseenter", () => {
            mianCursor.classList.add("filter");
        });
        gitBtn.addEventListener("mouseleave", () => {
            mianCursor.classList.remove("filter");
        });
    }
};
</script>
