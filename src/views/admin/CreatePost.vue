<template>
    <post-form @submit-post="addPost"/>
</template>

<script>
    import PostForm from '../../components/forms/PostForm.vue'
    
    export default {
      components: { PostForm },
      methods: {
        addPost(post) {
           this.$store.dispatch("addPost", {...post, author: this.$store.state.connectedUser.username})
        }
      }
    }
</script>