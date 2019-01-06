import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Watchlist from '../views/Watchlist.vue';
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
      path: '/watchlist',
      name: 'watchlist',
      component: Watchlist
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
