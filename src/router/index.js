import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Index from '@/views/index'
import SecondaryPage from '@/views/SecondaryPage/SecondaryPage'
import Details from '@/views/SecondaryPage/Details'
import Withdrawals from  '@/views/withdrawals/withdrawals'
import Withdrawals1 from '@/views/withdrawals/withdrawals1'
import Withdrawals2 from '@/views/withdrawals/withdrawals2'
import WithdrawalsDetails from '@/views/withdrawals/withdrawalsDetails'
import Loans from '@/views/loans/loans'
import LoansDetails from '@/views/loans/loansDetails'
import Employment from '@/views/employment/employment'
import EmploymentDetails from '@/views/employment/employmentDetails'
import NetworkDetails from '@/views/network/networkDetails'
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
        },
        {
            path: '/withdrawals/withdrawals',
            name: 'withdrawals',
            component: Withdrawals
        },
        {
            path: '/withdrawals/withdrawals1',
            name: 'withdrawals1',
            component: Withdrawals1
        },
        {
            path: '/withdrawals/withdrawals2',
            name: 'withdrawals2',
            component: Withdrawals2
        },
        {
            path: '/withdrawals/withdrawalsDetails',
            name: 'withdrawalsDetails',
            component: WithdrawalsDetails
        },
        {
            path: '/loans/loans',
            name: 'loans',
            component: Loans
        },
        {
            path: '/loans/loansDetails',
            name: 'loansDetails',
            component: LoansDetails
        },
        {
            path: '/employment/employment',
            name: 'employment',
            component: Employment
        },
        {
            path: '/employment/employmentDetails',
            name: 'employmentDetails',
            component: EmploymentDetails
        },
        {
            path: '/network/networkDetails',
            name: 'networkDetails',
            component: NetworkDetails
        }
    ]
})

export default Router