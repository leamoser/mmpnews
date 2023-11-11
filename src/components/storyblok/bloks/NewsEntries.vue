<template>
  <div v-editable="blok" class="my-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
    <NewsTeaser v-for="blok in blok.entries" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
import NewsTeaser from "@/components/teasers/NewsTeaser.vue";
const props = defineProps({ blok: Object })
</script>
