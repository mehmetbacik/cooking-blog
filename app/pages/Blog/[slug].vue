<script setup lang="ts">
import { useRoute } from "vue-router";
import { createError } from "nuxt/app";
import { blogData } from "../../data/blogData";
const route = useRoute();
const post = blogData.find((p) => p.slug === route.params.slug);

if (!post) {
  throw createError({ statusCode: 404, statusMessage: "Post Not Found" });
}
</script>

<template>
  <div class="blogDetail">
    <div class="container blogDetail__content">
      <div class="blogDetail__headerLayout">
        <div class="blogDetail__header">
          <h1 class="blogDetail__title">{{ post.title }}</h1>
          <div class="blogDetail__meta">
            <div class="blogDetail__authorPhoto">
              <img :src="post.photo" :alt="post.author" />
            </div>
            {{ post.author }} - {{ post.date }}
          </div>
          <p class="blogDetail__desc">
            {{ post.excerpt }}
          </p>
          <div class="blogDetail__image">
            <img :src="post.image" :alt="post.title" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <article class="container post-wrapper">
    <div class="post-content" v-html="post.content"></div>
  </article>
</template>
