<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { createError } from "nuxt/app";
import { blogData } from "../../data/blogData";

const route = useRoute();
const post = blogData.find((p) => p.slug === route.params.slug);

if (!post) {
  throw createError({ statusCode: 404, statusMessage: "Post Not Found" });
}

const currentUrl = computed(() => {
  if (process.client) {
    return window.location.origin + route.fullPath;
  }
  return "";
});

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
  try {
    await navigator.clipboard.writeText(currentUrl.value);
    window.open("https://www.instagram.com", "_blank");
    alert("Link copied. You can paste it into your Instagram story or bio.");
  } catch (error) {
    alert("Failed to copy the link.");
  }
};
</script>

<template>
  <div class="blogDetail">
    <div class="container blogDetail__content">
      <div class="blogDetail__headerLayout">
        <div class="blogDetail__header">
          <h1 class="blogDetail__title">{{ post.title }}</h1>
          <div class="blogDetail__meta">
            <div class="blogDetail__author">
              <img :src="post.photo" :alt="post.author" />
              <span>{{ post.author }}</span>
            </div>
            <div class="blogDetail__date">
              <span>{{ post.date }}</span>
            </div>
          </div>
          <div class="blogDetail__summary">
            <p>
              {{ post.summary }}
            </p>
          </div>
          <div class="blogDetail__image">
            <img :src="post.image" :alt="post.title" />
          </div>
        </div>
      </div>
      <div class="blogDetail__contentLayout">
        <div class="row align-items-center">
          <div class="col-12 col-lg-9">
            <div class="blogDetail__mainLayout">
              <div class="post-content" v-html="post.content"></div>
            </div>
          </div>
          <div class="col-12 col-lg-3">
            <div class="blogDetail__shareLayout">
              <span>Share This On:</span>
              <div>
                <button
                  class="blog-share__btn blog-share__btn--facebook"
                  @click="shareFacebook"
                  aria-label="Share on Facebook"
                >
                  Facebook
                </button>
                <button
                  class="blog-share__btn blog-share__btn--twitter"
                  @click="shareTwitter"
                  aria-label="Share on Twitter"
                >
                  Twitter
                </button>
                <button
                  class="blog-share__btn blog-share__btn--instagram"
                  @click="shareInstagram"
                  aria-label="Share on Instagram"
                >
                  Instagram
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CheckOutRecipesSection />
    </div>
  </div>
</template>
