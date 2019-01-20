import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import SignIn from '../views/SignIn.vue';
import Loading from '../views/Loading.vue';
import Watchlist from '../views/Watchlist.vue';
import Admin from '../views/Admin.vue';
import Search from '../views/Search.vue';
import Discover from '../views/Discover.vue';
import MovieDetail from '@/components/MovieDetail';
import TVShowDetail from '@/components/TVShowDetail';
// import Auth from '@okta/okta-vue'
// import PostsManager from '@/components/PostsManager'

// Vue.use(Auth, {
//     issuer: 'https://dev-885898.oktapreview.com/oauth2/default',
//     client_id: '0oaizv8hncdFtMdOz0h7',
//     redirect_uri: 'http://localhost:8080/implicit/callback',
//     scope: 'openid profile email'
//   })

Vue.use(Router);

let router = new Router({
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
            path: '/loading',
            name: 'loading',
            component: Loading
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

// router.beforeEach(Vue.prototype.$auth.authRedirectGuard());

export default router;
