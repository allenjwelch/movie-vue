import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import SignIn from '../views/SignIn.vue';
import Watchlist from '../views/Watchlist.vue';
import Admin from '../views/Admin.vue';
import Search from '../views/Search.vue';
import Discover from '../views/Discover.vue';
import MovieDetail from '@/components/MovieDetail';
import TVShowDetail from '@/components/TVShowDetail';

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
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/watchlist',
      name: 'watchlist',
      component: Watchlist
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin
      },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/discover/',
      name: 'discover',
      component: Discover
    },
    {
      path: '/discover/movie/:id',
      name: 'movieDetail',
      component: MovieDetail
    },
    {
      path: '/discover/tv/:id',
      name: 'tvShowDetail',
      component: TVShowDetail
    }
  ]
});
