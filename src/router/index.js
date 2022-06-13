import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Index from '@/views/index'
import Deposite from '@/views/deposite/deposite'
import Details from '@/views/deposite/details'
const Router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '',
            name: 'index',
            component: Index
        },
        {
            path: '/deposite/deposite', // 缴存首页
            name: 'deposite',
            component: Deposite
        },
        {
            path: '/deposite/details',
            name: 'details',
            component: Details
        }
    ]
})

export default Router