import { createRouter, createWebHistory } from 'vue-router'
import Introduction from './pages/Introduction.vue'
import Installation from './pages/Installation.vue'
import Configuration from './pages/Configuration.vue'
import ApplicationServices from './pages/ApplicationServices.vue'
import PagesAndContent from './pages/PagesAndContent.vue'
import Liquidity from './pages/Liquidity.vue'
import Launchpad from './pages/Launchpad.vue'
import Staking from './pages/Staking.vue'
import Voucher from './pages/Voucher.vue'
import Swap from './pages/Swap.vue'
import ApiDoc from './pages/ApiDoc.vue'
import Troubleshooting from './pages/Troubleshooting.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },  
  history: routerHistory,
  routes: [
    {
      path: '/',
      redirect: '/introduction'
    },
    {
      path: '/introduction',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/installation',
      name: 'Installation',
      component: Installation
    },
    {
      path: '/configuration',
      name: 'Configuration',
      component: Configuration
    },
    {
      path: '/application-services',
      name: 'ApplicationServices',
      component: ApplicationServices
    },
    {
      path: '/pages-and-content',
      name: 'PagesAndContent',
      component: PagesAndContent
    },
    {
      path: '/liquidity',
      name: 'Liquidity',
      component: Liquidity
    },
    {
      path: '/launchpad',
      name: 'Launchpad',
      component: Launchpad
    },
    {
      path: '/staking',
      name: 'Staking',
      component: Staking
    },
    {
      path: '/voucher',
      name: 'Voucher',
      component: Voucher
    },
    {
      path: '/swap',
      name: 'Swap',
      component: Swap
    },
    {
      path: '/api-doc',
      name: 'ApiDoc',
      component: ApiDoc
    },
    {
      path: '/troubleshooting',
      name: 'Troubleshooting',
      component: Troubleshooting
    }
  ]
})

export default router
