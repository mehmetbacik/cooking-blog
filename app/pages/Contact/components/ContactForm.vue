<script setup lang="ts">
import { ref } from "vue";
import ContactFormFields from "./ContactFormFields.vue";
import type { ContactForm } from "../../../types";

const form = ref<ContactForm>({
  name: "",
  email: "",
  subject: "",
  enquiryType: "",
  message: "",
});

const handleSubmit = () => {
  alert("Thank you! Your message has been sent.");
};
</script>

<template>
  <div class="contact__formLayout">
    <form
      class="contact__form-wrapper"
      @submit.prevent="handleSubmit"
    >
      <ContactFormFields v-model="form" />
      <button type="submit" class="contact__btn-submit">Submit</button>
    </form>
  </div>
</template>
