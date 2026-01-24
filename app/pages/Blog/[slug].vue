<script setup lang="ts">
import { useRoute } from "vue-router";
import { createError } from "nuxt/app";
import { blogData } from "../../data/blogData";

import BlogDetailHeader from "./components/BlogDetailHeader.vue";
import BlogDetailContent from "./components/BlogDetailContent.vue";
import BlogDetailShare from "./components/BlogDetailShare.vue";


const route = useRoute();
const post = blogData.find((p) => p.slug === route.params.slug);

if (!post) {
  throw createError({
    statusCode: 404,
    statusMessage: "Post Not Found",
  });
}
</script>

<template>
  <div class="blogDetail">
    <div class="container blogDetail__content">
      <BlogDetailHeader :post="post" />
      <div class="blogDetail__contentLayout">
        <div class="row align-items-center">
          <div class="col-12 col-lg-9">
            <BlogDetailContent :content="post.content" />
          </div>
          <div class="col-12 col-lg-3">
            <BlogDetailShare />
          </div>
        </div>
      </div>

      <CheckOutRecipesSection />
    </div>
  </div>
</template>
