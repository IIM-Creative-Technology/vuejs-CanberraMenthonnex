<template>
    <div v-if="items.length === 0">
        <p class="article-list--empty">
            Pas d'articles disponibles !!
        </p>
    </div>
    <ul class="article-list">
        <li v-for="item in paginatedItems" :key="item.id" class="article-list--item">
            <article-item 
            :title="item.title" 
            :description="item.metaDescription" 
            :miniature="item.imageUrl" 
            >
                <cta-button class="article-list--btn" :to="{name: 'Post', params: {id :item.id}}" />
                <template v-if="activeCrud">
                    <submit-button class="article-list--btn">
                        <router-link :to="{name : 'EditPost', params: {id: item.id}}">Edit</router-link>
                    </submit-button>
                    <delete-button @click="deletePost(item.id)"/> 
                </template>
                
            </article-item>
        </li>
    </ul>
    <list-page-nav :min-page="1" :current-page="currentPage" :max-page="maxPageNumber" @change-page="changePage" />     
</template>

<script>
import ArticleItem from '../items/ArticleItem.vue'
import ListPageNav from "../navs/ListPageNav"
import DeleteButton from '../buttons/DeleteButton.vue'
import SubmitButton from '../buttons/SubmitButton'
import CtaButton from '../buttons/CtaButton.vue'

export default {
    name: "PaginatedList",
    emits: ["delete-post"],
    props: {
        items : Array,
        activeCrud: Boolean
    },
    components: {
        ArticleItem,
        ListPageNav,
        SubmitButton,
        DeleteButton,
        CtaButton
    },
    data() {
        return {
            currentPage: 1,
            maxLength : 10
        }
    },
    computed: {
        /**
         * Get max page number
         */
        maxPageNumber() {
            return  Math.ceil(this.items.length / 10)
        },
        /**
         * Get items according pagination
         */
        paginatedItems() {
            const offsetStart = (this.currentPage - 1) * this.maxLength
            const items = this.items.slice(offsetStart, offsetStart + this.maxLength)
            return items
        }
    },
    methods: {
        /**
         * change current page
         * 
         * @param {number} page
         */
        changePage(page){
            this.currentPage = page
        },
        /**
         * delete post according it id
         * 
         * @param {number} id
         */
        deletePost(id) {
            this.$emit("delete-post", id)
        }
    }
}
</script>

<style scoped>
    .article-list--empty {
        color: white;
    }
    .article-list {
        list-style: none;
        padding: 0;
    }
    
    .article-list--item {
        margin-top: 15px;
    } 

    .article-list--btn {
        margin-right: 10px;
    }  



</style>