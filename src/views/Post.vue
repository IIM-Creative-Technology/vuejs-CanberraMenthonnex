<template>    
    <div class="content-post">
        <h3>{{post.title}}</h3>

        <img :src = "post.imageUrl" alt="image-article" class="image-post">
        <p>{{post.content}}</p>
        

        <p>Créer le {{transformDate}}</p>
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

        computed:{
            transformDate(){
                let now = this.post.createdAt
                let day = now.toLocaleString("default", { weekday : "long"})
                let month = now.toLocaleString("default", {month: "long"})
                return `${day} ${now.getDate()} ${month}`
            }

        }
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