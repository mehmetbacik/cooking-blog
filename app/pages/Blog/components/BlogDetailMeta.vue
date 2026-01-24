<script setup lang="ts">
import type { BlogPost } from "../../../types";


defineProps<Pick<BlogPost, "author" | "date" | "photo">>();
</script>

<template>
  <div class="blogDetail__meta">
    <div class="blogDetail__author">
      <img :src="photo" :alt="author" />
      <span>{{ author }}</span>
    </div>
    <div class="blogDetail__date">
      <span>{{ date }}</span>
    </div>
  </div>
</template>
