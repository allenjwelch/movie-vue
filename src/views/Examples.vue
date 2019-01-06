/* eslint-disable */
<template>
    <section>
        <h1>{{newTitle}}</h1>
        <p>Vue Directives</p>

        <div>
            <h4 v-bind:style="styleObject"> {{message}} </h4>
            <input type="text" v-model="message">
            <button v-on:click="reverseMessage">Reverse Message</button>
            <button v-on:click="enlargeText">Make it Big</button>
            <button v-on:click="decreaseText">Make it Small</button>
        </div>
        <ul>
            <h4>Display List:</h4>
            <li v-bind:key="index" v-for="index in todos">{{index}}</li>
            <br>
            <li v-bind:key="index" v-for="index in people">Name: {{index.name}}</li>
        </ul>
    </section>
</template>

<script>
// import Vue from 'vue'
// import HelloWorld from '../components/HelloWorld.vue'


export default {
    name: "Examples",
    data() {
        return {
            message: 'Change this message',
            isTrue: true,
            title: 'Examples',
            styleObject: {
                color: '#333',
                fontSize: '16px'
            },
            todos: [
                "task1",
                "task2",
                "task3",
                "task4"
            ],
            people: {
                Allen: {
                    name: "allen",
                    age: 34
                },
                Briana: {
                    name: "briana",
                    age: 34,
                }
            }
        }
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        },
        enlargeText: function() {
            this.styleObject.fontSize = '28px';
        },
        decreaseText: function() {
            this.styleObject.fontSize = '16px';
        }
    },
    computed: {
        newTitle: function() {
            // if(!this.isTrue) {
            //     this.title = "New Title"
            // }
            return this.title;
            // console.log(this.title);
            // console.log(this.isTrue);
        }
    }
}

</script>

<style lang="scss" scoped>
input, button {
    display: block;
    margin: 10px auto;
}

li {
    width: 100px;
    margin: 0 auto;
}
</style>
