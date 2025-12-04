<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
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
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", handleEscape);
  }
});

onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("keydown", handleEscape);
  }
});
</script>

<template>
  <header class="header">
    <div v-if="isMenuOpen" class="header__overlay" @click="closeMenu"></div>

    <div class="container header__content">
      <div class="row align-items-center">
        <div class="col-12 col-lg-3 header__logo-wrapper">
          <NuxtLink to="/" class="header__logo" @click="closeMenu">
            <img :src="LogoPath" alt="Logo" />
          </NuxtLink>
          <button
            class="header__menu-toggle"
            @click="toggleMenu"
            aria-label="Open menu"
            :aria-expanded="isMenuOpen"
          >
            <Icon icon="mdi:menu" class="header__menu-icon" />
          </button>
        </div>
        <div
          class="col-12 col-lg-6 header__navbar-wrapper"
          :class="{ 'is-open': isMenuOpen }"
        >
          <button
            class="header__close-btn"
            @click="closeMenu"
            aria-label="Close menu"
          >
            <Icon icon="mdi:close" class="header__close-icon" />
          </button>
          <nav class="navbar__links">
            <ul>
              <li v-for="item in navItems" :key="item.id">
                <NuxtLink
                  :to="item.link"
                  class="nav-item"
                  active-class="active"
                  @click="closeMenu"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <div class="header__social-wrapper header__social-wrapper--mobile">
            <div class="social__links">
              <a
                v-for="social in socialItems"
                :key="social.id"
                :href="social.link"
                target="_blank"
                :aria-label="social.name"
                class="social-item"
              >
                <img :src="social.iconUrl" :alt="social.name" />
              </a>
            </div>
          </div>
        </div>
        <div
          class="col-12 col-lg-3 header__social-wrapper header__social-wrapper--desktop"
        >
          <div class="social__links">
            <a
              v-for="social in socialItems"
              :key="social.id"
              :href="social.link"
              target="_blank"
              :aria-label="social.name"
              class="social-item"
            >
              <img :src="social.iconUrl" :alt="social.name" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
