<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps<{
  isMenuOpen: boolean;
}>();

const emit = defineEmits<{
  (e: "toggleMenu"): void;
  (e: "closeMenu"): void;
}>();

const LogoPath = "/images/logo.svg";

const toggleMenu = () => emit("toggleMenu");
const closeMenu = () => emit("closeMenu");
</script>

<template>
  <div class="col-12 col-lg-3 header__logo-wrapper">
    <NuxtLink to="/" class="header__logo" @click="closeMenu">
      <img :src="LogoPath" alt="Logo" />
    </NuxtLink>
    <button
      class="header__menu-toggle"
      @click="toggleMenu"
      aria-label="Open menu"
      :aria-expanded="props.isMenuOpen"
    >
      <Icon icon="mdi:menu" class="header__menu-icon" />
    </button>
  </div>
</template>
