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
            <div class="blogDetail__author">
              <img :src="post.photo" :alt="post.author" />
              <span>{{ post.author }}</span>
            </div>
            <div class="blogDetail__date">
              <span>{{ post.date }}</span>
            </div>
          </div>
          <div class="blogDetail__summary">
            <p>
              {{ post.summary }}
            </p>
          </div>
          <div class="blogDetail__image">
            <img :src="post.image" :alt="post.title" />
          </div>
        </div>
      </div>
      <div class="blogDetail__contentLayout">
        <div class="row align-items-center">
          <div class="col-12 col-lg-9">
            <div class="post-content" v-html="post.content"></div>
          </div>
          <div class="col-12 col-lg-3">Share This On:</div>
        </div>
      </div>
      <CheckOutRecipesSection />
    </div>
  </div>
</template>
