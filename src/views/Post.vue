<template>    
    <div class="content-post">
        <h3>{{post.title}}</h3>

        <img :src = "post.imageUrl" alt="image-article" class="image-post">
        <p>{{post.content}}</p>
        

        <p>Créer le {{post.createdAt}}</p>
        <p>Auteur : {{post.author}}</p>
    </div>
</template>



<script>
    export default {
        name: "Post",
        data(){
            return{
                post: this.$store.getters.getOnePost(this.$route.params.id)
            }
        },
        // beforeMount() {
        //     console.log(this.post);
        //     this.$route.meta.title = this.post.title
        // }
    }
</script>


<style scoped>
    .content-post{
        background: white;
        height: 80vh;
        width: 80%;
        margin: auto;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .image-post{
        height: 50%;
    }
    
</style>