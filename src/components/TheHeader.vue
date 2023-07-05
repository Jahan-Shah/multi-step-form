<template>
  <header>
    <nav>
      <ul class="flex justify-center gap-3.5">
        <li>
          <RouterLink
            active-class="link__active"
            class="link"
            to="/personal-info"
            >1</RouterLink
          >
        </li>
        <li>
          <RouterLink active-class="link__active" class="link" to="/plan"
            >2</RouterLink
          >
        </li>
        <li>
          <RouterLink active-class="link__active" class="link" to="/add-ons"
            >3</RouterLink
          >
        </li>
        <li>
          <RouterLink
            active-class="link__active"
            class="link"
            to="/finishing-up"
            >4</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
