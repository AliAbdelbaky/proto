<template lang="pug">
section.map
    .map-container
        img(src="../../assets/africa.svg", alt="alt")
        svg#cricle-one(width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z' fill='white')
        svg#cricle-one(width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z' fill='white')
    h2 I was born and raised in Egypt , one of the most Ancient countries  in Africa, according to many people.
</template>
<script>
import { gsap } from "gsap";
export default {
    name: "mapsection",
    mounted() {
        const svgAnimation = document.querySelector(".map .map-container svg");
        gsap.to(svgAnimation, 1, { scale: "1.5", opacity: "0", repeat: -1 });
    }
};
</script>
