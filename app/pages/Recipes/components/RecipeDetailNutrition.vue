<script setup>
import { computed } from "vue";

const DESCRIPTION_LIMIT = 70;

const props = defineProps({
  recipe: Object,
});

const metrics = [
  { label: "Calories", key: "calories", unit: "kcal" },
  { label: "Total Fat", key: "fat", unit: "g" },
  { label: "Protein", key: "protein", unit: "g" },
  { label: "Carbohydrate", key: "carbohydrate", unit: "g" },
  { label: "Cholesterol", key: "cholesterol", unit: "mg" },
];

const description = computed(() => {
  if (!props.recipe.description) return "";
  return props.recipe.description.length > DESCRIPTION_LIMIT
    ? props.recipe.description.slice(0, DESCRIPTION_LIMIT) + "..."
    : props.recipe.description;
});

const tooltip = computed(() =>
  props.recipe.description.length > DESCRIPTION_LIMIT
    ? props.recipe.description
    : "",
);
</script>

<template>
  <div class="recipeDetail__nutritionInformationWrapper">
    <div class="recipeDetail__nutritionInformationContent">
      <h3 class="recipeDetail__nutritionInformationTitle">
        Nutrition Information
      </h3>

      <div class="recipeDetail__nutritionInformationMetrics">
        <div
          class="recipeDetail__nutritionInformationMetric"
          v-for="item in metrics"
        >
          <span class="recipeDetail__label">{{ item.label }}</span>
          <span class="recipeDetail__val" v-if="recipe[item.key]">
            {{ recipe[item.key] }} {{ item.unit }}
          </span>
          <span class="recipeDetail__val" v-else>Coming soon</span>
        </div>
      </div>
    </div>

    <p v-if="description" class="recipeDetail__description" :title="tooltip">
      {{ description }}
    </p>
  </div>
</template>
