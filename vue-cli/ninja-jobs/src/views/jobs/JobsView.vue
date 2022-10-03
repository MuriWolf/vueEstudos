<template>
  <h1>List of jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id, }}">
      <h3>{{ job.title }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
      return {
          jobs: [
            { title: "Vue developer", id: 1, description: "lorem"},
            { title: "UX designer", id: 2, description: "lorem"},
            { title: "PHP Senior Developer", id: 3, description: "lorem"},
          ]
      }
  }
}
</script>

<style>
  .job h3 {
    background: #efefef;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }

  .job h3:hover {
    background: #42b983;
    color: #f9f9f9;
  }

  .job a {
    text-decoration: none;
  }
</style>