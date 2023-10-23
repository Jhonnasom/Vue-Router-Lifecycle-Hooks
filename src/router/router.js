
import { createRouter, createWebHashHistory } from 'vue-router'

// 2. Define some routes
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/*webpackChunkName:"ListPage"*/'../modules/pokemon/pages/ListPage')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/*webpackChunkName:"AboutPage"*/'../modules/pokemon/pages/AboutPage')
  },
  {
    path: '/pokemonid/:id',
    name: 'pokemon-id',
    component: () => import(/*webpackChunkName:"PokemonPage"*/'@/modules/pokemon/pages/PokemonPage'),
    props: (route) => {
      const id = Number(route.params.id)
      return isNaN(id) ? { id: 1 } : { id }
    }
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