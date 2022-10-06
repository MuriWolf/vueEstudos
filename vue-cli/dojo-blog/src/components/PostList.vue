<template>
    <div>
        <div v-for="post in posts">
            <SinglePost :post="post"/>
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePost from './SinglePost.vue'

export default {
    props: ["posts"],
    components: { SinglePost },
    setup() {
        onMounted(() => console.log("Mounted"));
        onUpdated(() => console.log("Updated"))
        onUnmounted(() => console.log("Unmounted"))
    }
}
</script>

<style>

</style>