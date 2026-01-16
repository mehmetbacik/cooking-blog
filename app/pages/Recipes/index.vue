<script setup lang="ts">
import { ref, computed } from "vue";
import { recipesData } from "../../data/recipesData";

import BaseSearch from "../../ui/BaseSearch.vue";
import BasePagination from "../../ui/BasePagination.vue";
import RecipesHeader from "./components/RecipesHeader.vue";
import RecipesCard from "./components/RecipesCard.vue";
import BaseAdd from "../../ui/BaseAdd.vue";

import { useSearch } from "../../composables/useSearch";
import { usePagination } from "../../composables/usePagination";

const allPosts = ref(recipesData);

const { searchQuery, filteredItems } = useSearch(allPosts, [
  "title",
  "description",
  "category",
  "time",
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
  <div class="recipesList">
    <div class="container recipesList__content">
      <div class="recipesList__headerLayout">
        <RecipesHeader />
        <BaseSearch
          v-model="searchQuery"
          placeholder="Search article, news or recipe..."
        />
      </div>
      <div class="recipesList__contentLayout">
        <div class="row align-items-center">
          <div class="col-12 col-lg-8">
            <div class="recipesList__mainLayout">
              <div v-if="paginatedPosts.length > 0" class="recipesList__items">
                <RecipesCard
                  v-for="recipe in paginatedPosts"
                  :key="recipe.id"
                  :recipe="recipe"
                />
              </div>
              <div v-else class="no-results">
                <h3>No articles found</h3>
                <p>Try searching for something else.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <aside class="recipesList__sidebarLayout">
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
