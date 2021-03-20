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
        
        <div class="article-item---crud-wrapper">
            <slot></slot>
        </div>
    </article>
</template>

<script>


export default {
    name: "ArticleItem",
    props: {
        miniature : String,
        title: String,
        description: String,
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
</style>