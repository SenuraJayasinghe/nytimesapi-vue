<template>
  <section class="p-4 rounded-lg shadow-lg bg-slate-50 w-80">
    <div class="h-96">
      <a
        class="text-xl font-bold text-center text-slate-800 hover:text-slate-600 hover:underline"
        :href="post.url"
        target="_blank"
        rel="noreferrer"
      >
        {{ post.title }}
      </a>
      <img 
        class="w-full mt-3 rounded"
        :src="post.thumbnail"
        :alt="post.caption"
        height="140"
        width="210"
      />
      <p class="mt-2 text-justify text-gray-700 line-clamp-4">
        {{ post.abstract }}
      </p>
    </div>
    <div>
      <p class="mt-5 font-bold text-gray-600">{{ post.byline }}</p>
      <p class="font-light text-gray-600">
        {{ formatDate(post.published_date) }}
      </p>
    </div>
  </section>
</template>

<script>
import { format } from "date-fns"

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(strDate) {
      return format(new Date(strDate), "MMMM do, yyyy")
    },
  },
}
</script>