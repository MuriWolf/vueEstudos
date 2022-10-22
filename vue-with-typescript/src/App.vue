<template>
  <div class="app">
    <header>
      <div class="title">
        <img src="./assets/heart.svg" alt="logo">
        <h1>Hylia Jobs</h1>
      </div>
      <div class="order">
        <button @click="handleClick('title')">Order by title</button>
        <button @click="handleClick('salary')">Order by salary</button>
        <button @click="handleClick('location')">Order by location</button>
      </div>
    </header>
    <Jobs-list :jobs="jobs" :order="order"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Job from './types/Job'
import OrderBy from './types/OrderBy'
import JobsList from './components/JobsList.vue'

export default defineComponent({
  name: 'App',
  components: { JobsList }, 
  setup() {
    let jobs = ref<Job[]>([])
    onMounted(() => {
      fetch("http://localhost:3000/jobs") 
      .then(res => res.json())
      .then(data => jobs.value = data)
    })

    const order = ref<OrderBy>("title")

    const handleClick = (term: OrderBy) => {
      order.value = term
    }

    return { jobs, order, handleClick }
  },

});
</script>

<style>
  header {
    text-align: center;
  }
  header .order {
    margin-top: 20px;
  }
  button {
    margin: 0 10px;
    color: #1195c9;
    border: 3px solid #1195c9;
    background: #d5f0ff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
  header .title{
    display: flex;
    justify-content: center;
  }
  header img {
    width: 60px;
    margin-right: 20px;
  }
  header h1 {
    font-size: 3em;
  }
</style>
