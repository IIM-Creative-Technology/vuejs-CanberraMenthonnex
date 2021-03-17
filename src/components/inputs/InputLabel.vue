<template>
    <div class="input-label" :class="{className, 'input-label__vertical-margin' : verticalMargin, 'input-label__horizontal-margin' : horizontalMargin }">
        <label class="input-label--label" :for="name">{{ label }}</label>
        <input class="input-label--input" :class="{'input-error' : hasError}" :type="type" :name="name" :id="name" :value="modelValue" @input="update">
    </div>
</template>

<script>
    export default {
        name : "InputLabel",
        props : [
            "modelValue", 
            "type", 
            "name", 
            "label", 
            "hasError", 
            "className",
            "verticalMargin",
            "horizontalMargin"
        ],
        methods : {
            update(e) {
                this.$emit("update:modelValue", e.target.value)
            }
        }
    }
</script>

<style scoped>
    .input-label {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 50%;
    }
    .input-label--label {
        font-size: .9em;
        font-weight: bold;
        background-color: #1C1E3D;
        color: white;
        padding: 8px;
    }
    .input-label__vertical-margin {
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .input-label__horizontal-margin {
        margin-right: 15px;
        margin-left: 15px;
    }

    .input-label--input {
        border: 2px solid #1C1E3D;
        padding: 5px;
        border-radius: 0 10px 10px 10px;
        width: 100%;
    }
    .input-label--input:focus {
        outline: none;
        width: 100%;
    }
    .input-error {
        border-color : red;
    }
</style>
