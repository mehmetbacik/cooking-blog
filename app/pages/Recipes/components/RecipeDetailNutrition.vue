<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  description?: string;
  calories?: string;
  fat?: string;
  protein?: string;
  carbs?: string;
  cholesterol?: string;
}>();

const metrics = computed(() => [
  {
    label: "Calories",
    value: props.calories ? `${props.calories} kcal` : null,
  },
  { label: "Total Fat", value: props.fat ? `${props.fat} g` : null },
  { label: "Protein", value: props.protein ? `${props.protein} g` : null },
  { label: "Carbohydrate", value: props.carbs ? `${props.carbs} g` : null },
  {
    label: "Cholesterol",
    value: props.cholesterol ? `${props.cholesterol} mg` : null,
  },
]);

const truncatedDescription = computed(() => {
  const limit = 70;
  if (!props.description) return "";
  return props.description.length > limit
    ? props.description.slice(0, limit) + "..."
    : props.description;
});
</script>

<template>
  <div class="recipeDetail__nutritionInformationWrapper">
    <div class="recipeDetail__nutritionInformationContent">
      <h3 class="recipeDetail__nutritionInformationTitle">
        Nutrition Information
      </h3>
      <div class="recipeDetail__nutritionInformationMetrics">
        <div
          v-for="metric in metrics"
          :key="metric.label"
          class="recipeDetail__nutritionInformationMetric"
        >
          <span class="recipeDetail__label">{{ metric.label }}</span>
          <span class="recipeDetail__val">{{
            metric.value || "Coming soon"
          }}</span>
        </div>
      </div>
    </div>
    <p
      v-if="description"
      class="recipeDetail__description"
      :title="description"
    >
      {{ truncatedDescription }}
    </p>
  </div>
</template>
