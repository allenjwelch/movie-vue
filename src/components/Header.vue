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
                <li v-if="!loggedIn" v-on:click="modal">Sign-In</li>
                <li v-else v-on:click="logout">Sign-Out</li>
                <li><router-link to="/discover">Discover</router-link></li>
                <li><router-link to="/search">Search</router-link></li>
                <li><router-link to="/watchlist">WatchList</router-link></li>

            </ul>
        </nav>

        <nav id="topNav" class="navbar navbar-mobile">
            <span id="burger" v-on:click="navToggle">
                <span class="line1"></span>
                <span class="line2"></span>
                <span class="line3"></span>
            </span>

            <ul class="navbar dropdown" v-on:click="closeMenu">
                <li v-if="!loggedIn" v-on:click="modal">Sign-In</li>
                <li v-else v-on:click="logout">Sign-Out</li>
                <li ><router-link to="/discover">Discover</router-link></li>
                <li ><router-link to="/search">Search</router-link></li>
                <li ><router-link to="/watchlist">Watchlist</router-link></li>
            </ul>
        </nav>

        <div id="modal">
            <div class="signin">
                <div class="popup-container">
                    <div  class="popup register" v-bind:key="index" v-for="index in registerFail">
                        <p v-if="index === true">Email address is already in use.</p>
                    </div>
                    <div  class="popup login" v-bind:key="index" v-for="index in loginFail">
                        <p v-if="index === true">Email or Password is in correct</p>
                    </div>
                </div>
                <div class="email">
                    <label for="email">Email</label>
                    <input v-model="email" type="email" name="email">
                </div>
                <div class="password">
                    <label for="password">Password</label>
                    <input v-model="password" type="password" name="password">
                </div>
                <button @click.prevent="login">Log-in</button>
                <button @click.prevent="register">Register</button>
            </div>
        </div>

        <div @click="modal" id="overlay"></div>

    </section>

</template>

<script>
import api from '../router/api';
import router from '../router/index';

export default {
    name: 'Header',
    props: {
        title: String
    },
    data() {
        return {
            loggedIn: false,
            password: '', //! <<-- probably not a good idea..
            loginFail: [],
            registerFail: [],
        }
    },
    created: function() {
        this.checkToken();
    },
    methods: {
        navToggle: function() {
            document.getElementById('topNav').classList.toggle('active');
        },
        closeMenu: function() {
            document.getElementById('topNav').classList.toggle('active');
        },
        checkToken() {
            if(localStorage.getItem('token') && localStorage.getItem('token') != 'false' && localStorage.getItem('token') != 'true') {
                this.loggedIn = true;
                document.getElementById('modal').classList.remove('active');
                document.getElementById('overlay').classList.remove('active');
                router.push('loading')
            }
        },
        async register() {
            this.registerFail = await api.postNewUser(this.email, this.password).then(
                this.checkToken()
            )
            console.log(this.registerFail);
            this.checkToken()
        },
        async login() {
            this.loginFail = await api.getUser(this.email, this.password).then(
                this.checkToken()
            )
            console.log(this.loginFail);
            this.checkToken()
        },
        logout() {
            this.closeMenu();
            console.log('logged out')
            localStorage.removeItem("token");
            location.href = '/';
        },
        modal() {
            document.getElementById('modal').classList.toggle('active');
            document.getElementById('overlay').classList.toggle('active');
        }
    },
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
                color: #fff;
                cursor: pointer;
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
                    font: 400 20px Helvetica, Arial, sans-serif;

                    a{
                        font: 400 20px Helvetica, Arial, sans-serif;
                        color: #fff;
                    }
                }
            }
        }
    }

    #modal {
        display: none;
        &.active {
            display:block;
            height: 100vh;
        }

        .signin {
            position: absolute;
            margin: 0 auto;
            top: 130px;
            left: 0;
            right: 0;
            width: 250px;
            height: 300px;
            padding: 30px;
            background: #fff;
            box-shadow: 0 0 30px #ccc;
            z-index: 10;

            .popup-container {
                text-align: center;
                font-size: 14px;
                color: red;
                margin-top: -10px;
                .popup {

                    p {
                        text-align: center;
                        margin: 0 auto;
                    }
                    // margin-bottom: 5px;
                }
            }

            label {
                display: block;
                margin-bottom: 5px;
                text-align: left;
            }

            input {
                width: 95%;
                height: 20px;
                padding: 5px;
                border-radius: 8px;

                &:focus {
                    outline: none;
                }
            }

            button {
                margin: 20px auto 0px;
                border-radius: 12px;
                width: 80%;
                padding: 10px;
                text-transform: uppercase;
                font-weight: 700;
                color: #fff;
                background: #35495E;

                &:hover {
                    background: #41B883;
                }

                &:focus {
                    outline: none;
                }
            }
            .email, .password {
                margin: 30px auto 0;
            }

        }
    }

    #overlay {
        &.active {
            height: 100vh;
            width: 100%;
            background: rgba(51, 51, 51, 0.7);
            position: fixed;
            top: 0;
            bottom: 0;
            z-index: 5;
        }
    }

}

@keyframes drop{
    0%{margin-top: -200px}
    100%{margin-top: 10px}
}
</style>


