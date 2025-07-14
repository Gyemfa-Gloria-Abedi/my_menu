<template>
  <div class="menu">
    <img :src="menuImage" :alt="menuName"/>
    <div>
        <p class="name">{{ menuName }}</p>
        <p class="cal">calories</p>
    </div>
   </div>
</template>

<script lang="ts" setup>
defineProps({
    menuImage: String,
    menuName: String,
})

</script>

<style scoped>
.menu{
    background-color: #FFFFFF;
    border-radius: 0.8rem;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    cursor: pointer;
}
.menu img{
    width: 4rem;
    height: 4rem;
    border: 0px solid #E5E7EB;
    border-radius: 0.5rem;
}
.menu .name{
    color: #000;
    font-family: "DM Sans";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
    margin-bottom: 0.125rem;
}
</style>