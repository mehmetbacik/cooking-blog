<template>
  <div class="recipe-details">
    <ContentDoc path="/recipes" :slug="route.params.slug" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
</script>
