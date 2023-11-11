<template>
  <header class="w-full bg-white p-8 flex justify-between typo-h2 border-b-black border-b">
    <RouterLink to="/">
      <p>{{ globals.content.title }}</p>
    </RouterLink>
    <p>{{ globals.content.slogan }}</p>
  </header>
</template>

<script setup>
import {useStoryblok} from "@storyblok/vue";

const globals = await useStoryblok(`globals/globals`, {version: 'draft'});
</script>
