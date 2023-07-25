<script setup>
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
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
      <form class="inset-x-0 top-24 max-sm:absolute sm:px-8" @submit.prevent="">
        <RouterView v-slot="{ Component }">
          <Transition name="route" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
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
