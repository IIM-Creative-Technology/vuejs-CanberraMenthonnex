<template>
    <h1>Dashboard</h1>

    <ul>
        <li v-for="(post, index) in posts" :key="index">{{ post.title }}</li>
    </ul>
</template>

<script>
    import { mapState } from 'vuex'


    export default {
    name: "BlogList",
    computed: {
        ...mapState({
            posts : state => state.posts
        })
    }

    }
</script>
