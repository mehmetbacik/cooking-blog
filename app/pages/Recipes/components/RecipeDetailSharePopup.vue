<script setup>
import { ref, onMounted } from "vue";
import { socialItems } from "../../../data/socialData";

const box = ref(null);

const props = defineProps({
  shareUrl: String,
});

const copy = () => {
  navigator.clipboard.writeText(props.shareUrl);
  alert("Link copied!");
};
</script>

<template>
  <div class="recipeDetail__actions-sharePopup">
    <div class="recipeDetail__actions-sharePopupContent" ref="box">
      <span class="recipeDetail__actions-sharePopupTitle"
        >Share this Recipe</span
      >

      <p class="recipeDetail__actions-sharePopupDesc">
        Love this recipe? Share it with your friends!
      </p>

      <div class="recipeDetail__actions-sharePopupLinkBox">
        <input type="text" :value="shareUrl" readonly />
        <button @click="copy">Copy</button>
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
          <span class="recipeDetail__actions-sharePopupShareIconName">
            {{ item.name }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
