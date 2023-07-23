<template>
  <header>
    <nav>
      <ul class="flex justify-center gap-3.5 sm:flex-col sm:gap-8">
        <li class="flex gap-3.5">
          <RouterLink
            active-class="link__active"
            class="link"
            to="/personal-info"
            >1</RouterLink
          >
          <div class="text-sm uppercase max-sm:hidden">
            <p class="text-xs text-primary-200">Step 1</p>
            <h3 class="font-medium text-secondary-100">Your Info</h3>
          </div>
        </li>
        <li class="flex gap-3.5">
          <RouterLink active-class="link__active" class="link" to="/plan"
            >2</RouterLink
          >
          <div class="text-sm uppercase max-sm:hidden">
            <p class="text-xs text-primary-200">Step 2</p>
            <h3 class="font-medium text-secondary-100">Select Plan</h3>
          </div>
        </li>
        <li class="flex gap-3.5">
          <RouterLink active-class="link__active" class="link" to="/add-ons"
            >3</RouterLink
          >
          <div class="text-sm uppercase max-sm:hidden">
            <p class="text-xs text-primary-200">Step 3</p>
            <h3 class="font-medium text-secondary-100">Add-Ons</h3>
          </div>
        </li>
        <li class="flex gap-3.5">
          <RouterLink
            active-class="link__active"
            class="link"
            to="/finishing-up"
            >4</RouterLink
          >
          <div class="text-sm uppercase max-sm:hidden">
            <p class="text-xs text-primary-200">Step 4</p>
            <h3 class="font-medium text-secondary-100">Summary</h3>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>
