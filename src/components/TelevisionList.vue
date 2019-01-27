import { async } from 'q';

<template>
    <div>
        <h1>Today's Most Popular TV Shows</h1>
        <div class="tvShow-container">
            <ul>
                <li :key="tvShow.id" v-for="tvShow in tvShows">
                    <TVShow :tvShow="tvShow"/>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import TVShow from './TVShow.vue';

export default {
    name: "tvShowsList",
    components: {
        TVShow,
    },
    data() {
        return {
            tvShows: []
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData: async function() {
            try {
                const res = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=253f8b80b150f44540f78217551365ee&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false');
                const tvShows  = await res.json();
                this.tvShows = tvShows.results;
            } catch(e) {
                console.log(e);
            }
        }
    }
}
</script>


<style lang="scss" scoped>
ul {
    display: grid;
    list-style: none;
    padding: 10px;
    margin: 0;
    grid-row-gap: 20px;
    grid-template-columns: repeat(2, 1fr);

    @media (min-width: 551px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(6, 1fr);
    }

    li {
        margin: 10px;
    }
}
</style>
