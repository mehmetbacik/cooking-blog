<script setup lang="ts">
import FooterNewsletter from "./components/FooterNewsletter.vue";
import FooterNav from "./components/FooterNav.vue";
import FooterLogo from "./components/FooterLogo.vue";
import FooterCopyright from "./components/FooterCopyright.vue";
import FooterSocial from "./components/FooterSocial.vue";
</script>

<template>
  <footer class="footer">
    <div class="container footer__content">
      <FooterNewsletter />
      <div class="footer__bottom">
        <div class="footer__nav-group">
          <FooterLogo />
          <FooterNav />
        </div>
        <div class="footer__meta">
          <FooterCopyright />
          <FooterSocial />
        </div>
      </div>
    </div>
  </footer>
</template>
