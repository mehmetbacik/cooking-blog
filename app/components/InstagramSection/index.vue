<script setup lang="ts">
import { instagramPosts } from "../../data/instagramPostsData";
</script>

<template>
  <section class="homeInstagram">
    <div class="container homeInstagram__content">
      <div class="homeInstagram__header">
        <h2 class="homeInstagram__title">Check out @foodieland on Instagram</h2>
        <p class="homeInstagram__desc">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      <div class="homeInstagram__posts">
        <NuxtLink
          v-for="post in instagramPosts"
          :key="post.id"
          :to="post.link"
          target="_blank"
          class="homeInstagram__item"
        >
          <img :src="post.image" :alt="post.alt" />
        </NuxtLink>
      </div>
      <NuxtLink class="homeInstagram__btn" to="/contact"> Visit Our Instagram </NuxtLink>
    </div>
  </section>
</template>
