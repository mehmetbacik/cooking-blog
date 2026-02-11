<script setup>
defineProps({
  step: Object,
  index: Number,
  checked: Set,
});
defineEmits(["toggle"]);
</script>

<template>
  <div
    class="recipeDetail__stepsItem"
    :class="{ 'is-checked': checked.has(index) }"
    @click="$emit('toggle', index)"
  >
    <div class="recipeDetail__stepsCheckbox">
      <svg
        v-if="checked.has(index)"
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

    <div class="recipeDetail__stepsContent">
      <h4 v-if="step.title" class="recipeDetail__stepsContent-title">
        {{ step.title }}
      </h4>

      <p v-if="step.text" class="recipeDetail__stepsContent-text">
        {{ step.text }}
      </p>

      <img
        v-if="step.image"
        :src="step.image"
        :alt="step.title || step.text"
        class="recipeDetail__stepsContent-image"
      />

      <p v-if="step.text2" class="recipeDetail__stepsContent-text">
        {{ step.text2 }}
      </p>
    </div>
  </div>
</template>
