<template>
    <img class="loading" src="../assets/loading.gif">
</template>


<script>
import router from '../router/index';

export default {
    name: "Loading",
    beforeMount: function() {
        // this.methodThatForcesUpdate();
        // console.log('beforemount')
    },
    mounted: function() {
        this.redirect();
        // console.log('mount')
    },
    methods: {
        redirect() {
            setTimeout(function() {
                // location.href = '/watchlist'
                router.push('watchlist')
            }, 2000);

        },
        methodThatForcesUpdate() {
            this.$forceUpdate();
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
