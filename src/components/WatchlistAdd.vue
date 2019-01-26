<template>
    <div class="container">
        <button @click='addToWatchlist'>Add to Watchlist</button>
        <div v-bind:key="index" v-for="index in inWatchlist">
            <div v-if="index === false" class="popup">Added to Watchlist</div>
            <div v-else class="popup">Already in Watchlist</div>
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

</style>
