<template>
        <transition name="fade">

    <div class="movie-wrapper" :style="styles">
        <div class="movie-info">
            <h1>{{ movie.title }}</h1>
            <h3>Release Date: {{ movie.release_date }}</h3>
            <p>{{movie.overview}}</p>
        </div>
    </div>

        </transition>
</template>


<script>

const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

export default {
    data() {
        return {
            movie: {}
        };
    },
    created: function() {
        this.fetchData();
    },
    computed: {
        styles() {
            return {
                background: `url(${BACKDROP_PATH}/${this.movie.backdrop_path}) no-repeat`
            }
        }
    },
    methods: {
        fetchData: async function() {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=253f8b80b150f44540f78217551365ee`);
                const movie  = await res.json();
                this.movie = movie;
                // console.log(movie);
            } catch(e) {
                console.log(e);
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.movie-wrapper {
    position:relative;
    padding-top: 0vh;
    background-size: cover !important;
    background-position: 50% 100% !important;
    min-height: calc(100vh - 50px - 30px);


    .movie-info {
        background: #fff;
        color: #222;
        padding: 20px 10%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        width: auto;
        opacity: .8;
    }
}
</style>
