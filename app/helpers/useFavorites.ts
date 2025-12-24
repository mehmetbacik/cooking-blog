import { ref, onMounted } from "vue";

const STORAGE_KEY = "favorites";
const favorites = ref<number[]>([]);
let isInitialized = false;

export const useFavorites = () => {
  const loadFavorites = () => {
    if (typeof window === "undefined") return;

    try {
      favorites.value = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );
    } catch {
      favorites.value = [];
    }
  };

  const saveFavorites = () => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites.value));
  };

  const isFavorite = (id: number) => {
    return favorites.value.includes(id);
  };

  const addFavorite = (id: number) => {
    if (!favorites.value.includes(id)) {
      favorites.value = [...favorites.value, id];
      saveFavorites();
    }
  };

  const removeFavorite = (id: number) => {
    favorites.value = favorites.value.filter((favId) => favId !== id);
    saveFavorites();
  };

  const toggleFavorite = (id: number) => {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  onMounted(() => {
    if (!isInitialized) {
      loadFavorites();
      isInitialized = true;
    }
  });

  return {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
  };
};
