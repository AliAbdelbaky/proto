<template>
    <div class="smooth-scroll-warpper aboutpage">
        <navbar />
        <div class="aboutpage">
            <aboutmesection />
            <picsocialsection />
            <mapsection />
            <footersection />
        </div>
    </div>
</template>
<script>
import navbar from "../components/global/navbar";
//-Aboutme
import aboutmesection from "../components/About/aboutMeSec";
//- Pics Section
import picsocialsection from "../components/About/picSocialSec";
//- Map Section
import mapsection from "../components/About/mabSec";
import footersection from "../components/global/footer";
export default {
    name: "about",
    components: {
        navbar,
        footersection,
        aboutmesection,
        picsocialsection,
        mapsection
    }
};
</script>
