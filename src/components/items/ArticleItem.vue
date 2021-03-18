<template>
    <article class="article-item">
        <img class="article-item--miniature" :src="miniature" :alt="title">
        <div>
            <h3 class="article-item--title">{{ title }}</h3>
            <p>
                {{ description }}
            </p>
        </div>
    </article>
</template>

<script>
export default {
    name: "ArticleItem",
    props: {
        miniature : String,
        title: String,
        description: String
    }
}
</script>

<style scoped>
    .article-item {
        background-color: white;
        padding: 20px;
        display: flex;
        height: 15vh;
    }

    .article-item--miniature {
        margin-right: 30px;
    }

    .article-item--title {
        text-align: left;
    }
</style>