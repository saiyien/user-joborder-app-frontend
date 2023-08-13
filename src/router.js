import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './views/HomePage.vue';
import LoginPage from "./components/LoginPage.vue";
import UserList from './components/UserList.vue';
import UserDetails from './components/UserDetails.vue';
import UserUpdate from './components/UserUpdate.vue';
import CreateUser from "./components/CreateUser.vue"; 

const routes = [
  { path: '/', component: HomePage },
  { path: "/login", component: LoginPage }, 
  { path: '/users', component: UserList }, 
  { path: '/user/:id/details', component: UserDetails },
  { path: '/user/:id/update', component: UserUpdate },
  { path: "/create-user", component: CreateUser }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
