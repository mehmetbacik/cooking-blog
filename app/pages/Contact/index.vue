<script setup lang="ts">
import ContactHeader from "./components/ContactHeader.vue";
import ContactBanner from "./components/ContactBanner.vue";
import ContactForm from "./components/ContactForm.vue";
</script>

<template>
  <section class="contact">
    <div class="container contact__content">
      <ContactHeader />
      <div class="contact__contentLayout">
        <div class="row align-items-center">
          <div class="col-12 col-lg-4">
            <ContactBanner />
          </div>
          <div class="col-12 col-lg-8">
            <ContactForm />
          </div>
        </div>
        <CheckOutRecipesSection />
      </div>
    </div>
  </section>
</template>
