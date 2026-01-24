<script setup lang="ts">
import type { BlogPost } from "../../../types";

import BlogDetailMeta from "./BlogDetailMeta.vue";

defineProps<{
  post: BlogPost;
}>();
</script>

<template>
  <div class="blogDetail__headerLayout">
    <div class="blogDetail__header">
      <h1 class="blogDetail__title">{{ post.title }}</h1>

      <BlogDetailMeta
        :author="post.author"
        :date="post.date"
        :photo="post.photo"
      />

      <div class="blogDetail__summary">
        <p>{{ post.summary }}</p>
      </div>

      <div class="blogDetail__image">
        <img :src="post.image" :alt="post.title" />
      </div>
    </div>
  </div>
</template>
