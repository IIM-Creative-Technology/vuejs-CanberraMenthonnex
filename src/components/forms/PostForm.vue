<template>

    <form-wrapper @submit="sendForm" >
        <template #header>
            <h1>
                {{title}}
            </h1>
        </template>
        <input-label v-model="form.title" type="text" name="title" label="Title" :hasError="titleError" :verticalMargin="true"/>
        <input-label v-model="form.metaTitle" type="text" name="metaTitle" label="Meta Title" :hasError="metaTitleError" :verticalMargin="true"/>
        <input-label v-model="form.metaDescription" type="text" name="metaDescription" label="Meta Description" :hasError="metaDescriptionError" :verticalMargin="true"/>
        <input-label v-model="form.imageUrl" type="text" name="imageUrl" label="Url Image" :verticalMargin="true"/>
        <textarea-label v-model="form.content" type="text" name="Content" label="Content" :hasError="contentError" :verticalMargin="true"/>
        <template #footer>
            <submit-button :verticalMargin="true">
                Confirmer
            </submit-button>
        </template>
        
    </form-wrapper>
</template>


<script>
    import InputLabel from '../inputs/InputLabel.vue'
    import TextareaLabel from "../inputs/TextAreaLabel"
    import FormWrapper from './FormWrapper.vue'
    import SubmitButton from '../buttons/SubmitButton'

    export default {
        
        name: "NewPostForm",
        emits: [
            "submit-post"
        ],
        components: {
            InputLabel,
            FormWrapper, 
            SubmitButton,
            TextareaLabel
        },
        props: {
            post: Object
        },
        data(){
            return {
                titleError : false,
                metaTitleError : false,
                metaDescriptionError: false,
                contentError: false,

                form : {
                    title : this.post?.title,
                    metaTitle : this.post?.metaTitle,
                    metaDescription : this.post?.metaDescription,
                    imageUrl: this.post?.imageUrl,
                    content : this.post?.content,
                }

            }
        },
        computed: {
            title(){
                return this.post ? "Update post" : "Create post"
            }
        },
        methods : {
            
            sendForm(){

                this.titleError = !this.form.title
                this.metaTitleError = !this.form.metaTitle
                this.metaDescriptionError = !this.form.metaDescription
                this.contentError = !this.form.content
                
                if(!this.titleError && !this.metaTitleError && !this.metaDescriptionError && !this.content && !this.imageUrl)
                {
                    this.$emit("submit-post", this.form)
                }

            }
        }
    }
</script>


