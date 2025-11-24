<script setup lang="ts">
import { navItems } from "../data/navData";
import { socialItems } from "../data/socialData";
const LogoPath = "/images/logo.svg";
</script>

<template>
  <nav class="navbar">
    <div class="container navbar__content">
      <div class="row align-items-center">
        <div class="col-12 col-lg-3 logo__wrapper">
          <NuxtLink to="/" class="navbar__logo">
            <img :src="LogoPath" alt="Logo" />
          </NuxtLink>
        </div>
        <div class="col-12 col-lg-6 nav__wrapper">
          <div class="navbar__links">
            <ul>
              <li v-for="item in navItems" :key="item.id">
                <NuxtLink
                  :to="item.link"
                  class="nav-item"
                  active-class="active"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-lg-3 social__wrapper">
          <div class="navbar__socials">
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
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
