<template>

    <form @submit.prevent="sendForm" action="">
        <div>
            <input-label v-model="form.title" type="text" name="title" label="Title" :hasError="titleError"/>
            <input-label v-model="form.metaTitle" type="text" name="metaTitle" label="Meta Title" :hasError="metaTitleError"/>
            <input-label v-model="form.metaDescription" type="text" name="metaDescription" label="Meta Description" :hasError="metaDescriptionError" />
            <input-label v-model="form.imageUrl" type="text" name="imageUrl" label="Url Image" :hasError="imageUrl"></input-label>
            <input-label v-model="form.content" type="text" name="Content" label="Description" :hasError="content"/>
        </div>
        <button type="submit">Envoyer</button>
    </form>
</template>


<script>
    import InputLabel from '../inputs/InputLabel.vue'
    export default {
        

        name: "NewPostForm",

        components: {
            InputLabel
        },


        data(){
            return {
                titleError : false,
                metaTitleError : false,
                metaDescriptionError: false,
                imageUrl: false,
                content: false,

                form : {
                    title : "",
                    metaTitle : "",
                    metaDescription : "",
                    imageUrl:"",
                    content : "",
                }

            }
        },
        computed: {

        },
        methods : {
            
            sendForm(){
                this.titleError = !this.form.title
                this.metaTitleError = !this.form.metaTitle
                this.metaDescriptionError = !this.form.metaDescription
                this.content = !this.form.content
                this.imageUrl = !this.form.imageUrl
                
                    if(!this.titleError && !this.metaTitleError && !this.metaDescriptionError && !this.content && !this.imageUrl){
                        this.$store.dispatch("addPost", this.form)
                }


            }
        }
    }
</script>