<template>
  <div>
    <svg :width="width" :height="height" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 24H0V0H21V24Z" :stroke="strokeColor"/>
        <path d="M12 3.75C12 2.92031 11.3297 2.25 10.5 2.25C9.67031 2.25 9 2.92031 9 3.75V10.5H2.25C1.42031 10.5 0.75 11.1703 0.75 12C0.75 12.8297 1.42031 13.5 2.25 13.5H9V20.25C9 21.0797 9.67031 21.75 10.5 21.75C11.3297 21.75 12 21.0797 12 20.25V13.5H18.75C19.5797 13.5 20.25 12.8297 20.25 12C20.25 11.1703 19.5797 10.5 18.75 10.5H12V3.75Z" :fill="fillColor"/>
        <path d="M12 3.75C12 2.92031 11.3297 2.25 10.5 2.25C9.67031 2.25 9 2.92031 9 3.75V10.5H2.25C1.42031 10.5 0.75 11.1703 0.75 12C0.75 12.8297 1.42031 13.5 2.25 13.5H9V20.25C9 21.0797 9.67031 21.75 10.5 21.75C11.3297 21.75 12 21.0797 12 20.25V13.5H18.75C19.5797 13.5 20.25 12.8297 20.25 12C20.25 11.1703 19.5797 10.5 18.75 10.5H12V3.75Z" :fill="fillColor" fill-opacity="0.2"/>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps({
    width: {
        type: Number,
        default: 16
    },
    height: {
        type: Number,
        default: 16
    },
    fillColor: {
        type: String,
        default: "black"
    },
    strokeColor: {
        type: String,
        default: "#E5E7EB"
    },
});
</script>