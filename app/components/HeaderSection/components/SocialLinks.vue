<script setup lang="ts">

const props = defineProps<{
  socialItems: Array<{
    id: string | number;
    name: string;
    link: string;
    iconUrl: string;
  }>;
  mobile?: boolean;
}>();
</script>

<template>
  <div
    :class="['social__links', mobile ? 'header__social-wrapper--mobile' : '']"
  >
    <a
      v-for="social in props.socialItems"
      :key="social.id"
      :href="social.link"
      target="_blank"
      :aria-label="social.name"
      class="social-item"
    >
      <img :src="social.iconUrl" :alt="social.name" />
    </a>
  </div>
</template>
