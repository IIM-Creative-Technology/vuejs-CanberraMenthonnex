<template>
    <post-form :post="post" @submit-post="updatePost"/>
</template>

<script>

    import PostForm from '../../components/forms/PostForm.vue'
    
    export default {
        components: {  PostForm },
        methods: {
            updatePost(post) {
                this.$store.dispatch('editPost', post)
            }
        },  
        data() {
            return {
                post: this.$store.getters.getOnePost(this.$route.params.id )
            }
           
        }
    }
</script>