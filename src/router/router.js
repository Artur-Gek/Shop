import {
    createRouter,
    createWebHistory
} from "vue-router";
import tshort from "@/pages/tshort.vue";
import cap from "@/pages/cap.vue";
import hat from "@/pages/hat.vue";
import shop from "@/pages/shop.vue";



const routes = [{
        path: '/tshort',
        name: 'tshort',
        component: tshort
    },
    {
        path: '/cap',
        name: 'cap',
        component: cap
    },
    {
        path: '/hat',
        name: 'hat',
        component: hat
    }, {
        path: '/',
        name: 'shop',
        component: shop
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BAS_URL),
    routes

})

export default router;