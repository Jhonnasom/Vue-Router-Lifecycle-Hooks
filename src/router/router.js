
import { createRouter, createWebHashHistory } from 'vue-router'

// 2. Define some routes
const routes = [
  {
    path: '/',
    component: () => import(/*webpackChunkName:"ListPage"*/'../modules/pokemon/pages/ListPage')
  },
  {
    path: '/about',
    component: () => import(/*webpackChunkName:"AboutPage"*/'../modules/pokemon/pages/AboutPage')
  },
  {
    path: '/id',
    component: () => import(/*webpackChunkName:"PokemonPage"*/'../modules/pokemon/pages/PokemonPage')
  },
  // catch all 404
  {
    path: '/:pathMatch(.*)*',
    component: () => import(/*webpackChunkName:"NoPageFound"*/'@/modules/shared/pages/NoPageFound')
  }
]

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router