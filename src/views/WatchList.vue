<template>
    <section class="watchlist">
        <h1>Coming Soon!</h1>
        <p>Be patient! Soon you'll be able to create an account, sign in, and save movies and tv shows to your watchlist!</p>
    </section>
</template>

<script>
import api from '../router/api';

export default {
    name: 'Watchlist',
    data() {
        return {
            user: '',
        }
    },
    created: function() {
        // this.getToken();
    },
    methods: {
        // async getToken() {
        //     this.user = await api.getToken();
        // }
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


