import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import TodoList from '../views/TodoList.vue';
import Examples from '../views/Examples.vue';
import Discover from '../views/Discover.vue';
import MovieDetail from '@/components/MovieDetail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: TodoList
    },
    {
      path: '/examples',
      name: 'examples',
      component: Examples
    },
    {
      path: '/discover/',
      name: 'discover',
      component: Discover
    },
    {
      path: '/discover/:id',
      name: 'movieDetail',
      component: MovieDetail
    }
  ]
});
