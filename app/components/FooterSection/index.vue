<script setup lang="ts">
import { ref } from "vue";
import { navItems } from "../../data/footerNavData";
import { socialItems } from "../../data/socialData";

const LogoPath = "/images/logo.svg";

const email = ref("");

const handleSubscribe = () => {
  if (!email.value) return;
  console.log("Subscribed:", email.value);
  alert("Thank you! You have subscribed to our newsletter.");
  email.value = "";
};
</script>

<template>
  <footer class="footer">
    <div class="container footer__content">
      <div class="footer__newsletter">
        <h4 class="footer__newsletter-title">Deliciousness to your inbox</h4>
        <p class="footer__newsletter-desc">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor <br />incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
        <form @submit.prevent="handleSubscribe" class="footer__newsletter-form">
          <input
            v-model="email"
            type="email"
            placeholder="Your email address..."
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div class="footer__bottom">
        <div class="footer__nav-group">
          <div class="footer__logo-wrapper">
            <NuxtLink to="/" class="footer__logo">
              <img :src="LogoPath" alt="Logo" />
            </NuxtLink>
            <p class="footer__logo-desc">
              Lorem ipsum dolor sit amet, consectetuipisicing elit
            </p>
          </div>
          <div class="footer__nav-wrapper">
            <nav class="footer__nav">
              <NuxtLink
                v-for="item in navItems"
                :key="item.id"
                :to="item.link"
                class="footer__nav-item"
              >
                {{ item.label }}
              </NuxtLink>
            </nav>
          </div>
        </div>
        <div class="footer__social">
          <NuxtLink
            v-for="social in socialItems"
            :key="social.id"
            :href="social.link"
            target="_blank"
            class="social-link"
            :aria-label="social.name"
          >
            <img :src="social.iconUrl" :alt="social.name" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
