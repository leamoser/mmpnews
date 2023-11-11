<template>
  <div v-editable="blok" class="h-[500px] w-full flex items-center justify-center border border-black" :style="`background-color: ${ blok.color }`">
    <h1 class="typo-h1 text-center">{{ blok.title }}</h1>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
