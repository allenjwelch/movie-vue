import { async } from 'q';

<template>
    <section class="search">
        <h1>Search</h1>
        <form class="search-form">
            <label for="title">Search by Keyword</label>
            <input v-model="searchKeyword" type="text" id="searchKeyword">
            <!-- <label for="genre">Search by Genre</label>
            <input v-bind="genre" type="text" id="searchGenre">-->
            <label for="searchType">Search by Type</label>
            <select v-model="searchType" id="searchType">
                <option value="all">All</option>
                <option value="movie">Movie</option>
                <option value="tv">TV Show</option>
                <option value="actor">Actor</option>
            </select>
            <button v-on:click="search">Search</button>
        </form>

        <div class="results-container">
            <ul>
                <li :key="result.id" v-for="result in searchResults">
                    <!-- {{result.name || result.title}} -->
                    <SearchResults :result="result"/>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import SearchResults from '../components/SearchResults.vue';

export default {
    name: "search",
    components: {
        SearchResults,
    },
    data() {
        return {
            searchKeyword: "",
            searchType: "all",
            searchResults: [],
        };
    },
    methods: {
        search: async function() {
            event.preventDefault();
            const baseURL = "https://api.themoviedb.org/3/search";
            switch (this.searchType) {
                case "all":
                    console.log(this.searchType);
                    try {
                        const res = await fetch(`${baseURL}/multi?api_key=253f8b80b150f44540f78217551365ee&language=en-US&query=${this.searchKeyword}&page=1&include_adult=false`);
                        const searchResults = await res.json();
                        this.searchResults = searchResults.results;
                        console.log(searchResults);
                    } catch (e) {
                        console.log(e);
                    }
                    break;
                case "movie":
                    console.log(this.searchType);
                    try {
                        const res = await fetch(`${baseURL}/movie?api_key=253f8b80b150f44540f78217551365ee&language=en-US&query=${this.searchKeyword}&page=1&include_adult=false`);
                        const searchResults = await res.json();
                        this.searchResults = searchResults.results;
                        console.log(searchResults);
                    } catch (e) {
                        console.log(e);
                    }
                    break;
                case "tv":
                    console.log(this.searchType);
                    try {
                        const res = await fetch(`${baseURL}/tv?api_key=253f8b80b150f44540f78217551365ee&language=en-US&query=${this.searchKeyword}&page=1`);
                        const searchResults = await res.json();
                        this.searchResults = searchResults.results;
                        console.log(searchResults);
                    } catch (e) {
                        console.log(e);
                    }
                    break;
                case "actor":
                    console.log(this.searchType);
                    try {
                        const res = await fetch(`${baseURL}/person?api_key=253f8b80b150f44540f78217551365ee&language=en-US&query=${this.searchKeyword}&page=1&include_adult=false`);
                        const searchResults = await res.json();
                        this.searchResults = searchResults.results;
                        console.log(searchResults);
                    } catch (e) {
                        console.log(e);
                    }
                    break;
                default: //all
                    console.log(this.searchType);
                    try {
                        const res = await fetch(`${baseURL}/multi?api_key=253f8b80b150f44540f78217551365ee&language=en-US&query=${this.searchKeyword}&page=1&include_adult=false`);
                        const searchResults = await res.json();
                        this.searchResults = searchResults.results;
                        console.log(searchResults);
                    } catch (e) {
                        console.log(e);
                    }
                    break;
            }
        }
    },
    computed: {}
};

</script>

<style lang="scss" scoped>
.search {
    .search-form {
        text-align: left;
        margin: 0 auto;
        width: 90%;
        max-width: 500px;

        input,
        label,
        select,
        button {
            width: 100%;
            display: block;
            margin: 20px auto;
            font: 400 16px Arial;
        }

        label {
            margin-bottom: -20px;
        }

        input {
            width: 96%;
            @media (min-width: 550px) {
                width: 97%;
            }
        }

        input,
        select,
        button {
            padding: 10px 0 10px 10px;
        }

        option {
            padding: 10px;
        }
    }

    .results-container {
        ul {
            display: grid;
            list-style: none;
            padding: 10px;
            margin: 0;
            grid-row-gap: 20px;
            grid-template-columns: repeat(1, 1fr);

            @media (min-width: 551px) {
                grid-template-columns: repeat(3, 1fr);
            }

            @media (min-width: 1024px) {
                grid-template-columns: repeat(5, 1fr);
            }

            @media (min-width: 1200px) {
                grid-template-columns: repeat(6, 1fr);
            }

            li {
                margin: 10px;
            }
        }

    }
}
</style>
