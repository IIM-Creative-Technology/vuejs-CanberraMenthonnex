<template>
    <ul class="article-list">
        <transition-group name="list">
            <li v-for="(item, index) in paginatedItems" :key="index" class="article-list--item">
                <article-item 
                :title="item.title" 
                :description="item.metaDescription" 
                :miniature="item.imageUrl" 
                >
                    <template v-if="activeCrud">
                        <submit-button class="article-list--btn">
                            <router-link :to="{name : 'EditPost', params: {id: index}}">Edit</router-link>
                        </submit-button>
                        <delete-button @click="deletePost(index)"/> 
                    </template>
                    
                </article-item>
            </li>
        </transition-group>
    </ul>
    <list-page-nav :min-page="1" :current-page="currentPage" :max-page="maxPageNumber" @change-page="changePage" />     
</template>

<script>
import ArticleItem from '../items/ArticleItem.vue'
import ListPageNav from "../navs/ListPageNav"
import DeleteButton from '../buttons/DeleteButton.vue'
import SubmitButton from '../buttons/SubmitButton'

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
        DeleteButton
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
            console.log(id);
            this.$emit("delete-post", id)
        }
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

    .article-list--btn {
        margin-right: 10px;
    }  
    
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }

</style>