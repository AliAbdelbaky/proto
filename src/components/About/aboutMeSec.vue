<template lang="pug">
section.aboutme
    h1.background About Me
    .content
        p
            | Hello! I'm Ali Abdelbaky, a software engineer based in Mansoura, EG.
            br
            | I enjoy creating things that live on the internet, whether that be websites, Web applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
            br
            | Shortly i'm student at <a class="MU" target="_blank" href="https://www.mans.edu.eg/">Mansoura University</a> , I'm working as a freelancer and looking to collaborate with other Web Developers 
            br
            | Here are a few technologies I've been working with recently :
            br
        ul.skills-list
            li JavaScript (ES6+)
            li HTML(pug) & (SASS)CSS
            li Vue
            li GulpJs
            li Node.js
</template>
<script>
import { TimelineMax, Power1 } from "gsap";
export default {
    name: "aboutmesection",
    mounted() {
        //- Smoth Scrolling Function
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
        //---------------------
        //-----
        const MU = document.querySelector(".MU"),
            mianCursor = document.querySelector(".cursor .main");
        MU.addEventListener("mouseenter", () => {
            mianCursor.classList.add("filter");
        });
        MU.addEventListener("mouseleave", () => {
            mianCursor.classList.remove("filter");
        });
        //--------------------
        //-Animation onload
        const tl = new TimelineMax(),
            background = document.querySelector(".aboutme .background"),
            ContentP = document.querySelector(".aboutme .content p"),
            ContentList = document.querySelectorAll(
                ".aboutme .content .skills-list li"
            );
        tl.fromTo(
            background,
            1,
            { y: "100%", opacity: "0" },
            { y: "0%", opacity: "1", ease: Power1 }
        )
            .fromTo(
                ContentP,
                1,
                { y: "100%", opacity: "0" },
                { y: "0%", opacity: "1", ease: Power1 },
                "-=0.5"
            )
            .fromTo(
                ContentList[0],
                0.5,
                { y: "100%", opacity: "0" },
                {
                    y: "0%",
                    opacity: "1",
                    ease: Power1,
                    onComplete: () => {
                        // window.location = window.location.href;
                    }
                }
            )
            .fromTo(
                ContentList[1],
                0.5,
                { y: "100%", opacity: "0" },
                { y: "0%", opacity: "1", ease: Power1 }
            )
            .fromTo(
                ContentList[2],
                0.5,
                { y: "100%", opacity: "0" },
                { y: "0%", opacity: "1", ease: Power1 }
            )
            .fromTo(
                ContentList[3],
                0.5,
                { y: "100%", opacity: "0" },
                { y: "0%", opacity: "1", ease: Power1 }
            )
            .fromTo(
                ContentList[4],
                0.5,
                { y: "100%", opacity: "0" },
                { y: "0%", opacity: "1", ease: Power1 }
            )
            .eventCallback("onComplete", () => {
                window.scrollTo(0, 0);
                if ("scrollRestoration" in history) {
                    history.scrollRestoration = "manual";
                }
                smoothScroll();
            });
    }
};
</script>
