<template>
  <div class="blog-list">
    <h1>Latest Blog Posts</h1>
    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="post in list" :key="post._path" class="blog-item">
        <NuxtLink :to="post._path">
          <img :src="post.cover" alt="" />
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
        </NuxtLink>
      </div>
    </ContentList>
  </div>
</template>
