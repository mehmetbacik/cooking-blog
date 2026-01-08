<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { blogData } from "../../data/blogData";

const allPosts = ref(blogData);
const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = 6;

const filteredPosts = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();
  if (!query) return allPosts.value;

  return allPosts.value.filter(
    (blogData) =>
      blogData.title.toLowerCase().includes(query) ||
      blogData.author.toLowerCase().includes(query) ||
      blogData.excerpt.toLowerCase().includes(query)
  );
});

const totalPages = computed(() =>
  Math.ceil(filteredPosts.value.length / itemsPerPage)
);

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredPosts.value.slice(start, end);
});

watch(totalPages, (newTotal) => {
  if (newTotal > 0 && currentPage.value > newTotal) {
    currentPage.value = 1;
  }
});

const handleSearch = () => {
  currentPage.value = 1;
};

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
</script>

<template>
  <div class="blogList">
    <div class="blog-header">
      <div class="header-content">
        <h1>Culinary Stories</h1>
        <p>Tips, techniques, and tales from the kitchen.</p>
      </div>
      <div class="search-box">
        <input
          type="text"
          v-model="searchQuery"
          @input="handleSearch"
          placeholder="Search blogs..."
          class="search-input"
        />
        <button class="search-btn">Search</button>
      </div>
    </div>
    <div class="content-layout">
      <div class="main-column">
        <div v-if="paginatedPosts.length > 0" class="blog-list">
          <article
            v-for="blogData in paginatedPosts"
            :key="blogData.id"
            class="blog-entry"
          >
            <div class="entry-image">
              <img :src="blogData.image" :alt="blogData.title" loading="lazy" />
            </div>
            <div class="entry-content">
              <NuxtLink :to="`/blog/${blogData.slug}`" class="title-link">
                <h2>{{ blogData.title }}</h2>
              </NuxtLink>
              <p>{{ blogData.excerpt }}</p>
              <div class="entry-meta">
                <span>{{ blogData.date }}</span>
              </div>
              <span class="author-photo">
                <img :src="blogData.photo" :alt="blogData.author" />
              </span>
              <span class="author">{{ blogData.author }}</span>
            </div>
          </article>
        </div>
        <div v-else class="no-results">
          <h3>No articles found</h3>
          <p>Try adjusting your search terms.</p>
        </div>
        <div v-if="totalPages > 1" class="pagination">
          <button
            class="page-btn prev"
            :disabled="currentPage === 1"
            @click="changePage(currentPage - 1)"
          >
            &larr; Prev
          </button>
          <div class="page-numbers">
            <button
              v-for="page in totalPages"
              :key="page"
              class="page-num"
              :class="{ active: currentPage === page }"
              @click="changePage(page)"
            >
              {{ page }}
            </button>
          </div>
          <button
            class="page-btn next"
            :disabled="currentPage === totalPages"
            @click="changePage(currentPage + 1)"
          >
            Next &rarr;
          </button>
        </div>
      </div>
      <aside class="sidebar-column">
        <div class="sidebar-widget ad-widget">AddArea</div>
      </aside>
    </div>
  </div>
</template>
