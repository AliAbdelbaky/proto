<template>
    <router-view />
    <div class="cursor">
        <span class="main"></span>
        <span class="secound"></span>
    </div>
</template>
<script>
import gsap from "gsap";
export default {
    name: "app",
    mounted() {
        let mianCursor = document.querySelector(".cursor .main"),
            secoundCursor = document.querySelector(".cursor .secound");
        window.addEventListener("mousemove", cursor);
        function cursor(e) {
            gsap.to(secoundCursor, 0.4, {
                x: e.clientX,
                y: e.clientY
            });
            gsap.to(mianCursor, 1, {
                x: e.clientX ,
                y: e.clientY 
            });
        }
        document.addEventListener("mouseenter", () => {
            mianCursor.classList.remove("filter");
        });
    }
};
</script>
