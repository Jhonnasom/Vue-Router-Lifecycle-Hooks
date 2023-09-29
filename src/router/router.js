
import ListPage from "@/modules/pokemon/pages/ListPage"
import PokemonPage from "@/modules/pokemon/pages/PokemonPage.vue"
import NoPageFound from "@/modules/shared/pages/NoPageFound.vue"
import { createRouter, createWebHashHistory } from 'vue-router'

// 2. Define some routes
const routes = [
  {
    path: '/',
    component: ListPage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/id',
    component: PokemonPage
  },
  // catch all 404
  {
    path: '/:pathMatch(.*)*',
    component: NoPageFound
  },
]

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router