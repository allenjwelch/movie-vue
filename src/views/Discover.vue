<template>
    <div v-if="showMovies" class="movie-display">
        <button v-on:click="displayToggle">Show TV</button>
        <MoviesList/>
    </div>
    <div v-else class="tv-display">
        <button v-on:click="displayToggle">Show Movies</button>
        <TelevisionList />
    </div>
</template>



<script>
import MoviesList from '../components/MoviesList.vue';
import TelevisionList from '../components/TelevisionList.vue';


export default {
  name: "Discover",
  components: {
      MoviesList,
      TelevisionList
  },
  data() {
    return {
      showMovies: true,
      showTv: false
    }
  },
  methods: {
    displayToggle: function() {
      if(this.showMovies) {
        this.showMovies = false;
        this.showTv = true;
      } else {
        this.showMovies = true;
        this.showTv = false;
      }
    }
  }
}
</script>


<style lang="scss" scoped>

button {

  position: absolute;
  top: 60px;
  left: 5px;
  border-radius: 8px;
  font: 700 16px Arial;

  &:focus {
    outline: none;
  }
}

</style>
