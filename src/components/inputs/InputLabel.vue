<template>
    <div>
        <label :for="name">{{ label }}</label>
        <input class="input" :class="{'input-error' : hasError}" :type="type" :name="name" :id="name" :value="modelValue" @input="update">
    </div>
</template>

<script>
    export default {
        name : "InputLabel",
        props : ["modelValue", "type", "name", "label", "hasError"],
        methods : {
            update(e) {
                this.$emit("update:modelValue", e.target.value)
            }
        }
    }
</script>

<style scoped>
    .input {
        border: 2px solid grey;
    }
    .input-error {
        border-color : red;
    }
</style>
