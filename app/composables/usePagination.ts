import { ref, computed, watch } from "vue";

export function usePagination<T>(items: T[], itemsPerPage = 6) {
  const currentPage = ref(1);

  const totalPages = computed(() =>
    Math.ceil(items.length / itemsPerPage)
  );

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  });

  watch(totalPages, (newTotal) => {
    if (currentPage.value > newTotal) {
      currentPage.value = 1;
    }
  });

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return {
    currentPage,
    totalPages,
    paginatedItems,
    changePage,
  };
}
