<template>
    <transition name="fade">
        <div class="tvShow-wrapper" :style="styles">
            <BackBtn />
            <WatchlistAdd v-if="loggedIn" :show="tvShow"/>
            <div class="tvShow-info">
                <h1>{{ tvShow.name }}</h1>
                <h3>Vote Average: {{ tvShow.vote_average }}</h3>
                <h4>First Aired: {{ tvShow.first_air_date }}</h4>
                <h4>{{ tvShow.number_of_seasons }} Seasons</h4>
                <h4>{{ tvShow.number_of_episodes }} Episodes</h4>
                <h4>Network: {{ tvShow.networks[0].name }}</h4>
                <p>{{tvShow.overview}}</p>
            </div>
        </div>
    </transition>
</template>


<script>
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";
import BackBtn from "./BackBtn.vue"
import WatchlistAdd from "./WatchlistAdd.vue"

export default {
    data() {
        return {
            tvShow: {},
            token: '',
            loggedIn: false,
        };
    },
    components: {
      BackBtn,
      WatchlistAdd,
    },
    created: function() {
        this.fetchData();
        this.checkToken();
    },
    computed: {
        styles() {
            return {
                background: `url(${BACKDROP_PATH}/${
                    this.tvShow.backdrop_path
                }) no-repeat`
            };
        }
    },
    methods: {
        fetchData: async function() {
            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/tv/${
                        this.$route.params.id
                    }?api_key=253f8b80b150f44540f78217551365ee`
                );
                const tvShow = await res.json();
                this.tvShow = tvShow;
                console.log(tvShow);
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
    }
};
</script>


<style lang="scss" scoped>
.tvShow-wrapper {
    position: relative;
    padding-top: 0vh;
    background-size: cover !important;
    background-position: 50% 100% !important;
    min-height: calc(100vh - 50px - 30px);

    .tvShow-info {
        background: #fff;
        color: #222;
        padding: 20px 10%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        width: auto;
        opacity: 0.8;

        h4 {
            margin: 0;
        }
    }
}
</style>
