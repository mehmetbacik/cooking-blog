<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { blogData } from "../../data/blogData";
import { usePagination } from "../../composables/usePagination";

import BlogListHeader from "./components/BlogListHeader.vue";
import BlogListCard from "./components/BlogListCard.vue";

import BaseSearch from "../../ui/BaseSearch.vue";
import BasePagination from "../../ui/BasePagination.vue";


const searchQuery = ref("");

const filteredPosts = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();
  if (!query) return blogData;

  return blogData.filter(
    (post) =>
      post.title.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query)
  );
});

const { currentPage, totalPages, paginatedItems, changePage } = usePagination(
  filteredPosts.value,
  6
);
</script>

<template>
  <div class="blogList">
    <div class="container blogList__content">
      <BlogListHeader />
      <BaseSearch
        v-model="searchQuery"
        placeholder="Search article, news or recipe..."
      />
      <div class="content-layout">
        <div class="main-column">
          <div v-if="paginatedItems.length" class="blog-list">
            <BlogListCard
              v-for="post in paginatedItems"
              :key="post.id"
              :post="post"
            />
          </div>
          <div v-else class="no-results">
            <h3>No articles found</h3>
            <p>Try adjusting your search terms.</p>
          </div>
        </div>
        <aside class="sidebar-column">
          <div class="sidebar-widget ad-widget">AddArea</div>
        </aside>
      </div>
      <BasePagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @change="changePage"
      />
    </div>
  </div>
</template>
