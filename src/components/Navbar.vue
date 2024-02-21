<script>
import Homepage from "./Homepage.vue"
import Events from "./Events.vue"
import Library from "./Library.vue"
import Coursesoffered from "./Coursesoffered.vue"
import ContactUs from "./ContactUs.vue"
import AlumniPage from "./Alumnipage.vue"
</script>

<template> 
<v-app-bar color="black">
    <div>
        <v-btn to="/" color="white" dark >Homepage </v-btn>
        <v-btn to="/Events" color="white" dark >Events </v-btn>
        <v-btn to="/Library" color="white" dark >Library </v-btn>
        <v-btn to="/AlumniPage" color="white" dark >Alumnipage </v-btn>>
        <v-btn to="/Coursesoffered" color="white" dark >Coursesoffered </v-btn>
        <v-btn to="/ContactUs" color="white" dark >ContactUs </v-btn>
        </div>
</v-app-bar>
</template>