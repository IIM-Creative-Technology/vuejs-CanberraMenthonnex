<template>

    <form-wrapper @submit="sendForm" >
        <template #header>
            <h1>
                Create post
            </h1>
        </template>
        <input-label v-model="form.title" type="text" name="title" label="Title" :hasError="titleError" :verticalMargin="true"/>
        <input-label v-model="form.metaTitle" type="text" name="metaTitle" label="Meta Title" :hasError="metaTitleError" :verticalMargin="true"/>
        <input-label v-model="form.metaDescription" type="text" name="metaDescription" label="Meta Description" :hasError="metaDescriptionError" :verticalMargin="true"/>
        <input-label v-model="form.imageUrl" type="text" name="imageUrl" label="Url Image" :hasError="imageUrl" :verticalMargin="true"/>
        <input-label v-model="form.content" type="text" name="Content" label="Content" :hasError="content" :verticalMargin="true"/>
        <template #footer>
            <submit-button :verticalMargin="true">
                Confirmer
            </submit-button>
        </template>
        
    </form-wrapper>
</template>


<script>
    import InputLabel from '../inputs/InputLabel.vue'
    import FormWrapper from './FormWrapper.vue'
    import SubmitButton from '../buttons/SubmitButton'

    export default {
        
        name: "NewPostForm",
        components: {
            InputLabel,
            FormWrapper, 
            SubmitButton
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


