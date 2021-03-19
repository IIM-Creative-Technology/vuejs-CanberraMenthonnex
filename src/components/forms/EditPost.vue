<template>

    <form @submit.prevent="editPost" action="">
        <div>
            <input-label v-model="title" type="text" name="title" label="Title"/>
            <input-label v-model="metaTitle" type="text" name="metaTitle" label="Meta Title"/>
            <input-label v-model="metaDescription" type="text" name="metaDescription" label="Meta Description"/>
            <input-label v-model="Content" type="text" name="Content" label="Description"/>
        </div>
        <button type="submit">Modifier</button>
    </form>
</template>



<script>
    import InputLabel from '../inputs/InputLabel.vue'
    export default {
        components: {
            InputLabel
        },

        name: "EditPost",
        
        methods : {
            editPost(){
                this.$store.dispatch("editPost", {
                        id: this.id,
                        title : this.title,
                        metaTitle : this.metaTitle,
                        metaDescription : this.metaDescription,
                        content : this.content
                    })
            }

        }
    }



</script>