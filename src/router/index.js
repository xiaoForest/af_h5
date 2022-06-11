import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Index from '@/views/index'
import Page from '@/views/page'
const Router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '',
            name: 'index',
            component: Index
        },
        {
            path: '/page',
            name: 'page',
            component: Page
        }
    ]
})

export default Router