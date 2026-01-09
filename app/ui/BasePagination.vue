<script setup lang="ts">
defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  (e: "change", page: number): void;
}>();
</script>

<template>
  <div v-if="totalPages > 1" class="pagination">
    <button
      class="page-btn"
      :disabled="currentPage === 1"
      @click="emit('change', currentPage - 1)"
    >
      ← Prev
    </button>

    <button
      v-for="page in totalPages"
      :key="page"
      class="page-num"
      :class="{ active: currentPage === page }"
      @click="emit('change', page)"
    >
      {{ page }}
    </button>

    <button
      class="page-btn"
      :disabled="currentPage === totalPages"
      @click="emit('change', currentPage + 1)"
    >
      Next →
    </button>
  </div>
</template>
