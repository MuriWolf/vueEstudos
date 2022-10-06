<template>
  <div class="home">
  <h1>Home</h1>
  <div v-if="posts.length">
    <PostList v-if="showPosts" :posts="posts" />
  </div>
  <div v-else v-if="!error">Loading...</div>

  <div v-if="error">{{ error }}</div>
  <button @click="showPosts = !showPosts">Toogle Posts</button>
  <button @click="deletePost">Delete Post</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import PostList from '../components/PostList.vue'

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    let showPosts = ref(true);
    const posts = ref([])
    const error = ref(null)
    error.lenght

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts")
        if(!data.ok) {
          throw Error("No data available")
        }
        posts.value = await data.json();
      }
      catch(err) {
        error.value = err.message;
        console.log(error.value);
      }
    }

    load();

    function deletePost() {
      posts.value.pop();
    }
    return { posts, showPosts, deletePost, error }
  }
}
</script>
