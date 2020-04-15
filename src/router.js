import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import EventCreate from './views/EventCreate.vue';
import EventShow from './views/EventShow.vue';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: 'create-event',
            name: 'create-event',
            component: EventCreate
        },
        {
            path: 'event',
            name: 'event',
            component: EventShow
        }
    ]
});