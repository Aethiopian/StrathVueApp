<script setup>
import Navbar from './components/Navbar.vue'
import footer from './components/footer.vue'
import Homepage from './components/Homepage.vue'

</script>

<template>
    <v-app>
        <Navbar></Navbar>
        <Homepage></Homepage>
        <main>
            <router-view></router-view>
        </main>
    </v-app>

</template>


