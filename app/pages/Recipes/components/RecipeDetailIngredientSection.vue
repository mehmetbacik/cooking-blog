<script setup>
defineProps({
  section: Object,
  sectionIndex: Number,
  checked: Set,
});

defineEmits(["toggle"]);
</script>

<template>
  <div class="recipeDetail__ingredientsContent">
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
        :class="{ 'is-checked': checked.has(`${sectionIndex}-${iIdx}`) }"
        @click="$emit('toggle', sectionIndex, iIdx)"
      >
        <div class="recipeDetail__ingredientsContent-checkbox">
          <svg
            v-if="checked.has(`${sectionIndex}-${iIdx}`)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="check-icon"
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
</template>
