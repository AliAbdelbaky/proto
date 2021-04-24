<template lang="pug">
section.banner
    section(:class="className")
        .container-fluid
            .row
                .col-md-6(:class="imgdirection")
                    .banner-text
                        p.disc {{disc}}
                        h2.title {{title}}
                        p.about {{about}}
                        a.banner-btn(:href="btnLink" target="_blank") {{btnName}}
                .col-md-6
                    .banner-img(:class="automr")
                        .fullimage 
                            img(src="../../assets/mywork/babfull.png" , alt="alt") 
                        .responsiveimage
                            img(src="../../assets/mywork/bab-iponex.png", alt="alt")
</template>
<script>
//- Animation Plugine
import { TimelineMax } from "gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//----------------
export default {
    name: "myworksection",
    props: [
        "className",
        "disc",
        "title",
        "about",
        "btnLink",
        "btnName",
        "fullimagesrc",
        "responsiveimagesec",
        "imgdirection",
        "automr"
    ],
    mounted() {
        //---------------------ScrollTrigger
        const posts = document.querySelectorAll(".mywork .banner");
        const animSec = gsap.utils.toArray(posts);
        animSec.forEach(text => {
            //- Hook Items
            //- Banner Header
            let bannerHeader = document.querySelector(".mywork h2");
            //- BannerText
            let bannerText = text.querySelector(".banner-text"),
                bannerDisc = bannerText.querySelector(".disc"),
                bannerTitle = bannerText.querySelector(".title"),
                bannerAbout = bannerText.querySelector(".about"),
                bannerBtn = bannerText.querySelector(".banner-btn");
            //------------------
            //- BannerImage
            let bannerImg = text.querySelector(".banner-img");
            //------------------
            let textTween = new TimelineMax();
            textTween
                .fromTo(
                    bannerHeader,
                    0.8,
                    { y: "100%", opacity: "0" },
                    { y: "0%", opacity: "1" }
                )
                .fromTo(
                    bannerText,
                    0.8,
                    { y: "100%", opacity: "0" },
                    { y: "0%", opacity: "1" },
                    "-=0.6"
                )
                .fromTo(
                    bannerDisc,
                    0.8,
                    { y: "100%", opacity: "0" },
                    { y: "0%", opacity: "1" },
                    "-=0.8"
                )
                .fromTo(
                    bannerTitle,
                    0.8,
                    { y: "100%", opacity: "0" },
                    { y: "0%", opacity: "1" },
                    "-=0.8"
                )
                .fromTo(
                    bannerAbout,
                    0.8,
                    { y: "100%", opacity: "0" },
                    { y: "0%", opacity: "1" },
                    "-=0.8"
                )
                .fromTo(
                    bannerBtn,
                    0.8,
                    { y: "10%", opacity: "0" },
                    { y: "0%", opacity: "1" },
                    "-=1.1"
                )
                .fromTo(
                    bannerImg,
                    0.8,
                    { y: "1000%", opacity: "0" },
                    { y: "0%", opacity: "1" },
                    "-=1"
                );
            ScrollTrigger.create({
                trigger: text,
                start: "top 80%",
                end: "+=180",
                scrub: 3,
                animation: textTween
            });
            //----------------
            //- Scale img
            let imgScale = new TimelineMax(),
                bannerSImage = bannerImg.querySelector(".responsiveimage");
            imgScale.fromTo(
                bannerSImage,
                { width: "17%", scale: "1.5" },
                { width: "20%", scale: "1.16" }
            );
            ScrollTrigger.create({
                trigger: text,
                start: "top 80%",
                end: "+=900",
                scrub: 3,
                animation: imgScale
            });
        });
        //----------------------
        //- Cursor
        let mianCursor = document.querySelector(".cursor .main");
        let myworkbtns = document.querySelectorAll(
            ".banner .banner-text .banner-btn"
        );
        myworkbtns.forEach(btn => {
            btn.addEventListener("mouseenter", () => {
                mianCursor.classList.add("filter");
            });
            btn.addEventListener("mouseleave", () => {
                mianCursor.classList.remove("filter");
            });
        });
    }
};
</script>
