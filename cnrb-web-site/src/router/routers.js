import { createRouter, createWebHistory } from 'vue-router'
import HomePage from   "../components/HomePage"
import Club from "../components/Club"
// import Club from   "../components/Home"


const routes = [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
        path: '/Club',
        name: 'Club',
        component: Club
      }
   
  ]
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  export default router