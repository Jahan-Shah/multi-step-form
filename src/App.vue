<script setup>
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <section class="h-screen bg-secondary-300">
    <img src="./assets/images/bg-sidebar-mobile.svg" alt="" />
    <section class="absolute inset-x-0 top-24">
      <TheHeader />
      <RouterView v-slot="slotsProps">
        <Transition name="route" mode="out-in">
          <component :is="slotsProps.Component" />
        </Transition>
      </RouterView>
    </section>
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
