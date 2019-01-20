<template>
    <button @click='addToWatchlist'>Add to Watchlist</button>
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
        }
    },
    created: function() {
        this.checkToken();
    },
    methods: {
        checkToken() {
            if(localStorage.getItem('token')) {
                this.loggedIn = true;
                this.token = localStorage.getItem('token');
            }
        },
        async addToWatchlist() {
            // console.log(this.show)
            let title = this.show.title || this.show.name;
            let id = this.show.id;
            console.log(this.token, title, id)
            await api.postWatchlist(this.token, title, id)
        }
    }
}
</script>


<style lang="scss">

</style>
