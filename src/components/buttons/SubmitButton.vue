<template>
    <button :class="{className, 'submit-btn__vertical-margin' : verticalMargin, 'submit-btn__horizontal-margin': horizontalMargin}" class="submit-btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name : "SubmitButton",
    props: ["className", "verticalMargin", "horizontalMargin"]
}
</script>

<style scoped>
    .submit-btn {
        padding: 5px 10px;
        font-size: 1em;
        border-radius: 5px;
        border: 2px solid #1C1E3D;
        background-color: #64B4FF;
        color: #1C1E3D;
        cursor: pointer;
        font-weight: bold;
    }

    .submit-btn__vertical-margin {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .submit-btn__horizontal-margin {
        margin-right: 10px;
        margin-left: 10px;
    }
</style>