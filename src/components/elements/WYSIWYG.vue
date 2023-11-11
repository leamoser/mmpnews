<template>
  <div class="prose-p:pb-4 prose-a:text-yellow prose-a:underline hover:prose-a:no-underline prose-h3:typo-h3 prose-h3:pb-2 prose-h3:pt-3" v-html="html"></div>
</template>

<script setup>
import {computed} from "vue";
import {renderRichText} from "@storyblok/vue";

const props = defineProps({
  richtext: { required: true, type: Object }
})
const html = computed(() => renderRichText(props.richtext));
</script>
