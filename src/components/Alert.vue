<template>
    
    <div v-if="alert.display" class="background">
        <div class="alert" :class="{'alert-danger' : alert.hasError, 'alert-success' : !alert.hasError}">
            <span>
                {{ alert.message }}
            </span>
            <button @click="close">OK</button>
        </div>
    </div>

</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "Alert",
        computed: {
            ...mapState({
                alert : state => state.alertMessage
            })
        },
        methods: {
            close() {
                this.$store.dispatch("alert")
            }
        }
    }
</script>

<style scoped>
    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, .7);
    }
    .alert {
        padding: 10px;
        
        color: white;
    }
    .alert-danger {
        background-color: red;
    }
    .alert-success {
        background-color: greenyellow;
    }
</style>
