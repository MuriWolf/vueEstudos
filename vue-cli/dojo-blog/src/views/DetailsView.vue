<template>
    <div>
        <div v-if="error">{{ error }}</div>
        <div v-if="post" class="post">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </div>
        <div v-else>Loading...</div>
    </div>
</template>

<script>
import GetPost from '../composables/GetPost'

export default {
    props: ['id'],
    setup(props) {
        const {post, error, load} = GetPost();
        console.log(props.id);
        load(props.id);

        return {post, error}
    }
}
</script>

<style>
    .post {
        max-width: 900px;
        width: 95%;
        margin: 0 auto;
        padding: 20px;
        border-radius: 8px;
        background-color: #f0f0f0;
    }
</style>