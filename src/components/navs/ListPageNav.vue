<template>
    <nav class="list-page-nav">
        <button class="list-page--btn" v-for="(item, index) in arrayOfNumber" :key="index">
            {{item}}
        </button>
    </nav>
</template>

<script>
export default {
    name : "ListPageNav",
    props: {
        minPage: Number,
        maxPage : Number
    },
    computed: {
        arrayOfNumber() {
            const items = []
            for( let i = this.minPage; i <= this.maxPage; i++ ) {
                items.push(i)
            }
            return items
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
    }
</style>