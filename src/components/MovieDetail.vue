<template>
    <transition name="fade">
        <div class="movie-wrapper" :style="styles">
            <div class="movie-info">
                <BackBtn />
                <WatchlistAdd v-if="loggedIn" :show="movie"/>
                <h1>{{ movie.title }}</h1>
                <h3>Release Date: {{ movie.release_date }}</h3>
                <h3>Vote Average: {{ movie.vote_average }}</h3>
                <h3>Genre: {{ movieGenres }}</h3>
                <p>{{movie.overview}}</p>
            </div>
        </div>
    </transition>
</template>


<script>
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";
import BackBtn from "./BackBtn.vue"
import WatchlistAdd from "./WatchlistAdd.vue"

export default {
    components: {
      BackBtn,
      WatchlistAdd,
    },
    data() {
        return {
            movie: {},
            token: '',
            loggedIn: false,

        };
    },
    created: function() {
        this.fetchData();
        this.checkToken();
    },
    computed: {
        styles() {
            return {
                background: `url(${BACKDROP_PATH}/${
                    this.movie.backdrop_path
                }) no-repeat`
            };
        },
        movieGenres: function() {
          let movieGenreList = [];
          this.movie.genres.forEach(index => {
              movieGenreList.push(index.name);
          });
          return movieGenreList.join(", ");
        }
    },

    methods: {
        fetchData: async function() {
            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/movie/${
                        this.$route.params.id
                    }?api_key=253f8b80b150f44540f78217551365ee`
                );
                const movie = await res.json();
                this.movie = movie;
                console.log(movie);
            } catch (e) {
                console.log(e);
            }
        },
        checkToken() {
            if(localStorage.getItem('token') && localStorage.getItem('token') != 'false' && localStorage.getItem('token') != 'true') {
                this.loggedIn = true;
                this.token = localStorage.getItem('token');
            }
        },
    },
};
</script>


<style lang="scss" scoped>
.movie-wrapper {
    position: relative;
    padding-top: 0vh;
    background-size: cover !important;
    background-position: 50% 0% !important;
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
        opacity: 0.7;
        max-height: 50%;
        overflow: scroll;
        border-bottom: 20px solid #fff;

        h1 {
          margin: 0px auto 10px;
          padding: 0 30px;
        }
        h3 {
          margin: 0;
        }

        // p {
        //     max-height: 120px;
        //     overflow: scroll;
        // }
    }
}
</style>
