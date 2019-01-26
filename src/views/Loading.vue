<template>
    <!-- <img class="loading" src="../assets/loading.gif"> -->
    <div class="img-container">
        <img src="../assets/MovieVue.png">
        <div class="loading">
            <div class="progress"></div>
        </div>
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

    img {
        margin: 80px auto 20px;
        height: 200px;
        width: 200px;
    }
}

// #loading {
//     margin: 80px auto 20px;
//     height: 200px;
//     width: 200px;
//     animation-name: scale;
//     animation-duration: 4s;
// }

@keyframes scale {
    from {height: 200px; width: 200px;}
    to {height: 500px; width: 500px;}
}

.loading {
    height: 30px;
    width: 355px;
    margin: 0 auto;
    border: 2px solid #333;
    border-radius: 24px;
    overflow: hidden;

    .progress {
        background: linear-gradient(30deg, #35495E, #41B883);
        height: 35px;
        width: 0%;
        animation-name: loading;
        animation-duration: 2s;
        animation-iteration-count: infinite;

    }
}

@keyframes loading {
    from {width: 0%}
    to {width: 100%}
}

</style>
