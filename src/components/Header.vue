<template>
    <section class="header">
        <router-link to="/">
            <img class="header-title" src="../assets/MovieVue.png" alt="">
        </router-link>

        <!-- <transition name="fade">
            <h1 v-if="show">Animated</h1>
        </transition>
            <button @click="show = !show">Show/Hide</button> -->

        <nav class="navbar">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/todolist">Todo List</router-link></li>
                <li><router-link to="/examples">Examples</router-link></li>
                <li><router-link to="/movies">Movies</router-link></li>
            </ul>
        </nav>

        <nav id="topNav" class="navbar navbar-mobile">
            <span id="burger" v-on:click="navToggle">
                <span class="line1"></span>
                <span class="line2"></span>
                <span class="line3"></span>
            </span>

            <ul class="navbar dropdown">
                <li v-on:click="closeMenu"><router-link to="/">Home</router-link></li>
                <li v-on:click="closeMenu"><router-link to="/todolist">Todo List</router-link></li>
                <li v-on:click="closeMenu"><router-link to="/examples">Examples</router-link></li>
                <li v-on:click="closeMenu"><router-link to="/movies">Movies</router-link></li>
            </ul>
        </nav>
    </section>

</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String
    },
    data() {
        return {
            name: 'Allen',
            show: false,
        }
    },
    methods: {
        navToggle: function() {
            document.getElementById('topNav').classList.toggle('active');
        },
        closeMenu: function() {
            document.getElementById('topNav').classList.toggle('active');
        }
    }
}
</script>

<style lang="scss">
.header {
    height: 50px;
    width: 100%;
    background: #333;
    position: relative;
    z-index: 1;

    .header-title {
        height: 40px;
        margin: 0;
        position: absolute;
        left: 20px;
        top: 6px;
        color: #fff;
    }

    h1 {
        margin: 0;
        color: #fff;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all 0.3s ease;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
        transform: scale(0);
    }

    // name-enter -> name-enter-to
    // name-enter-active
    // name-leave -> name-leave-to
    // name-leave-active

    .navbar {
        float: right;
        ul {
            li {
                display: inline-block;
                padding: 0 20px;
                &:not(:last-child) {
                    border-right: 1px solid #fff;
                }
                a {
                    text-decoration: none;
                    color: #fff;
                }
            }
        }

        display: none;
        @media (min-width: 768px) {
            display: block;
        }

    }

    .navbar-mobile {
        display: block;
        @media (min-width: 768px) {
            display: none;
        }

        .line1, .line2, .line3 {
            margin-top:5px;
            background-color:#fff;
            width:25px;
            height:3px;
            display:block;
            position:relative;
            opacity:1.0;
            border-radius:15%;
            transition: all .3s;
        }

        // .line1.active {
        //     transform: rotate(270deg);
        //     opacity:0.0;
        //     background-color:yellow;
        //     top:5px;
        // }

        // .line2.active {
        //     transform: rotate(45deg);
        //     background-color:yellow;
        // }

        // .line3.active {
        //     transform: rotate(-45deg);
        //     background-color:yellow;
        //     top:-7px;
        // }

        #burger {
            float: right;
            margin: 8px 15px;
        }


        &.active {
            width: 100%;

            .dropdown {
                display: block;
                margin-top: 10px;
                padding: 10px;
                width: 100%;
                background: #333;
                // transition: top 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
                animation: drop .5s;
                z-index: 10;

                li {
                    display: block;
                    border-right: none;
                    margin-bottom: 10px;
                    a{
                        font: 400 20px Helvetica, Arial, sans-serif;
                        color: #fff;
                    }
                }
            }
        }
    }

}

@keyframes drop{
    0%{margin-top: -200px}
    100%{margin-top: 10px}
}
</style>


