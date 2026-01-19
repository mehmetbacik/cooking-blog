<script setup lang="ts">
import type { ContactForm } from "../../../types";

defineProps<{
  modelValue: ContactForm;
}>();

defineEmits<{
  (e: "update:modelValue", value: ContactForm): void;
}>();
</script>

<template>
  <div>
    <div class="contact__form-row">
      <div class="contact__form-group">
        <label>Name</label>
        <input
          :value="modelValue.name"
          @input="e => $emit('update:modelValue', { ...modelValue, name: (e.target as HTMLInputElement).value })"
          type="text"
          placeholder="Enter your name..."
          required
        />
      </div>

      <div class="contact__form-group">
        <label>Email Address</label>
        <input
          :value="modelValue.email"
          @input="e => $emit('update:modelValue', { ...modelValue, email: (e.target as HTMLInputElement).value })"
          type="email"
          placeholder="Your email address..."
          required
        />
      </div>
    </div>

    <div class="contact__form-row">
      <div class="contact__form-group">
        <label>Subject</label>
        <input
          :value="modelValue.subject"
          @input="e => $emit('update:modelValue', { ...modelValue, subject: (e.target as HTMLInputElement).value })"
          type="text"
          placeholder="Enter subject..."
          required
        />
      </div>

      <div class="contact__form-group">
        <label>Enquiry Type</label>
        <select
          :value="modelValue.enquiryType"
          @change="e => $emit('update:modelValue', { ...modelValue, enquiryType: (e.target as HTMLSelectElement).value })"
          required
        >
          <option value="" disabled>Select an option</option>
          <option value="advertising">Advertising</option>
          <option value="general">General Question</option>
          <option value="recipe">Recipe Enquiry</option>
          <option value="collaboration">Collaboration</option>
          <option value="feedback">Feedback</option>
        </select>
      </div>
    </div>

    <div class="contact__form-row full-width">
      <div class="contact__form-group">
        <label>Message</label>
        <textarea
          :value="modelValue.message"
          @input="e => $emit('update:modelValue', { ...modelValue, message: (e.target as HTMLTextAreaElement).value })"
          rows="5"
          placeholder="Enter your message..."
          required
        />
      </div>
    </div>
  </div>
</template>
