<template>
    <p>Result time - {{ score }} ms</p>
    <h2>{{ rank }}</h2>
    <!-- <h2>{{ getResultTitle(score) }}</h2> -->
</template>

<script>
export default {
    props: ["score"],
    data() {
        return {
            rank: null,
        }
    },
    mounted() {
        if (this.score < 250) {
            this.rank = "Ninja skills"
        } else if (this.score < 400) {
            this.rank = "Rapid Reflexes"
        } else {
            this.rank = "Snail Pace..."
        }
    }
    // methods: {
    //     getResultTitle(score) {
    //         if (score < 200) {
    //             return "perfect!"
    //         } else if (score > 200 && score < 300) {
    //             return "very good!"
    //         } else if (score > 300 && score < 450) {
    //             return "good!"
    //         } else if (score > 450 && score < 600) {
    //             return "Ok."
    //         } else if (score > 600 && score < 1000) {
    //             return "You can do beter."
    //         } else {
    //             return "Thats bad!"
    //         }
    //     }
    // }
}
</script>

<style>

</style>