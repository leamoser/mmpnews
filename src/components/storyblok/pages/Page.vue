<template>
  <StoryblokComponent
      v-editable="inblok"
      v-for="inblok in blok.body"
      :blok="inblok"
      :key="inblok._uid"
  />
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
