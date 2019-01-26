<template>
    <section>
        <div class="signin">
            <div class="email">
                <label for="email">Email</label>
                <input v-model="email" type="email" name="email">
            </div>
            <div class="password">
                <label for="password">Password</label>
                <input v-model="password" type="password" name="password">
            </div>
            <button @click.prevent="submit">Submit</button>
        </div>
    </section>
</template>

<script>
// import axios from 'axios';
import api from '../router/api';
import router from '../router/index';

// const API_URL = 'http://localhost:5000';

export default {
    name: 'SignIn',
    data() {
        return {
            email: '',
            password: '', //! <<-- probably not a good idea..
            loggedIn: false,
        }
    },
    computed: {
    },
    beforeCreate: function() {
        // this.pageRedirect();
    },
    mounted: function() {
        this.checkToken();
    },
    methods: {
        async submit() {
            console.log(`Email: ${this.email}; Password: ${this.password}`)
            await api.postNewUser(this.email, this.password).then(
                this.checkToken()
            )
        },
        checkToken() {
            if(localStorage.getItem('token')) {
                this.loggedIn = true
                router.push('watchlist')
            }
        },
        pageRedirect() {
            if(this.loggedIn) {
                router.push('watchlist')
            }
        }

        // need method to check for token
    }
}
</script>

<style lang="scss">
section {
  height: 100%;
  position: relative;
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

.signin {
    position: absolute;
    margin: 0 auto;
    top: 50px;
    left: 0;
    right: 0;
    width: 250px;
    height: 300px;
    padding: 30px;
    box-shadow: 0 0 30px #ccc;

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
        margin: 50px auto 0;
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
    }
    .email, .password {
        margin: 30px auto 0;
    }

}


</style>


