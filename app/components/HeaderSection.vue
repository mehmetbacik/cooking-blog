<script setup lang="ts">
import { navItems } from "../data/navData";
import { socialItems } from "../data/socialData";
const LogoPath = "/images/logo.svg";
</script>

<template>
  <header class="header">
    <div class="container header__content">
      <div class="row align-items-center">
        <div class="col-12 col-lg-3 header__logo-wrapper">
          <NuxtLink to="/" class="header__logo">
            <img :src="LogoPath" alt="Logo" />
          </NuxtLink>
        </div>
        <div class="col-12 col-lg-6 header__navbar-wrapper">
          <nav class="navbar__links">
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
          </nav>
        </div>
        <div class="col-12 col-lg-3 header__social-wrapper">
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
