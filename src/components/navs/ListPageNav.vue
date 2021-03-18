<template>
    <nav>
        <button v-for="(item, index) in arrayOfNumber" :key="index">
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