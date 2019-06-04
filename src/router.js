import Vue from 'vue'
import Router from 'vue-router'
// imports components to router
import Home from '@/components/Home.vue'
// imports userProfile component
import UserProfile from '@/components/UserProfile.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // route to user profile matching id 
    {
      path: '/user/:id',
      name: 'UserProfile',
      component: UserProfile
    }
  ]
})
