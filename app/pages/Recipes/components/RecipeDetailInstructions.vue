<script setup lang="ts">
defineProps<{ steps: any[]; checkedSet: Set<number> }>();
defineEmits(["toggle"]);
</script>

<template>
  <div class="recipeDetail__stepsWrapper">
    <h3 class="recipeDetail__stepsTitle">Directions</h3>
    <div class="recipeDetail__stepsList">
      <div
        v-for="(step, idx) in steps"
        :key="idx"
        class="recipeDetail__stepsItem"
        :class="{ 'is-checked': checkedSet.has(idx) }"
        @click="$emit('toggle', idx)"
      >
        <div class="recipeDetail__stepsCheckbox">
          <svg
            v-if="checkedSet.has(idx)"
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
            class="recipeDetail__stepsContent-image"
          />
          <p v-if="step.text2" class="recipeDetail__stepsContent-text">
            {{ step.text2 }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
