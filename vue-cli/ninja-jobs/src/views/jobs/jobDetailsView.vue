<template>
  <div v-if="job">
    <h1 >{{ job.title }}</h1>
    <h3>Jobs details of {{ id }}</h3>
    <p>{{ job.description }}</p>
  </div>
  <div v-else>
    <h3>Loading job...</h3>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null
    }
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then(res => res.json())
      .then(data => this.job = data)
  }
}
</script>

<style>

</style>