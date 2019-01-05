<template>
    <div v-if="showMovies" class="movie-display">
        <button class="toggleDisplay" v-on:click="displayToggle">Show TV</button>
        <MoviesList/>
    </div>
    <div v-else class="tv-display">
        <button class="toggleDisplay" v-on:click="displayToggle">Show Movies</button>
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

.toggleDisplay {
  margin: 20px auto 10px;
  border-radius: 8px;
  font: 700 16px Arial;
  padding: 10px 30px;
  width: 166px;
  background: #41B883;
  color: #2c3e50;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  @media (min-width: 900px) {
      position: absolute;
      margin: 0;
      left: 0px;
      top: 50px;
      padding: 15px 20px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-left-radius: 0;
  }
}

</style>
