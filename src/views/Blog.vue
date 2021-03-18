<template>
    <section>
        <main-title>Blog</main-title>
        <div class="blog--wrapper">
            <article-list :items="posts">
                <template #nav>
                    <list-page-nav :minPage="1" :maxPage="maxPageNumber" />
                </template>
            </article-list>  
        </div>
    </section>
</template>


<script>
    import { mapState } from 'vuex'
    import MainTitle from '../components/titles/MainTitle.vue'
    import ArticleList from "../components/lists/ArticleList"
    import ListPageNav from '../components/navs/ListPageNav.vue'

    export default {
    components: { 
        MainTitle,
        ArticleList,
        ListPageNav 
    },
    computed:{
        ...mapState({
            posts : state => state.posts
        }),
        maxPageNumber() {
            return this.$store.getters.getMaxOfPostPages
        }
    }
                
    }
</script>

<style scoped>
    .blog--wrapper {
        width: 85%;
        margin: 0 auto;
    }
</style>