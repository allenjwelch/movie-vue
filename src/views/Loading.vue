<template>
    <!-- <img class="loading" src="../assets/loading.gif"> -->
    <div class="img-container">
        <img id="loading" src="../assets/MovieVue.png">
    </div>
</template>


<script>
import router from '../router/index';

export default {
    name: "Loading",
    mounted: function() {
        this.redirect();
    },
    methods: {
        redirect() {
            setTimeout(function() {
                // location.href = '/watchlist'
                router.push('watchlist')
            }, 2000);

        },
        // methodThatForcesUpdate() {
        //     this.$forceUpdate();
        // }
    }
};
</script>


<style lang="scss">

.img-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
}

#loading {
    margin: 80px auto 20px;
    height: 200px;
    width: 200px;
    animation-name: scale;
    animation-duration: 4s;
}

@keyframes scale {
    from {height: 200px; width: 200px;}
    to {height: 500px; width: 500px;}
}
</style>
