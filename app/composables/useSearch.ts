import { ref, computed, type Ref } from "vue";

/**
 * @param sourceList - Ref
 * @param searchKeys - ['title', 'author']
 */
export function useSearch<T>(sourceList: Ref<T[]>, searchKeys: (keyof T)[]) {
  const searchQuery = ref("");

  const filteredItems = computed(() => {
    const query = searchQuery.value.toLowerCase().trim();

    if (!query) return sourceList.value;

    return sourceList.value.filter((item) => {
      return searchKeys.some((key) => {
        const value = item[key];
        return value && String(value).toLowerCase().includes(query);
      });
    });
  });

  return {
    searchQuery,
    filteredItems,
  };
}
