<template>
    <div>
        <!-- <router-link :to="tvPath"> -->
            <img :src="posterImage" :alt="tvShow.title" />
        <!-- </router-link> -->
    </div>
</template>



<script>
// import TelevisionList from './TelevisionList.vue';

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";

export default {
    name: "TVShow",
    components: {
        // TelevisionList,
    },
    props: ['tvShow'],
    computed: {
        posterImage: function() {
            return `${POSTER_PATH}/${this.tvShow.poster_path}`;
        },
        tvPath: function() {
            return `/tvShow/${this.tvShow.id}`;
        }
    }
}
</script>


<style lang="scss" scoped>
img {
    box-shadow: 0 0 35px #333;
}
</style>
