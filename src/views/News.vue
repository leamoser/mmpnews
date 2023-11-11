<template>
  <Header/>
  <main>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>

<script setup>
import { useStoryblok } from '@storyblok/vue';
import {useRoute} from "vue-router";
import Header from "@/components/layout/Header.vue";

const route = useRoute();
const story = await useStoryblok(`news/${route.params.slug}`, { version: import.meta.env.VITE_STORYBLOK_VERSION });
</script>
