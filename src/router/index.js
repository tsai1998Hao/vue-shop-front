import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';  
import Shop_cart from '@/components/Shop_cart.vue';  
import Game_place from '@/components/Game_place.vue';  

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Shop_cart',
    name: 'Shop_cart',
    component: Shop_cart
  },
  {
    path: '/Game_place',
    name: 'Game_place',
    component: Game_place
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
