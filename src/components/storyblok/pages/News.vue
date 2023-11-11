<template>
  <div v-editable="blok" class="p-8 grid grid-cols-12">
    <div class="bg-yellow p-8 border border-black w-full mb-10 col-span-12">
      <img
          class="border border-black h-[335px] w-full object-cover"
          :src="blok.image.filename"
          :alt="blok.image.alt"
      />
    </div>
    <div class="col-start-3 col-end-8">
      <h1 class="typo-h2 pb-4">{{ blok.title }}</h1>
      <p class="typo-text pb-8">{{ blok.lead }}</p>
      <WYSIWYG :richtext="blok.content" />
      <p class="typo-info pt-8">Geschrieben von {{ blok.author }}</p>
    </div>
  </div>
</template>

<script setup>
import WYSIWYG from "@/components/elements/WYSIWYG.vue";
const props = defineProps({ blok: Object })
</script>
