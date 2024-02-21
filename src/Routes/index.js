import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import Events from "./../components/Events.vue"
import Coursesoffered from "./../components/Coursesoffered.vue"
import Partnerships from "./../components/ContactUs.vue"
import Alumnipage from "./../components/Alumnipage.vue"

const routes = [
    {
        path: '/',
        name: 'homepage',
        component: Homepage,
    },

    {
        path: '/',
        name: 'About Us',
        component: Homepage,
    },

    {
        path: '/Library',
        name: 'Library',
        component: Homepage,
    },


    {
        path: '/Events',
        name: 'events',
        component: Events,
    },


    {
        path: '/Coursesoffered',
        name: 'Coursesoffered',
        component: Coursesoffered,
    },


    {
        path: '/Alumnipage',
        name: 'Alumnipage',
        component: Alumnipage,
    },


    {
        path: '/Partnerships',
        name: 'Partnerships',
        component: Partnerships,
    }
]
    



const router = createRouter ({
    history: createWebHistory(),
    routes,
},
)
export default router