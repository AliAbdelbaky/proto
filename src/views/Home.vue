<template>
    <div class="smooth-scroll-warpper">
        <navbar />
        <div class="homepage">
            <herosection />
            <div class="mywork">
                <h2>my <span> WORK</span></h2>
                <myworksection
                    v-for="post in workposts"
                    :key="post.id"
                    :className="post.className"
                    :disc="post.disc"
                    :title="post.title"
                    :about="post.about"
                    :btnLink="post.btnLink"
                    :btnName="post.btnName"
                    :fullimagesrc="post.fullimagesrc"
                    :responsiveimagesec="post.responsiveimagesec"
                    :imgdirection="post.imgdirection"
                    :automr="post.automr"
                />
            </div>
            <githubsection />
            <fAQSection />
            <contactsection />
            <footersection />
        </div>
    </div>
</template>

<script>
//- Components
import navbar from "../components/global/navbar";
import herosection from "../components/Home/heroSec";
import myworksection from "../components/Home/myworkSec";
import githubsection from "../components/Home/githubSec";
import fAQSection from "../components/Home/faqSec";
import contactsection from "../components/Home/contactsec";
import footersection from "../components/global/footer";
//---------------------
//- JSON Files
import myworkPosts from "../json/work-section.json";
//-------------------
export default {
    name: "Home",
    components: {
        navbar,
        myworksection,
        githubsection,
        herosection,
        contactsection,
        footersection,
        fAQSection
    },
    data: () => {
        return {
            workposts: myworkPosts
        };
    },
    mounted() {
        //---------------------
        //- GitHub Body BG
        let sections = document.querySelectorAll("section"),
            options = {
                threshold: 0.7
            },
            observer = new IntersectionObserver(bgChanger, options);
        const burgerBtn = document.querySelector("nav .burger-btn");
        function bgChanger(entries) {
            entries.forEach(entry => {
                let className = entry.target.className;
                if (className === "github") {
                    document.body.classList.add("bg-white");
                } else {
                    document.body.classList.remove("bg-white");
                }
                if (className === "faq") {
                    burgerBtn.classList.add("white");
                } else {
                    burgerBtn.classList.remove("white");
                }
            });
        }
        sections.forEach(section => {
            observer.observe(section);
        });
        //------------------------------
    }
};
</script>
