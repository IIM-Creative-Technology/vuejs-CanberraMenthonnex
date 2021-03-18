<template>
    <nav class="list-page-nav">
        <button 
        class="list-page--btn" 
        :class="{'list-page--btn__selected' : item === currentPage}" 
        v-for="(item, index) in arrayOfNumber" 
        :key="index"
        @click="changePage(item)"
        >
            {{item}}
        </button>
    </nav>
</template>

<script>
export default {
    name : "ListPageNav",
    emits: ["change-page"],
    props: {
        minPage: Number,
        maxPage : Number,
        currentPage: Number
    },
    computed: {
        arrayOfNumber() {
            const items = []
            for( let i = this.minPage; i <= this.maxPage; i++ ) {
                items.push(i)
            }
            return items
        }
    },
    methods: {
        changePage(page) {
            this.$emit("change-page", page )
        }
    }
}
</script>

<style scoped>
    .list-page-nav {
        padding: 20px 0;
    }
    .list-page--btn {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        border: 2px solid transparent;
        margin-right: 15px;
        background-color: #64B4FF;
        transition: .5s;
    }
    .list-page--btn:hover, .list-page--btn__selected {
        border-color: white;
        color: white;
        cursor: pointer;
    }
    .list-page--btn:focus {
        outline: none;
    }
</style>