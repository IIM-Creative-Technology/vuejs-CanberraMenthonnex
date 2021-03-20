<template>
    <post-form @submit-post="addPost"/>
</template>

<script>
    import PostForm from '../../components/forms/PostForm.vue'
    
    export default {
      components: { PostForm },
      methods: {
        addPost(post) {
          if ( this.$store.getters.getOnePost(post.title)) {
            this.$store.dispatch("alert", {message : "The title already exists", hasError: true})
          }
           this.$store.dispatch("addPost", {...post, author: this.$store.state.connectedUser.username})
        }
      }
    }
</script>