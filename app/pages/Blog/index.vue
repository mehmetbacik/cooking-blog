<script setup lang="ts">
import { posts } from "../../data/posts";
</script>

<template>
  <div class="container page-wrapper">
    <div class="header-block">
      <h1>Culinary Stories</h1>
      <p>Tips, techniques, and tales from the kitchen.</p>
    </div>

    <div class="blog-grid">
      <article v-for="post in posts" :key="post.id" class="blog-entry">
        <div class="entry-image">
          <img :src="post.image" :alt="post.title" />
        </div>
        <div class="entry-content">
          <span class="cat-tag">{{ post.category }}</span>
          <NuxtLink :to="`/blog/${post.slug}`">
            <h2>{{ post.title }}</h2>
          </NuxtLink>
          <p>{{ post.excerpt }}</p>
          <div class="entry-meta">
            <span>{{ post.date }}</span> • <span>{{ post.readTime }} read</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>