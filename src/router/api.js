import Vue from 'vue'
import axios from 'axios'
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
        let data = [];
        axios({
            method:'get',
            url:`${baseURL}/api/all`,
        })
        .then(response => {
            data.push(...response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
        return data;
    },
    async getWatchlist(token) {
        let data = [];
        axios({
            method:'get',
            url:`${baseURL}/api/watchlist/`,
            headers: {
                Authorization: `${token}`
            }
        })
        .then(response => {
            data.push(...response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
        return data;
    },
    async postWatchlist(token, title, title_id) {
        let inWatchlist = [];

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
            inWatchlist.push(response.data);
            console.log(inWatchlist);
        })
        .catch(function (error) {
            console.log(error);
        });
        return inWatchlist;

    },
    async deleteFromWatchlist(token, title_id) {
        axios({
            method:'delete',
            url:`${baseURL}/api/watchlist/delete`,
            headers: {
                Authorization: `${token}`
            },
            data: {
                title_id: title_id,
            },
        })
        .then(response => {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    async getUser(email, password) {
        let loginFail = [];
        axios({
            method:'get',
            url:`${baseURL}/api/user`,
            params: {
                email: email,
                password: password
            }
        })
        .then(response => {
            localStorage.setItem('token', response.data)
            loginFail.push(response.data);
            console.log(loginFail);
        })
        .catch(function (error) {
            console.log(error);
        });
        return loginFail;
    },
    async postNewUser(email, password) {
        let registerFail = [];
        axios({
            method:'post',
            url:`${baseURL}/api/user/new`,
            data: {
                email: email,
                password: password
            },
        })
        .then(response => {
            localStorage.setItem('token', response.data)
            registerFail.push(response.data);
            console.log(registerFail);
        })
        .catch(function (error) {
            console.log(error);
        });
        return registerFail;
    }
}
