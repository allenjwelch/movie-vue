<template>
    <section>
        {{users}}
    </section>
</template>

<script>
import api from '../router/api';
// import axios from 'axios'
// let baseURL;
// if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//     baseURL = 'http://localhost:5000'
// } else {
//     baseURL = 'https://movie-vue.herokuapp.com'
// }

export default {
    name: 'Admin',
    components: {
    },
    data() {
        return {
            users: [],
        }
    },
    created: function() {
        this.getUsers();
    },
    methods: {
        getUsers() {
            this.users = api.getAllUsers();

            // api.getAllUsers().then(data => {
                //     response.json({ message: 'Request received!', data })
            // });
            console.log(this.users);

            // axios({
            //     method: 'get',
            //     url: `${baseURL}/api/all`,
            // })
            // .then(response => {
            //     console.log('get completed');
            //     this.users = response.data;
            // });
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


