<script setup>
import { RouterView, useRouter, useRoute } from "vue-router";
import TheHeader from "./components/TheHeader.vue";

const route = useRoute();
const router = useRouter();

const prev = () => {
  router.push({ path: route.meta.prev });
};

const next = () => {
  router.push({ path: route.meta.next });
};
</script>

<template>
  <section>
    <div class="sm:base__card flex">
      <div class="sm:max=w-full relative max-sm:w-full">
        <picture>
          <source
            srcset="./assets/images/bg-sidebar-desktop.svg"
            media="(min-width: 640px)"
          />
          <img
            class="sm:max=w-full max-sm:w-full"
            src="./assets/images/bg-sidebar-mobile.svg"
            alt=""
          />
        </picture>
        <TheHeader class="absolute inset-x-0 top-[38px] sm:left-8" />
      </div>
      <form
        class="flex flex-col justify-between sm:px-12 md:px-[100px]"
        @submit.prevent=""
      >
        <RouterView v-slot="{ Component }">
          <Transition name="route" mode="out-in">
            <component
              class="inset-x-0 top-24 max-sm:absolute"
              :is="Component"
            />
          </Transition>
        </RouterView>
        <div
          class="inset-x-0 bottom-0 flex justify-between bg-secondary-100 p-4 max-sm:absolute"
        >
          <button @click="prev" class="font-medium text-secondary-500">
            Go Back
          </button>
          <button
            v-if="route.path === '/finishing-up'"
            type="submit"
            class="rounded-md bg-primary-400 px-4 py-2 text-secondary-100"
          >
            Submit
          </button>
          <button
            v-else
            @click="next"
            class="rounded-md bg-primary-400 px-4 py-2 text-secondary-100"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style>
.route-enter-from {
  opacity: 0;
  translate: 0 -30px;
}
.route-leave-to {
  opacity: 0;
  translate: 0 30px;
}

.route-enter-active {
  transition: all 300ms ease-out;
}
.route-leave-active {
  transition: all 300ms ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  translate: 0;
}
</style>
