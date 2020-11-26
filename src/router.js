import { createRouter, createWebHistory } from "vue-router";
const Home =()=>import('./view/Home.vue')
const File =()=>import('./view/File.vue')
const Tag =()=>import('./view/Tag.vue')
const About =()=>import('./view/About.vue')
const routes = [{
        path: "/",
        redirect:'/home'
    },
    {
        path:'/home',
        name:Home,
        component:Home
    },
    {
        path:'/file',
        name:File,
        component:File
    },
    {
        path:'/tag',
        name:Tag,
        component:Tag
    },
    {
        path:'/about',
        name:About,
        component:About
    }
    // {
    //   path: "/about",
    //   name: "About",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/About.vue")
    // }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;