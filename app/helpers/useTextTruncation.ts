import { ref, computed, onMounted, onBeforeUnmount } from "vue";

export const useTextTruncation = (title: string) => {
  const screenWidth = ref(0);

  const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
  };

  onMounted(() => {
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateScreenWidth);
  });

  const charLimit = computed(() => {
    if (screenWidth.value <= 425) return 30;
    if (screenWidth.value <= 768) return 60;
    if (screenWidth.value <= 1024) return 38;
    return 70;
  });

  const truncatedTitle = computed(() => {
    if (!title) return "";

    if (title.length <= charLimit.value) {
      return title;
    }

    return title.slice(0, charLimit.value).trim() + "...";
  });

  return {
    truncatedTitle,
  };
};
