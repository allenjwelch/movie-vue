<template>
    <section class="watchlist">
        <div v-if="loggedIn" class="loggedIn">
            <h1>Your Watchlist</h1>
            <ul v-if="watchlist.length > 0" >
                <li class="watchlist-card" v-bind:key="watch.id" v-for="watch in watchlist">
                    {{watch.title}}
                    <img @click="deleteTitle" :data-id="watch.title_id" src="../assets/delete.png" alt="delete">
                </li>
            </ul>
            <h5 v-else>You do not have any shows in your watchlist...</h5>
        </div>
        <div v-else class="logged">
            <h1>Please log in to view your watchlist</h1>
        </div>
    </section>
</template>

<script>
import api from '../router/api';
// import Vue from 'vue';
// Vue.forceUpdate();

export default {
    name: 'Watchlist',
    data() {
        return {
            loggedIn: false,
            token: '',
            watchlist: [],
        }
    },
    // beforeCreate: function() {
    //     // this.methodThatForcesUpdate();
    // },
    // created: function() {
    //     // console.log('created')
    // },
    beforeMount: function() {
        this.checkToken();
        // console.log('beforemount')
    },
    mounted: function() {
        this.getWatchlist();
        // console.log('mount')
    },
    // beforeUpdate: function() {
    //     // console.log('beforeupdate')
    // },
    // updated: function() {
    //     // console.log('update')
    // },
    methods: {
        checkToken() {
            if(localStorage.getItem('token') && localStorage.getItem('token') != 'false' && localStorage.getItem('token') != 'true') {
                this.loggedIn = true;
                this.token = localStorage.getItem('token');
            }
        },
        async getWatchlist() {
            this.watchlist = await api.getWatchlist(this.token);
            console.log(this.watchlist);
        },
        async deleteTitle(id) {
            let title_id = event.currentTarget;
            title_id = title_id.getAttribute('data-id');
            await api.deleteFromWatchlist(this.token, title_id).then(
                this.getWatchlist()
            )
        },
        // methodThatForcesUpdate() {
        //     this.$forceUpdate();
        // }
    }
}
</script>

<style lang="scss" scoped>
.watchlist {
    max-width: 95%;
    width: 80%;
    height: 100%;
    margin: 0 auto;
    padding-top: 50px;

    ul {
        list-style-type: none;
        padding: 0;

        .watchlist-card {
            padding: 15px 25px;
            margin: 10px auto;
            text-align: left;
            box-shadow: 0 0 10px #ccc;
            transition: all .5s;
            position: relative;

            img {
                position: absolute;
                right: 15px;
                top: 8px;
                height: 20px;
                padding: 6px;
                cursor: pointer;
            }

            &:hover {
                box-shadow: 0 0 20px #ccc;
                transform: scale(1.1);
            }
        }
    }

}
</style>


