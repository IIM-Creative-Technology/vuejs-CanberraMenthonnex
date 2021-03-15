<template>
    <form @submit.prevent="sendForm" action="">
        <div>
            <label for="title"> Titre de la page
                <input v-model="title" type="text" name="title" id="">
            </label>

            <label for="meta-title"> Meta Title
                <input v-model="metaTitle" type="text" name="meta-title" id="">
            </label>
            <label for="meta-description"> Meta Description
                <input v-model="metaDescription" type="text" name="" id="">
            </label>
        </div>
        <button type="submit">Envoyer</button>
    </form>
</template>


<script>

    export default {
        name: "NewPostForm",

        data(){
            return {
                title : "title",
                metaTitle : "",
                metaDescription : "",
            }
        },
        computed: {

        },
        methods : {
            sendForm(){
                this.$store.dispatch("addPost", {
                    title : this.title,
                    metaTitle : this.metaTitle,
                    metaDescription : this.metaDescription
                })

            }
        }
    }
</script>