// router.js
import { createRouter, createWebHistory } from 'vue-router';
import SignIn from  './pages/sign-in.vue'
import SignUp from  './pages/sign-up.vue'
import Feed from  './pages/feed.vue'
import Content from  './pages/content.vue'
import Profile from  './pages/profile.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: SignIn },
        { path: '/sign-up', component: SignUp },
        { path: '/feed', component: Feed },
        { path: '/content', component: Content },
        { path: '/profile', component: Profile },
    ],
});

export default router;