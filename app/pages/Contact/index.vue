<script setup lang="ts">
const handleSubmit = () => {
  alert("Thank you! Your message has been sent.");
};
</script>

<template>
  <div class="container contact-page">
    <div class="contact-grid">
      <div class="contact-text">
        <h1>Get in Touch</h1>
        <p>
          Have a question about a recipe, or want to work together? We'd love to
          hear from you.
        </p>

        <div class="info-block">
          <div class="label">Email</div>
          <div class="val">hello@cooking.com</div>
        </div>
        <div class="info-block">
          <div class="label">Studio</div>
          <div class="val">Istanbul, TR</div>
        </div>
      </div>

      <div class="contact-form-wrapper">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label>Name</label>
            <input type="text" placeholder="Jane Doe" required />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" placeholder="jane@example.com" required />
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn--primary">Send Message</button>
        </form>
      </div>
    </div>
    <CheckOutRecipesSection />
  </div>
</template>
