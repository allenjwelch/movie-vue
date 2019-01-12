<template>
    <section>
        <label for="email">Email</label>
        <input v-model="email" type="email" name="email">
        <br>
        <label for="password">Password</label>
        <input v-model="password" type="password" name="password">
        <br>
        <button @click.prevent="submit">Submit</button>
    </section>
</template>

<script>
// import axios from 'axios';
import api from '../router/api';

// const API_URL = 'http://localhost:5000';

export default {
    name: 'SignIn',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        submit: function() {
            console.log(`Email: ${this.email}; Password: ${this.password}`)
            // let data = api.dev();
            // console.log(data);
            api.postNewUser(this.email, this.password);
        }
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


