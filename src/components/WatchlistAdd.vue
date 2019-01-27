<template>
    <div class="watchlistAdd">
        <div class="container">
            <img  src="../assets/add.png" alt="add" @click='addToWatchlist'>
            <div class="popup" v-bind:key="index" v-for="index in inWatchlist">
                <div v-if="index === false">Added to Watchlist!</div>
                <div v-else>Already in Watchlist!</div>
            </div>
        </div>
    </div>
</template>


<script>
import api from '../router/api';

export default {
  name: "WatchlistAdd",
  props: ['show'],
  data() {
        return {
            loggedIn: false,
            token: '',
            inWatchlist: [],
        }
    },
    created: function() {
        this.checkToken();
    },
    methods: {
        checkToken() {
            if(localStorage.getItem('token') && localStorage.getItem('token') != 'false' && localStorage.getItem('token') != 'true') {
                this.loggedIn = true;
                this.token = localStorage.getItem('token');
            }
        },
        async addToWatchlist() {
            // console.log(this.show)
            let title = this.show.title || this.show.name;
            let id = this.show.id;
            console.log(this.token, title, id);
            this.inWatchlist = await api.postWatchlist(this.token, title, id);
        }
    }
}
</script>


<style lang="scss">

.watchlistAdd {
    position: absolute;
    right: 20px;
    top: 20px;
    height: 50px;
    z-index: 20;

    img {
        height: 50px;
        width: 50px;

        @media (min-width: 1000px) {
            height: 100px;
            width: 100px;
        }
    }

    @media (min-width: 1000px) {
        top: 100px;
        height: 100px;
    }

    .container {
        position: relative;
        height: 50px;

        @media (min-width: 1000px) {
            height: 100px;
        }
        .popup {
            background: #ccc;
            padding: 2px 5px;
            margin: 0px;
            position: absolute;
            bottom: -50px;
            right: 0;
            width: 90px;
            border-radius: 12px;
        }
    }
}
</style>
