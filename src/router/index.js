import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Subdashboard from '@/components/Subdashboard'
import Purchaser from '@/components/Purchaser'
import Quotation from '@/components/Quotation'
import Scheduler from '@/components/Scheduler'
import Supervisor from '@/components/Supervisor'
import Account from '@/components/Accounts'
import Client from '@/components/Client'
import Permission from '@/components/Permission'
import Calander from '@/components/Calander'
import Task from '@/components/Task'
import User from '@/components/User'
import Enquiry from '@/components/Enquiry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children:[
        {
          path: '/dashboard',
          name: 'Subdashboard',
          component: Subdashboard
        },
        {
          path: '/purchaser',
          name: 'Purchaser',
          component: Purchaser
        },
        {
          path: '/quotation',
          name: 'Quotation',
          component: Quotation
        },
        {
          path: '/scheduler',
          name: 'Scheduler',
          component: Scheduler
        },
        {
          path: '/supervisor',
          name: 'Supervisor',
          component: Supervisor
        },
        {
          path: '/account',
          name: 'Account',
          component: Account
        },
        {
          path: '/client',
          name: 'Client',
          component: Client
        },
        {
          path: '/permission',
          name: 'Permission',
          component: Permission
        },
        {
          path: '/calander',
          name: 'Calander',
          component: Calander
        },
        {
          path: '/task',
          name: 'Task',
          component: Task
        },
        {
          path: '/user',
          name: 'User',
          component: User
        },
        {
          path: '/enquiry',
          name: 'Enquiry',
          component: Enquiry
        },
      ]
    },
   
  ]
})
