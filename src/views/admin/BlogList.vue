<template>
    <section>
        <main-title>Gérer le blog</main-title>
        <div :class="{'blog--content' : !editEnabled, 'blog--content__active-crud': editEnabled}">
            <div class="blog--wrapper" :class="{'blog--wrapper__active-crud': editEnabled}">
                <article-list :items="posts" :active-crud="true" @delete-post="deletePost"/> 
            </div>
            <div :class="{'blog--editor__active-crud': editEnabled}">
                <router-view :key="$route.name + ($route.params.id || '')"/>
            </div>
        </div>
        
    </section>
    
</template>

<script>
    import { mapState } from 'vuex'
    import MainTitle from "../../components/titles/MainTitle"
    import ArticleList from "../../components/lists/ArticleList"

    export default {
    name: "BlogList",
    components: {
        MainTitle,
        ArticleList,
    },
    methods: {
        deletePost(id) {
            this.$store.dispatch("deletePost", id)
        }
    },
    computed: {
        ...mapState({
            posts : state => state.posts
        }),
        editEnabled() {
            return this.$route.name === "EditPost"
        }
    }

    }
</script>

<style scoped>
    .blog--wrapper {
        width: 85%;
    }
    .blog--content {
        display: flex;
        justify-content: center;
    }

    .blog--content__active-crud {
        display: flex;
        justify-content: space-around;
    }

    .blog--wrapper__active-crud {
        width: 48%;
        height: 80vh;
        overflow-y: auto;
    }

    .blog--editor__active-crud {
         width: 48%;
    }
</style>