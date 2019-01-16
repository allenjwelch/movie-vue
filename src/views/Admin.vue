<template>
    <section>
        <h1>Admin</h1>

        <div class="userData">
            <h3>Active Users</h3>
            <ul>
                <li v-bind:key="user.id" v-for="user in users">{{user.id}} || {{user.email}}</li>
            </ul>
        </div>
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
        async getUsers() {
            this.users = await api.getAllUsers();

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

<style lang="scss" scoped>
section {
  height: 100%;
}

.userData {
    text-align: left;
    width: 80%;
    margin: 0 auto;
    h3 {
        margin: 0;
    };
    ul {
        list-style-type: none;
        padding: 0;
    }
}



</style>


