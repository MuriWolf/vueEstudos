<template>
  <router-link :to="{ name: 'details', params: { id: post.id }}">
      <h3>{{ post.title }}</h3>
  </router-link>
      <div class="tags"><span v-for="tag in post.tags" :key="tag">#{{ tag }}</span></div>
  <p>{{ snippet }}</p>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: ["post"],
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.substring(0, 100) + "...."
        })

        return { snippet }
    }
 }
</script>

<style>
    .tags {
        display: flex;
        justify-content: center;
        gap: 1em;
    }
</style>