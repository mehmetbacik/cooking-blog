<template>
  <div>
    <h1>Recipe: {{ slug }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const slug = route.params.slug;
</script>
