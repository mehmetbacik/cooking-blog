<script setup lang="ts">
import { computed } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps<{
  currentPage: number;
  totalPages: number;
  maxVisible?: number;
}>();

const emit = defineEmits<{
  (e: "page-change", page: number): void;
}>();

const maxVisible = props.maxVisible ?? 5;

const changePage = (page: number) => {
  if (page >= 1 && page <= props.totalPages && page !== props.currentPage) {
    emit("page-change", page);
  }
};

const pages = computed<(number | string)[]>(() => {
  const total = props.totalPages;
  const current = props.currentPage;
  const half = Math.floor(maxVisible / 2);

  if (total <= maxVisible + 2) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  let start = Math.max(2, current - half);
  let end = Math.min(total - 1, current + half);

  if (current <= half + 2) {
    start = 2;
    end = maxVisible;
  }

  if (current >= total - (half + 1)) {
    start = total - maxVisible + 1;
    end = total - 1;
  }

  const result: (number | string)[] = [1];

  if (start > 2) result.push("...");

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  if (end < total - 1) result.push("...");

  result.push(total);

  return result;
});
</script>

<template>
  <div v-if="totalPages > 1" class="pagination">
    <button
      class="page-btn"
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      <Icon icon="mdi:chevron-left" width="25" />
    </button>

    <div class="page-numbers">
      <button
        v-for="(page, index) in pages"
        :key="`${page}-${index}`"
        class="page-num"
        :class="{ active: page === currentPage, dots: page === '...' }"
        :disabled="page === '...'"
        @click="typeof page === 'number' && changePage(page)"
      >
        {{ page }}
      </button>
    </div>

    <button
      class="page-btn"
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      <Icon icon="mdi:chevron-right" width="25" />
    </button>
  </div>
</template>
