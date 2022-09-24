<template>
    <div>
      <button @click="openCloseList">Ver Lista</button>
      <input v-focus type="text" placeholder="Add task" @keyup.enter="addTask" v-model="state.currentTask" >
   
      <ul v-if="state.showList">
        <li v-for="task in state.tasks" :key="task" @dblclick="complete(task)" class="task" :class="{'line-through': task.isDone}">
          {{ task.name }}
          <button @click="remove(task)" >&times;</button>
        </li>
      </ul>
      <p v-else>Lista escondida</p>
  
    </div>
  </template>
  
  <script>
import { reactive } from 'vue';

  export default {
    directives: {
      focus: {
        mounted: (el) => {
          el.focus();
        } 
      },
      highlight: {
        beforeMount(el, binding) {
        el.style.background = binding.value
        }
      }
    }, 
    setup() {
        const state = reactive({
            currentTask: "teste",
            showList: false,
            tasks: [
            {
                name: "fazer o curso", isDone: false,
            },
            {
                name: "treinar", isDone: false,
            },
            {
                name: "dormir", isDone: false,
            },
            ],
        })
        function openCloseList () {
        state.showList = !state.showList;
        }
        function remove(task) {
            state.tasks = state.tasks.filter(t => t.name !== task.name);
        }
        function complete(task) {
            state.tasks = state.tasks.map(t => {
            if (t.name === task.name) {
                return {...t, isDone: !t.isDone}
            }
            return {...t}
            })
        }
        function addTask() {
            state.tasks.push({
            name: state.currentTask,
            isDone: false,
            })
            state.currentTask = "";
        }

        return {    
            state,
            addTask,
            complete,
            remove,
            openCloseList
        }
    },
  }
  </script>
  
  <style>
    .login-success {
      background-color: #52c052;
      padding: 2em;
    }
  
    .task {
      cursor: pointer;
    }
  
    .line-through {
      text-decoration: line-through;
    }
  </style>
  
  