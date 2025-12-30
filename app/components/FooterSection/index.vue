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
  <footer class="footer">
    <div class="container footer__content">
      <div class="footer__newsletter">
        <h4>Deliciousness to your inbox</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
        <form @submit.prevent="handleSubscribe" class="newsletter-form">
          <input
            v-model="email"
            type="email"
            placeholder="Your email address..."
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </footer>
</template>
