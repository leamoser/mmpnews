<template>
  <Header/>
  <main class="p-8">
    <StoryblokComponent v-if="story" :blok="story.content"/>
  </main>
</template>

<script setup>
import {useStoryblok} from '@storyblok/vue';
import Header from "@/components/layout/Header.vue";

const story = await useStoryblok('home', {
      version: 'draft',
      resolve_relations: 'News-Entries.entries'
    },
    {
      resolveRelations: ['News-Entries.entries'],
    }
);
</script>
