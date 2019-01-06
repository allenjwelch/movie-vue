<template>
    <div>
        <!-- <router-link :to="moviePath"> -->
            <figure v-if="result.profile_path">
                <img :src="profileImage" :alt="profile" />
                <figcaption>{{result.name}}</figcaption>
            </figure>
            <figure v-else>
                <img v-if="result.poster_path" :src="posterImage" :alt="poster" />
                <h5 class="noPoster" v-else>{{result.name || result.title}}</h5>
                <figcaption id="media">{{result.media_type}}</figcaption>
            </figure>
        <!-- </router-link> -->
    </div>
</template>



<script>

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";

export default {
    name: "SearchResults",
    components: {
    },
    props: ['result'],
    computed: {
        posterImage: function() {
            return `${POSTER_PATH}/${this.result.poster_path}`;
        },
        profileImage: function() {
            return `${POSTER_PATH}/${this.result.profile_path}`;
        },
        moviePath: function() {
            return `/discover/movie/${this.result.id}`;
        },

    }
}
</script>


<style lang="scss" scoped>
img {
    box-shadow: 0 0 35px #333;
}

#media {
    text-transform: capitalize;
    font-style: italic;
}

.noPoster {
    padding: 95px 0;
    box-shadow: 0 0 35px #333;
}
</style>
