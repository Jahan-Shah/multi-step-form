<script setup>
import BaseCheckBox from "./BaseCheckBox.vue";
</script>

<template>
  <div class="max-sm:base__card input__flex">
    <BaseCheckBox
      title="Online services"
      description="Access to multiplayer games"
      price="1"
    />
    <BaseCheckBox
      title="Larger storage"
      description="Extra 1TB of cloud save"
      price="2"
    />
    <BaseCheckBox
      title="Customizable profile"
      description="Custom theme on your profile"
      price="2"
    />
  </div>
</template>
