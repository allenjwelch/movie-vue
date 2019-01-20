<template>
    <img class="loading" src="../assets/loading.gif">
</template>


<script>
export default {
    name: "Loading",
    mounted: function() {
        this.redirect();
    },
    methods: {
        redirect() {
            setTimeout(function() {
                location.href = '/watchlist'
            }, 5000);
        }
    }
};
</script>


<style lang="scss">

.loading {
    height: 450px;
    width: 500px;
}
</style>
