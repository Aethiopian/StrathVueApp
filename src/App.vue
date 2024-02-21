<script setup>
import Navbar from './components/Navbar.vue'
import footer from './components/footer.vue'

</script>

<template>
    <v-app>
        <Navbar></Navbar>
        
        <main>
            <router-view></router-view>
        </main>
    </v-app>

</template>


