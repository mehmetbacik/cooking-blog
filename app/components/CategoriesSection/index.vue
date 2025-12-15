<script setup lang="ts">
import { categoriesData } from "../../data/categoriesData";
</script>

<template>
  <section class="categories">
    <div class="container categories__content">
      <div class="categories__header">
        <h2>Categories</h2>
        <a href="/recipes" class="categories__all-link"> View All Categories </a>
      </div>
      <div class="categories__list">
        <div
          v-for="category in categoriesData"
          :key="category.id"
          class="categories__item"
        >
          <a :href="category.url" class="categories__link">
            <div class="categories__image-wrapper">
              <img
                :src="category.image"
                :alt="category.title"
                class="categories__image"
              />
            </div>

            <span class="categories__title">
              {{ category.title }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
