<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

import { socialItems } from "../../../data/socialData";

const props = defineProps<{ slug: string }>();
defineEmits(["print"]);

const isOpen = ref(false);
const popupRef = ref<HTMLElement | null>(null);

const togglePopup = () => (isOpen.value = !isOpen.value);
const handleClickOutside = (e: MouseEvent) => {
  if (
    isOpen.value &&
    popupRef.value &&
    !popupRef.value.contains(e.target as Node)
  ) {
    isOpen.value = false;
  }
};

const copyLink = () => {
  navigator.clipboard.writeText(window.location.href);
  alert("Link copied!");
};

onMounted(() => document.addEventListener("click", handleClickOutside));
onBeforeUnmount(() =>
  document.removeEventListener("click", handleClickOutside),
);
</script>

<template>
  <div class="recipeDetail__actions">
    <div class="recipeDetail__actions-printWrapper">
      <button class="recipeDetail__actions-printBtn" @click="$emit('print')">
        <img src="/icons/print.svg" alt="Print Icon" />
      </button>
      <span>Print</span>
    </div>

    <div class="recipeDetail__actions-shareWrapper">
      <button class="recipeDetail__actions-shareBtn" @click.stop="togglePopup">
        <img src="/icons/share.svg" alt="Share Icon" />
      </button>
      <span>Share</span>

      <div v-if="isOpen" class="recipeDetail__actions-sharePopup">
        <div class="recipeDetail__actions-sharePopupContent" ref="popupRef">
          <span class="recipeDetail__actions-sharePopupTitle"
            >Share this Recipe</span
          >
          <p class="recipeDetail__actions-sharePopupDesc">
            Love this recipe? Share it!
          </p>
          <div class="recipeDetail__actions-sharePopupLinkBox">
            <input type="text" :value="slug" readonly />
            <button @click="copyLink">Copy</button>
          </div>
          <div class="recipeDetail__actions-sharePopupIcons">
            <a
              v-for="(item, idx) in socialItems"
              :key="idx"
              :href="item.link"
              target="_blank"
              class="recipeDetail__actions-sharePopupShareIcon"
            >
              <img :src="item.iconUrl" :alt="item.name" />
              <span class="recipeDetail__actions-sharePopupShareIconName">{{
                item.name
              }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
