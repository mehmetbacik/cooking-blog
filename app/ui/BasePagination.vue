<script setup lang="ts">
const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  (e: "page-change", page: number): void;
}>();

const changePage = (page: number) => {
  if (page >= 1 && page <= props.totalPages) {
    emit("page-change", page);
  }
};
</script>

<template>
  <div v-if="totalPages > 1" class="pagination">
    <button
      class="page-btn prev"
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      &larr; Prev
    </button>

    <div class="page-numbers">
      <button
        v-for="page in totalPages"
        :key="page"
        class="page-num"
        :class="{ active: currentPage === page }"
        @click="changePage(page)"
      >
        {{ page }}
      </button>
    </div>

    <button
      class="page-btn next"
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      Next &rarr;
    </button>
  </div>
</template>
