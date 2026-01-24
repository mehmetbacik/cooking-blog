<script setup lang="ts">
import type { BlogPost } from "../../../types";

defineProps<Pick<BlogPost, "content">>();
</script>

<template>
  <div class="blogDetail__mainLayout" v-html="content"></div>
</template>
