<template>
  <div>
    <button @click="openCloseList">Ver Lista</button>
    <input v-focus type="text" placeholder="Add task" @keyup.enter="addTask" v-model="currentTask" >
 
    <ul v-if="showList">
      <li v-for="task in tasks" :key="task" @dblclick="complete(task)" class="task" :class="{'line-through': task.isDone}">
        {{ task.name }}
        <button @click="remove(task)" >&times;</button>
      </li>
    </ul>
    <p v-else>Lista escondida</p>

  </div>
</template>

<script>
export default { 
  data: () => ({
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

  }),
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
  methods: {
    openCloseList () {
      this.showList = !this.showList;
    },
    addTaks() {

    },
    remove(task) {
      this.tasks = this.tasks.filter(t => t.name !== task.name) 
    },
    complete(task) {
      this.tasks = this.tasks.map(t => {
        if (t.name === task.name) {
          return {...t, isDone: !t.isDone}
        }
        return {...t}
      })
    },
    addTask() {
      this.tasks.push({
        name: this.currentTask,
        isDone: false,
      })
      this.currentTask = "";
    }
  }
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

