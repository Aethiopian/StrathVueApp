import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import Events from "./../components/Events.vue"
import Coursesoffered from "./../components/Coursesoffered.vue"
import Partnerships from "./../components/ContactUs.vue"
import Alumnipage from "./../components/Alumnipage.vue"
import Library from "./../components/Library.vue"
import AboutUs from "./../components/AboutUs.vue"

const routes = [
    {
        path: '/',
        name: 'homepage',
        component: Homepage,
    },

    {
        path: '/aboutus',
        name: 'About Us',
        component: AboutUs,
    },

    {
        path: '/library',
        name: 'Library',
        component: Library,
    },


    {
        path: '/events',
        name: 'events',
        component: Events,
    },


    {
        path: '/coursesoffered',
        name: 'Coursesoffered',
        component: Coursesoffered,
    },


    {
        path: '/alumnipage',
        name: 'Alumnipage',
        component: Alumnipage,
    },


    {
        path: '/partnerships',
        name: 'Partnerships',
        component: Partnerships,
    },
];

const router = createRouter ({
    history: createWebHistory(),
    routes,
});

export default router