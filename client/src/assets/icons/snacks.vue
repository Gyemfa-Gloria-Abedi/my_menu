<template>
  <div>
    <svg :width="width" :height="height" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.51855 13.625V13.75C9.51855 13.805 9.46779 13.875 9.375 13.875H1.25C1.22046 13.875 1.18914 13.8631 1.16309 13.8369C1.13659 13.8102 1.125 13.7781 1.125 13.75V13.625H9.51855ZM10.75 1.125V3.65625H13.8232L12.8477 13.3955C12.8141 13.671 12.5836 13.8749 12.3252 13.875H11.7871V9.33789C11.7871 7.65646 11.0751 6.61652 10.1201 5.6748L10.1182 5.67383C9.50663 5.07516 8.56227 4.55726 7.55469 4.23438L7.48047 3.65625H10.5186V1.125H10.75ZM9.5 11.125V11.375H1.125V11.125H9.5ZM5.32227 6.125C6.41617 6.12507 7.48305 6.41809 8.26172 6.9707C8.90121 7.42464 9.35009 8.05407 9.47949 8.875H1.16406C1.29345 8.05411 1.7424 7.42464 2.38184 6.9707C3.1606 6.41802 4.22823 6.125 5.32227 6.125Z" :fill="fillColor" :stroke="strokeColor"/>
    </svg>

  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps({
    width: {
        type: Number,
        default: 15
    },
    height: {
        type: Number,
        default: 15
    },
    fillColor: {
        type: String,
        default: "black"
    },
    strokeColor: {
        type: String,
        default: "black"
    }
});
</script>