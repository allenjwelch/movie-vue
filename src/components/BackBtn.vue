<template>
    <img class="backBtn" v-on:click="goBack" src="../assets/back_arrow.png" />
</template>


<script>
export default {
  name: "BackBtn",
  methods: {
    goBack: function() {
          window.history.back(-1);
        }
  }
}
</script>


<style lang="scss">
.backBtn {
  position: absolute;
  left: 20px;
  top: 20px;
  height: 50px;
  filter: opacity(50%);
  cursor: pointer;

  @media (min-width: 1000px) {
    top: 100px;
    height: 100px;
  }
}
</style>
