import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Stats from "./components/Stats.vue"
import Home from "./components/Home.vue"

import Map from "./components/Map.vue"
import Tweets from "./components/Tweets.vue"
import Contacts from "./components/Contacts.vue"

const routes = [
    {
        path: "/stats",
        component: Stats
    },
    {
        path: "/",
        component: Home
    },
    {
        path: "/map",
        component: Map
    },
    {
        path: "/tweets",
        component: Tweets
    },
    {
        path: "/contacts",
        component: Contacts
    }

]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});

export { router };