<template>
    <section>
        <img class="appLogo" alt="logo" src="../assets/MovieVue.png">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore pariatur omnis qui, eaque consequatur vel quidem labore temporibus quo eius numquam at! Molestiae alias vel, libero odit quae dicta ex debitis nisi voluptatem dignissimos impedit? Temporibus error, unde mollitia dolore magnam quasi aspernatur voluptatem ab nobis sit deserunt modi. Rerum?</p>
    </section>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld,
    }
}
</script>

<style lang="scss">
section {
  height: 100%;
}
.appLogo {
  margin: 50px auto 20px;
  height: 200px;
  width: 200px;

  @media (min-width: 550px) {
    height: 350px;
    width: 350px;
  }
}

p {
  width: 90%;
  margin: 10px auto;
}


</style>


