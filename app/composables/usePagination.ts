import { ref, computed, watch, type Ref } from "vue";

export function usePagination<T>(list: Ref<T[]>, itemsPerPage: number = 6) {
  const currentPage = ref(1);

  const totalPages = computed(
    () => Math.ceil(list.value.length / itemsPerPage) || 1
  );

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return list.value.slice(start, end);
  });

  watch(list, () => {
    currentPage.value = 1;
  });

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  };

  const nextPage = () => changePage(currentPage.value + 1);
  const prevPage = () => changePage(currentPage.value - 1);

  return {
    currentPage,
    totalPages,
    paginatedItems,
    changePage,
    nextPage,
    prevPage,
  };
}
