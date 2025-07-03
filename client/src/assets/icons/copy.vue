<template>
  <div>
    <svg :width="width" :height="height" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.25 0H19.0672C19.6625 0 20.2344 0.239063 20.6562 0.660938L23.8391 3.84375C24.2609 4.26562 24.5 4.8375 24.5 5.43281V15.75C24.5 16.9922 23.4922 18 22.25 18H13.25C12.0078 18 11 16.9922 11 15.75V2.25C11 1.00781 12.0078 0 13.25 0ZM2.75 6H9.5V9H3.5V21H12.5V19.5H15.5V21.75C15.5 22.9922 14.4922 24 13.25 24H2.75C1.50781 24 0.5 22.9922 0.5 21.75V8.25C0.5 7.00781 1.50781 6 2.75 6Z" :fill="fillColor"/>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps({
    width: {
        type: Number,
        default: 25
    },
    height: {
        type: Number,
        default: 24
    },
    fillColor: {
        type: String,
        default: "black"
    }
});

</script>