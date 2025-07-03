<template>
  <div>
    <svg :width="width" :height="height" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.73047 0.25C3.90625 0.25 0 4.16797 0 9C0 13.832 3.90625 17.75 8.73047 17.75C11.0977 17.75 13.2422 16.8047 14.8164 15.2734C15.0117 15.082 15.0625 14.7852 14.9375 14.543C14.8125 14.3008 14.543 14.1641 14.2734 14.2109C13.8906 14.2773 13.5 14.3125 13.0977 14.3125C9.3125 14.3125 6.24219 11.2344 6.24219 7.4375C6.24219 4.86719 7.64844 2.62891 9.73047 1.44922C9.96875 1.3125 10.0898 1.03906 10.0312 0.773438C9.97266 0.507813 9.74609 0.308594 9.47266 0.285156C9.22656 0.265625 8.98047 0.253906 8.73047 0.253906V0.25Z" :fill="fillColor"/>
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
        default: 18
    },
    fillColor: {
        type: String,
        default: "black"
    }
});
</script>