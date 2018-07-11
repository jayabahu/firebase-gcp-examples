<template>
  <div id="app-wrapper">
    <app-header></app-header>
    <div id="content-wrapper">
      <nuxt/>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "@/components/Header";

export default {
  components: { AppHeader },
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>