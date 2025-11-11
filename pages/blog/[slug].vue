<template>
  <div>
    <h1>Blog Post: {{ slug }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const slug = route.params.slug;
</script>
