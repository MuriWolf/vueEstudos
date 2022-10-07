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
import PostList from '../components/PostList.vue';
import GetPosts from '../composables/GetPosts';
import { ref } from '@vue/reactivity';

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    let showPosts = ref(true);

    const { posts, error, load } = GetPosts();

    load();
    function deletePost() {
      posts.value.pop();
    }
    return { posts, showPosts, deletePost, error }
  }
}
</script>
