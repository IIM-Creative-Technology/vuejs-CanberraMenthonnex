<template>
    <section>
        <main-title>Blog</main-title>
        <div class="blog--wrapper">
            <article-list :items="posts"/> 
        </div>
    </section>
</template>


<script>
    import { mapState } from 'vuex'
    import MainTitle from '../components/titles/MainTitle.vue'
    import ArticleList from "../components/lists/ArticleList"

    export default {
        components: { 
            MainTitle,
            ArticleList,
        },
        computed:{
            ...mapState({
                posts : state => state.posts
            })
        }
                    
    }
</script>

<style scoped>
    .blog--wrapper {
        width: 85%;
        margin: 0 auto;
    }
</style>