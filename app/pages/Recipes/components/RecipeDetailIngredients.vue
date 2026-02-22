<script setup lang="ts">
const props = defineProps<{
  ingredients: Array<{ title?: string; items: string[] }>;
  checkedSet: Set<string>;
}>();

const emit = defineEmits<{
  (e: "toggle", sIdx: number, iIdx: number): void;
}>();

const isChecked = (sIdx: number, iIdx: number) =>
  props.checkedSet.has(`${sIdx}-${iIdx}`);

const handleToggle = (sIdx: number, iIdx: number) => {
  emit("toggle", sIdx, iIdx);
};
</script>

<template>
  <div class="recipeDetail__ingredientsWrapper">
    <h3 class="recipeDetail__ingredientsTitle">Ingredients</h3>
    <div
      v-for="(section, sIdx) in ingredients"
      :key="sIdx"
      class="recipeDetail__ingredientsContent"
    >
      <h4
        v-if="section.title"
        class="recipeDetail__ingredientsContent-sectionTitle"
      >
        {{ section.title }}
      </h4>
      <ul class="recipeDetail__ingredientsContent-checklist">
        <li
          v-for="(item, iIdx) in section.items"
          :key="iIdx"
          class="recipeDetail__ingredientsContent-checklistItem"
          :class="{ 'is-checked': isChecked(Number(sIdx), Number(iIdx)) }"
          @click="handleToggle(Number(sIdx), Number(iIdx))"
        >
          <div class="recipeDetail__ingredientsContent-checkbox">
            <svg
              v-if="isChecked(Number(sIdx), Number(iIdx))"
              class="check-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <span class="recipeDetail__ingredientsContent-text">{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
