import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import TodoList from '../views/TodoList.vue';
import Examples from '../views/Examples.vue';
import Movies from '../views/Movies.vue';
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
      path: '/movies/',
      name: 'movies',
      component: Movies
    },
    {
      path: '/movie/:id',
      name: 'movieDetail',
      component: MovieDetail
    }
  ]
});
