<template>
    <section class="watchlist">
        <div v-if="loggedIn" class="loggedIn">
            <h1>Your Watchlist</h1>
            <ul>
                <li v-bind:key="watch.id" v-for="watch in watchlist">{{watch.title}}</li>
            </ul>
        </div>
        <div v-else class="logged">
            <h1>Please log in to view your watchlist</h1>
        </div>
    </section>
</template>

<script>
import api from '../router/api';

export default {
    name: 'Watchlist',
    data() {
        return {
            loggedIn: false,
            token: '',
            watchlist: [],
        }
    },
    created: function() {
        this.checkToken();
    },
    mounted: function() {
        this.getWatchlist();
    },
    methods: {
        checkToken() {
            if(localStorage.getItem('token')) {
                this.loggedIn = true;
                this.token = localStorage.getItem('token');
            }
        },
        async getWatchlist() {
            this.watchlist = await api.getWatchlist(this.token);
            console.log(this.watchlist);
        }
    }
}
</script>

<style lang="scss" scoped>
.watchlist {
    max-width: 415px;
    width: 80%;
    height: 100%;
    margin: 0 auto;
    padding-top: 50px;
}
</style>


