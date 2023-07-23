<script setup lang="ts">
const title = defineModel<string>("title");
const description = defineModel<string>("description");
const price = defineModel<number>("price");
</script>

<template>
  <label
    :for="title"
    class="label ml-2 flex items-center rounded border border-secondary-400 py-4"
  >
    <input
      :id="title"
      type="checkbox"
      :value="title?.replace(/\s+/g, '')"
      :name="title?.replace(/\s+/g, '')"
      class="label relative h-5 w-5 appearance-none rounded p-0 text-lg text-secondary-100 checked:border-primary-300 checked:bg-primary-300 before:checked:absolute before:checked:left-1/2 before:checked:top-1/2 before:checked:-translate-x-1/2 before:checked:-translate-y-1/2 before:checked:text-secondary-100 before:checked:content-['\2713'] focus:ring-2"
    />
    <div class="ml-4">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <div>
      <p class="price">+${{ price }}/yr</p>
    </div>
  </label>
</template>
