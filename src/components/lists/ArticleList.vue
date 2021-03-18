<template>
    <ul class="article-list">
        <li v-for="(item, index) in items" :key="index" class="article-list--item">
            <article-item :title="item.title" :description="item.metaDescription" :miniature="item.imageUrl" />
        </li>
    </ul>
    <slot name="nav"></slot>
</template>

<script>
import ArticleItem from '../items/ArticleItem.vue'

export default {
    name: "PaginatedList",
    props: {
        items : Array
    },
    components: {
        ArticleItem
    }
}
</script>

<style scoped>

    .article-list {
        list-style: none;
        padding: 0;
    }
    
    .article-list--item {
        margin-top: 15px;
    }   

</style>