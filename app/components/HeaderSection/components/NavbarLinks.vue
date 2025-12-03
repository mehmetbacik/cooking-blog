<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps<{
  navItems: Array<{ id: string | number; label: string; link: string }>;
}>();

const emit = defineEmits<{
  (e: "closeMenu"): void;
}>();

const closeMenu = () => emit("closeMenu");
</script>

<template>
  <button class="header__close-btn" @click="closeMenu" aria-label="Close menu">
    <Icon icon="mdi:close" class="header__close-icon" />
  </button>
  <nav class="navbar__links">
    <ul>
      <li v-for="item in props.navItems" :key="item.id">
        <NuxtLink :to="item.link" class="nav-item" active-class="active" @click="closeMenu">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
