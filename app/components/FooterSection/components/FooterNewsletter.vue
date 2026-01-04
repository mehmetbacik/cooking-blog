<script setup lang="ts">
import { ref } from "vue";

const email = ref("");

const handleSubscribe = () => {
  if (!email.value) return;
  console.log("Subscribed:", email.value);
  alert("Thank you! You have subscribed to our newsletter.");
  email.value = "";
};
</script>

<template>
  <div class="footer__newsletter">
    <h4 class="footer__newsletter-title">Deliciousness to your inbox</h4>

    <p class="footer__newsletter-desc">
      Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
      tempor <br />
      incididunt ut labore et dolore magna aliqut enim ad minim
    </p>

    <form class="footer__newsletter-form" @submit.prevent="handleSubscribe">
      <input
        v-model="email"
        type="email"
        placeholder="Your email address..."
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  </div>
</template>
