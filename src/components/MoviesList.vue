import { async } from 'q';

<template>
    <div>
        <h1>Today's Most Popular Movies</h1>
        <div class="movie-container">
            <ul>
                <li :key="movie.id" v-for="movie in movies">
                    <Movie :movie="movie"/>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import Movie from './Movie.vue';

export default {
    name: "MoviesList",
    components: {
        Movie,
    },
    data() {
        return {
            movies: []
        }
    },
    beforeCreate() {
    //   console.log('before create');
    },
    created() {
        // console.log('create');
        this.fetchData();
    },
    beforeMount() {
        // console.log('before mount');
    },
    mounted() {
        // console.log('mounted');
    },
    beforeUpdate() {
        // console.log('before update');
    },
    updated() {
        // console.log('updated');
    },
    methods: {
        fetchData: async function() {
            try {
                const res = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=253f8b80b150f44540f78217551365ee');
                const movies  = await res.json();
                this.movies = movies.results;
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
    grid-template-columns: repeat(1, 1fr);

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
