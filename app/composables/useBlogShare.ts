import { computed } from "vue";
import { useRoute } from "vue-router";

export const useBlogShare = () => {
  const route = useRoute();

  const currentUrl = computed(() =>
    process.client ? window.location.origin + route.fullPath : "",
  );

  const shareText = "Check out this blog post";

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl.value,
      )}`,
      "_blank",
    );
  };

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        currentUrl.value,
      )}&text=${encodeURIComponent(shareText)}`,
      "_blank",
    );
  };

  const shareInstagram = async () => {
    await navigator.clipboard.writeText(currentUrl.value);
    window.open("https://www.instagram.com", "_blank");
  };

  return {
    shareFacebook,
    shareTwitter,
    shareInstagram,
  };
};
