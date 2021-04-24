<template lang="pug">
section.faq
    .container-fluid
        .content
            h2.header FAQ
            hr
            .questions
                .quest.q-one
                    .header
                        h2 What’s the average cost of the project?
                        svg.bi.bi-arrow-down-left-circle.arrow(xmlns='http://www.w3.org/2000/svg' Lenth='Lenght'  fill='currentColor' viewBox='0 0 16 16')
                            path(fill-rule='evenodd' d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904-2.854a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768l4.096-4.097z')
                    p.answer
                        | The final price is directly related to the project scope, timeline, and deliverables. As real project scope, can’t be determined without a formed strategy, the first stage of the project is Discovery.
                        br
                        br
                        | After this stage, we’ll have clear overview of what we building, what resources are required and how much time we’ll need to complete the project. Once we have a clear picture of this, I’ll be able to propose you final price and deadline.
                        br
                        br
                        | For now I can only give you a bull-park range, so the clients I work with previously typically come to me with more than 
                        strong $100
                        |  and less than 
                        strong $1000
                        |  in their budget.
                hr
                .quest.q-two
                    .header
                        h2 How long will take you to revamp our website?
                        svg.bi.bi-arrow-down-left-circle.arrow(xmlns='http://www.w3.org/2000/svg'  Lenth='Lenght' fill='currentColor' viewBox='0 0 16 16')
                            path(fill-rule='evenodd' d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904-2.854a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768l4.096-4.097z')
                    p.answer
                        |It depends on the project scope. But from previous experience, designing and developing new landing page can take up to 2 weeks, while some bigger websites 6-12 pages, can take up to 4-6 weeks.
                hr
                .quest.q-three
                    .header
                        h2 What I can expect on our first conversation?
                        svg.bi.bi-arrow-down-left-circle.arrow(xmlns='http://www.w3.org/2000/svg'  Lenth='Lenght' fill='currentColor' viewBox='0 0 16 16')
                            path(fill-rule='evenodd' d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904-2.854a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768l4.096-4.097z')
                    p.answer
                        | The first step of starting our cooperation is 
                        a(href='mailto:ali.abdelbaky2000@gmail.com?subject=Mail%20from%20website')
                            strong.faq_link 30-minute discovery conversation.
                        |  In this call we’ll try to define your goals, perform problem discovery and identify potential solution to your problem.
                        br
                        br
                        | After our call I’ll send you proposal for discovery session, so you can approve and set a downpayment. Once we complete the the Discovery phase, I’ll be able to compose and deliver a final project proposal, and then we can officially start our project.
</template>
<script>
//- Animation Plugine
import { TimelineMax } from "gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
    name: "FAQSection",
    mounted() {
        //- Toggle answer
        const quests = document.querySelectorAll(
            ".homepage .faq .questions .quest"
        );
        quests.forEach(head => {
            head.addEventListener("click", first);
        });
        function first() {
            switchActive(this);
        }
        function switchActive(dot) {
            quests.forEach(head => {
                head.classList.remove("slide-open");
            });
            dot.classList.add("slide-open");
        }
        //- Animation
        const faqTween = new TimelineMax(),
            faqSection = document.querySelector(".homepage .faq"),
            questsArra = document.querySelectorAll(
                ".homepage .faq .questions .quest"
            ),
            faqHead = faqSection.querySelector(".header");
        faqTween
            .fromTo(
                faqHead,
                0.8,
                { y: "100%", opacity: "0" },
                { y: "0%", opacity: "1" }
            )
            .fromTo(
                questsArra[0],
                0.8,
                { y: "100%", opacity: "0" },
                { y: "0%", opacity: "1" },
                "-=0.6"
            )
            .fromTo(
                questsArra[1],
                0.8,
                { y: "100%", opacity: "0" },
                { y: "0%", opacity: "1" },
                "-=0.4"
            )
            .fromTo(
                questsArra[2],
                0.8,
                { y: "100%", opacity: "0" },
                { y: "0%", opacity: "1" },
                "-=0.8"
            );
        ScrollTrigger.create({
            trigger: faqSection,
            animation: faqTween,
            scrub: 3,
            start: "top 80%",
            end: "+=200"
        });
        //----------------------
        //- Cursor
        let mianCursor = document.querySelector(".cursor .main");
        const faqHeads = faqSection.querySelectorAll(".questions .header"),
            faqanwers = faqSection.querySelectorAll(" .questions .answer");
        faqHeads.forEach(head => {
            head.addEventListener("mouseenter", () => {
                mianCursor.classList.add("filter");
            });
            head.addEventListener("mouseleave", () => {
                mianCursor.classList.remove("filter");
            });
        });
        faqanwers.forEach(answer => {
            answer.addEventListener("mouseenter", () => {
                mianCursor.classList.add("filter");
            });
            answer.addEventListener("mouseleave", () => {
                mianCursor.classList.remove("filter");
            });
        });
    }
};
</script>
