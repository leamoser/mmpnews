<template>
  <Suspense>
    <template #default>
      <RouterView/>
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script setup>
import {RouterView} from 'vue-router'
</script>
