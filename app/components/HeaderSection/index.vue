<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import HeaderLogo from "./components/HeaderLogo.vue";
import HeaderOverlay from "./components/HeaderOverlay.vue";
import NavbarLinks from "./components/NavbarLinks.vue";
import SocialLinks from "./components/SocialLinks.vue";

import { Icon } from "@iconify/vue";
import { navItems } from "../../data/navData";
import { socialItems } from "../../data/socialData";
const LogoPath = "/images/logo.svg";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === "Escape" && isMenuOpen.value) {
    closeMenu();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleEscape);
});
</script>

<template>
  <header class="header">
    <HeaderOverlay v-if="isMenuOpen" @click="closeMenu" />

    <div class="container header__content">
      <div class="row align-items-center">
        <HeaderLogo
          :isMenuOpen="isMenuOpen"
          @toggleMenu="toggleMenu"
          @closeMenu="closeMenu"
        />
        <div
          class="col-12 col-lg-6 header__navbar-wrapper"
          :class="{ 'is-open': isMenuOpen }"
        >
          <NavbarLinks :navItems="navItems" @closeMenu="closeMenu" />
          <SocialLinks :socialItems="socialItems" mobile />
        </div>
        <div
          class="col-12 col-lg-3 header__social-wrapper header__social-wrapper--desktop"
        >
          <SocialLinks :socialItems="socialItems" />
        </div>
      </div>
    </div>
  </header>
</template>