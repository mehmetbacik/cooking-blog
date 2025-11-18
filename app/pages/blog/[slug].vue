<template>
  <div class="blog-post">
    <ContentDoc path="/blog" :slug="route.params.slug" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
</script>
