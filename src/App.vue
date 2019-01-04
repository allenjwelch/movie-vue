<template>
  <div id="app">
    <Header :title="title"/>
    <div class="main">
        <!-- <transition name="fade"> -->
            <router-view></router-view>
        <!-- </transition> -->
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
  data() {
      return {
          title: "Movie Vue",
      }
  },

}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .main {
    // padding: 20px;
    min-height: calc(100vh - 50px - 30px - 40px);

  }

  .fade-enter-active, .fade-leave-active {
        transition: all 0.3s ease;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
        transform: translateX(100%);
    }
}
</style>
