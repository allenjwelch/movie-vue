<template>
    <section>
        <h1>ToDo List</h1>
        <p>Enter your Todo List below and start getting things done!</p>
        <div class="todo-container">
            <div class="todo-cta">
                <input id="newItem" type="text">
                <button v-on:click="addItem">Add ToDo Item</button>
            </div>
            <ol class="todo-list">
                <li v-bind:key="todo" v-for="(todo, index) in todos">
                    {{todo}}
                    <img v-on:click="removeItem" :data-index="index" src="../assets/delete.png" alt="Delete Item">
                </li>
            </ol>
        </div>
    </section>
</template>

<script>

let todoList = [];
let todoListLocal = JSON.parse(localStorage.getItem('todolist'));
todoList.push(todoListLocal);

export default {
    name: 'todoList',
    components: {

    },
    data() {
        return {
            todos: todoList,
        }
    },
    methods: {
        addItem: function() {
            let newItem = document.getElementById('newItem').value;
            document.getElementById('newItem').value = '';
            todoList.push(newItem);
            localStorage.setItem("todolist", JSON.stringify(todoList));
        },
        removeItem: function(e) {
            let itemIndex = e.target.getAttribute('data-index');
            todoList.splice(itemIndex, 1);
            localStorage.setItem("todolist", JSON.stringify(todoList));
        }
    }
}
</script>

<style lang="scss" scoped>
    .todo-container {
        .todo-cta {
            width: 100%;
            display: inline-block;
            vertical-align: top;
            margin-bottom: 20px;
            #newItem {
                margin: 0 10px 10px 0;
            }

            @media (min-width: 768px) {
                width: 30%;
            }
        }
        .todo-list {
            margin: 0 auto;
            width: 90%;
            display: inline-block;
            text-align: center;
            li {
                text-align: left;
                margin: 0 auto 10px;
                img {
                    height: 20px;
                    vertical-align: bottom;
                    cursor: pointer;
                }
            }

            @media (min-width: 768px) {
                width: 65%;
            }
        }
    }
</style>


