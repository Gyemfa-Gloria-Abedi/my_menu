<template>
  <div>
    <svg :wdth="width"  :height="height" Box="0 0 14 16"  fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 16H0V0H14V16Z" stroke="#E5E7EB"/>
        <g clip-path="url(#clip0_56_141)">
            <path d="M7 0C6.44687 0 6 0.446875 6 1V1.6C3.71875 2.0625 2 4.08125 2 6.5V7.0875C2 8.55625 1.45937 9.975 0.484372 11.075L0.253122 11.3344C-0.00937808 11.6281 -0.0718781 12.05 0.0874969 12.4094C0.246872 12.7688 0.606247 13 0.999997 13H13C13.3937 13 13.75 12.7688 13.9125 12.4094C14.075 12.05 14.0094 11.6281 13.7469 11.3344L13.5156 11.075C12.5406 9.975 12 8.55937 12 7.0875V6.5C12 4.08125 10.2812 2.0625 8 1.6V1C8 0.446875 7.55312 0 7 0ZM8.41562 15.4156C8.79062 15.0406 9 14.5312 9 14H7H5C5 14.5312 5.20937 15.0406 5.58437 15.4156C5.95937 15.7906 6.46875 16 7 16C7.53125 16 8.04062 15.7906 8.41562 15.4156Z" :fill="fillColor"/>
        </g>    
        <defs>
           <clipPath id="clip0_56_141">
               <path d="M0 0H14V16H0V0Z" :fill="whiteFillColor"/>
           </clipPath>
        </defs>
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
    whiteFillColor: {
        type: String,
        default: "white"
    }
});
</script>