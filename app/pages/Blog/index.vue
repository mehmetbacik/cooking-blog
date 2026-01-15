<script setup lang="ts">
import { ref, computed } from "vue";
import { blogData } from "../../data/blogData";

import BaseSearch from "../../ui/BaseSearch.vue";
import BasePagination from "../../ui/BasePagination.vue";
import BlogListHeader from "./components/BlogListHeader.vue";
import BlogListCard from "./components/BlogListCard.vue";
import BaseAdd from "../../ui/BaseAdd.vue";

import { useSearch } from "../../composables/useSearch";
import { usePagination } from "../../composables/usePagination";

const allPosts = ref(blogData);

const { searchQuery, filteredItems } = useSearch(allPosts, [
  "title",
  "author",
  "excerpt",
]);

const {
  paginatedItems: paginatedPosts,
  currentPage,
  totalPages,
  changePage,
} = usePagination(filteredItems, 6);

const handlePageChange = (page: number) => {
  changePage(page);
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <div class="blogList">
    <div class="container blogList__content">
      <div class="blogList__headerLayout">
        <BlogListHeader />
        <BaseSearch
          v-model="searchQuery"
          placeholder="Search article, news or recipe..."
        />
      </div>
      <div class="blogList__contentLayout">
        <div class="row align-items-center">
          <div class="col-12 col-lg-8">
            <div class="blogList__mainLayout">
              <div v-if="paginatedPosts.length > 0" class="blogList__items">
                <BlogListCard
                  v-for="post in paginatedPosts"
                  :key="post.id"
                  :post="post"
                />
              </div>
              <div v-else class="no-results">
                <h3>No articles found</h3>
                <p>Try searching for something else.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <aside class="blogList__sidebarLayout">
              <TastyRecipesSection />
              <BaseAdd />
            </aside>
          </div>
        </div>
        <BasePagination
          :current-page="currentPage"
          :total-pages="totalPages"
          :max-visible="5"
          @page-change="handlePageChange"
        />
      </div>
    </div>
  </div>
</template>
