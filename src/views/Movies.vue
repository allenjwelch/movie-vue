<template>
    <div>
        <MoviesList />
        <TelevisionList />
    </div>
</template>



<script>
import MoviesList from '../components/MoviesList.vue';
import TelevisionList from '../components/TelevisionList.vue';


export default {
    name: "Movies",
    components: {
        MoviesList,
        TelevisionList
    },
}
</script>


<style lang="sass" scoped>

</style>
