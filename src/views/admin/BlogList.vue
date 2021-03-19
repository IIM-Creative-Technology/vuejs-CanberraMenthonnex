<template>
    <section>
        <main-title>Gérer le blog</main-title>
        <add-button/>
        <div class="blog--wrapper">
            <article-list :items="posts"/> 
        </div>
    </section>
    
</template>

<script>
    import { mapState } from 'vuex'
    import MainTitle from "../../components/titles/MainTitle"
    import ArticleList from "../../components/lists/ArticleList"
    import AddButton from '../../components/buttons/AddButton.vue'

    export default {
    name: "BlogList",
    components: {
        MainTitle,
        ArticleList,
        AddButton
    },
    computed: {
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