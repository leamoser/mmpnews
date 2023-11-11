<template>
  <div v-editable="blok" class="p-8 bg-green border border-black">
    <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;" class="border border-b">
      <iframe
          :src="`https://www.youtube.com/embed/${blok.id}?rel=0`"
          style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;"
          allowfullscreen
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
