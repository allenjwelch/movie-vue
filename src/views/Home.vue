<template>
    <section>
        <img class="appLogo" alt="logo" src="../assets/MovieVue.png">
        <h3>Version 1.3.4</h3>
        <p>Movie Vue is a sample application built in Vue, Node, Express, & MySQL. The application currently utilizes a single API, 'The Movie DB', for content and allows users to browse by top movies and televsion shows or search for a specific selection by title and/or actors. In addition to browse and search capabilities, users signed onto the application can save their favorites to their watchlist.</p>
        <div class="versionInfo">
            <ul class="updates">
                <h4>Updates:</h4>
                <li>MySQL Database Connection</li>
                <li>User Sign-in/Out <em>(Do not use legitimate passwords until password encryption is enabled)</em></li>
                <li>JSON Web Tokens for Authentication</li>
                <li>Watchlist for signed-in users</li>
                <li>Updated loading screen</li>
                <li>Bug fix: correct modal overlay</li>
            </ul>
            <ul class="upcoming">
                <h4>Upcoming:</h4>
                <li>Stronger email and password validation</li>
                <li>Password encryption</li>
                <li>Notes and Ratings for Movies/Television shows saved to watchlist</li>
            </ul>
        </div>
    </section>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld,
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

h3, h4 {
    margin: 0;
}
.versionInfo {
    padding: 0 5%;
    @media (min-width: 600px) {
        display: grid;
        grid-template-columns: 50% 50%;
        text-align: center;
        margin: 0 auto;
    }

    li {
        text-align: left;
        margin: 5px 0;
    }
    .updates {
        grid-column: 1/1;

    }

    .upcoming {
        grid-column: 2/2;

    }

}


</style>


