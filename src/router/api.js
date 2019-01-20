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
    async getAllUsers() {
        // let data = 'this should work';// works..
        let data = [];
        axios({

            method:'get',
            url:`${baseURL}/api/all`,
        })
        .then(response => {
            // console.log(response.data);
            data.push(...response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
        // return baseURL; //--> works
        return data;
    },
    async getWatchlist(token) {
        // let data = 'this should work';// works..
        let data = [];
        axios({

            method:'get',
            url:`${baseURL}/api/watchlist/`,
            headers: {
                Authorization: `${token}`
            }
        })
        .then(response => {
            // console.log(response.data);
            data.push(...response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
        // return baseURL; //--> works
        return data;
    },
    async postWatchlist(token, title, title_id) {
        axios({
            method:'post',
            url:`${baseURL}/api/watchlist/post`,
            headers: {
                Authorization: `${token}`
            },
            data: {
                title: title,
                title_id: title_id
            },
        })
        .then(response => {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    async postNewUser(email, password) {

        axios({
            method:'post',
            url:`${baseURL}/api/user`,
            data: {
                email: email,
                password: password
            },
        })
        .then(response => {
            localStorage.setItem('token', response.data)
            // console.log(response.data);
            location.href = '/watchlist';
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
