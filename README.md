# Movie-Vue
## v1.3.3

#### GitHub: https://github.com/allenjwelch/movie-vue
#### Heroku: https://movie-vue.herokuapp.com/

## Description:
A Vue.js & Node.js application utilizing The Movie DB API. Upcoming features to include secure sign-in and user account with Watchlist of favorites using SQL database.
Built with the help of tutorials and guides from Scott Tolinski's "Vue.js for Everyone" (https://www.leveluptutorials.com/tutorials/vuejs-for-everyone) & Nick Manning's "Easily deploy a Vue + Webpack App to Heroku in 5 Steps"(https://medium.com/netscape/deploying-a-vue-js-2-x-app-to-heroku-in-5-steps-tutorial-a69845ace489)

![title image](./src/assets/title.PNG)

## Latest Updates:
* MySQL Database Connection
* User Sign-in/Out
* JSON Web Tokens for Authentication
* Watchlist for signed-in users

## Upcoming Updates:
* Sign-in modal from Header component instead of current sign-in page component
* Stronger email and password validation
* Password encryption
* Ability to update/delete titles in watchlist
* Notes and ratings for titles in Watchlist
* Improved mobile responsiveness

## Build Setup

``` bash
# install dependencies
npm install

# start server
node server.js

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# push updated build to Heroku
git add -A
git commit -m 'updated build'
git push heroku master
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
