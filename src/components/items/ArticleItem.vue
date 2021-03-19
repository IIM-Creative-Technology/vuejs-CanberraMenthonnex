<template>
    <article class="article-item">
        <div class="article-item--body">
            <img class="article-item--miniature" :src="miniature" :alt="title">
            <div>
                <h3 class="article-item--title">{{ title }}</h3>
                <p>
                    {{ description }}
                </p>
            </div> 
        </div>
        
        <div v-if="activeCrud" class="article-item---crud-wrapper">
            <submit-button class="article-item--btn">
                 <router-link :to="{name : 'EditPost', params: {id}}" class="article-item--btn">Edit</router-link>
            </submit-button>
            <delete-button />
        </div>
    </article>
</template>

<script>
import DeleteButton from '../buttons/DeleteButton.vue'
import SubmitButton from '../buttons/SubmitButton'

export default {
  components: { DeleteButton, SubmitButton },
    name: "ArticleItem",
    props: {
        miniature : String,
        title: String,
        description: String,
        activeCrud: Boolean,
        id: Number
    }
}
</script>

<style scoped>
    .article-item {
        background-color: white;
        padding: 20px;
        display: flex;
        height: 15vh;
        justify-content: space-between;
        align-items: center;
    }
    .article-item--body {
         height: 15vh;
         display: flex;
    }
    .article-item--miniature {
        margin-right: 30px;
        height: 100%;
    }

    .article-item--title {
        text-align: left;
    }
    
    .article-item---crud-wrapper {
        display: flex;
        align-items: center;
    }   
    .article-item--btn {
        margin: 0 10px;
    }
</style>