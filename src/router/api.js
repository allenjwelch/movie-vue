import Vue from 'vue'
import axios from 'axios'
// import oktaJwtVerifier from '@okta/jwt-verifier'
let baseURL;
let data;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:5000'
} else {
    baseURL = 'https://movie-vue.herokuapp.com'
}


export default {
    dev() {
        console.log(baseURL)
        return baseURL;
    },
    prod() {
        console.log(baseURL)
    },
    // async getToken() {
    //     let userData;
    //     let accessToken = await Vue.prototype.$auth.getAccessToken();
    //     oktaJwtVerifier.verifyAccessToken(accessToken)
    //     .then(jwt => {
    //       req.user = {
    //         uid: jwt.claims.uid,
    //         email: jwt.claims.sub
    //       };
    //       console.log(req.user);
    //       userData = req.user
    //       return userData;
    //     })
    // },
    async getAllUsers() {
        // let data = 'this should work';// works..
        let data = [];
        // let accessToken = await Vue.prototype.$auth.getAccessToken()
        axios({

            method:'get',
            url:`${baseURL}/api/all`,
            // headers: {
            //     Authorization: `Bearer ${accessToken}`
            // }
        })
        .then(response => {
            console.log(response.data);
            data.push(...response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
        // return baseURL; //--> works
        return data;
    },
    async getUser() {
        // let data = 'this should work';// works..
        let data = [];
        // let accessToken = await Vue.prototype.$auth.getAccessToken()
        axios({

            method:'get',
            url:`${baseURL}/api/user/:userID`,
            // headers: {
            //     Authorization: `Bearer ${accessToken}`
            // }
        })
        .then(response => {
            console.log(response.data);
            data.push(...response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
        // return baseURL; //--> works
        return data;
    },

    async postNewUser(email, password) {
        // let accessToken = await Vue.prototype.$auth.getAccessToken()
        let loggedIn;

        // axios.post(`${baseURL}/api/user/new`, {
        axios({
            method:'post',
            url:`${baseURL}/api/user`,
            data: {
                email: email,
                password: password
            },
            // headers: {
            //     Authorization: `Bearer ${accessToken}`
            // }
        })
            // email: email,
            // password: password
            // })
        .then(response => {
            localStorage.setItem('token', response.data)
            console.log(response.data);
            console.log(loggedIn);
            loggedIn = true;
        })
        .catch(function (error) {
            console.log(error);
        });
        return loggedIn;

    }
}




// export const HTTP = axios.create({
//   baseURL: 'http://localhost:5000/',
//   json: true
// })

// export default {
//   async execute (method, resource, data) {
//     // inject the accessToken for each request
//     // let accessToken = await Vue.prototype.$auth.getAccessToken()
//     return client({
//       method,
//       url: resource,
//       data,
//       headers: {
//         // Authorization: `Bearer ${accessToken}`
//       }
//     }).then(req => {
//       return req.data
//     })
//   },
//   getPosts () {
//     return this.execute('get', '/posts')
//   },
//   getPost (id) {
//     return this.execute('get', `/posts/${id}`)
//   },
//   createPost (data) {
//     return this.execute('post', '/posts', data)
//   },
//   updatePost (id, data) {
//     return this.execute('put', `/posts/${id}`, data)
//   },
//   deletePost (id) {
//     return this.execute('delete', `/posts/${id}`)
//   }
// }


// module.exports = api;
