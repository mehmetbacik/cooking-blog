<template>
  <footer class="footer">
    <div class="container footer__content">
      <div class="footer__logo">
        <h3>Cooking Blog</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel omnis
          quaerat nisi.
        </p>
      </div>

      <div class="footer__links">
        <NuxtLink to="/" class="footer-item">Home</NuxtLink>
        <NuxtLink to="/recipes" class="footer-item">Recipes</NuxtLink>
        <NuxtLink to="/blog" class="footer-item">Blog</NuxtLink>
        <NuxtLink to="/contact" class="footer-item">Contact</NuxtLink>
      </div>
    </div>
    <div class="footer__bottom">
      <p>&copy; 2025. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped></style>
