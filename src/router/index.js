import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Index from '@/views/index'
import SecondaryPage from '@/views/SecondaryPage/SecondaryPage'
import Details from '@/views/SecondaryPage/Details'
const Router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/SecondaryPage/SecondaryPage',
            name: 'SecondaryPage',
            component: SecondaryPage
        },
        {
            path: '/SecondaryPage/Details',
            name: 'Details',
            component: Details
        }
    ]
})

export default Router