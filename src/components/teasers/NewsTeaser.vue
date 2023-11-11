<template>
  <div v-editable="blok" class="bg-violet p-8 border border-black">
    <router-link :to="blok.full_slug">
      <img :src="blok.content.image.filename" :alt="blok.content.image.alt" class="w-full aspect-video border border-black mb-4 object-cover"/>
      <h2 class="typo-h3 pb-2">{{ blok.content.title }}</h2>
      <p class="typo-text">{{ blok.content.lead }}</p>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({blok: Object})
</script>
