<template>
  <h1>List of jobs</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id }}">
        <h3>{{ job.title }}</h3>
      </router-link>
    </div>
  </div>
  <div v-else>
    <h3>Loading jobs...</h3>
  </div>
</template>

<script>
export default {
  data() {
      return {
          jobs: []
      }
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then(res => res.json())
      .then(data => this.jobs = data)
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