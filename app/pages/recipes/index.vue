<template>
  <div class="recipes-list">
    <h1>All Recipes</h1>
    <ContentList path="/recipes" v-slot="{ list }">
      <div v-for="item in list" :key="item._path" class="recipe-item">
        <NuxtLink :to="item._path">
          <img :src="item.cover" alt="" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </NuxtLink>
      </div>
    </ContentList>
  </div>
</template>
