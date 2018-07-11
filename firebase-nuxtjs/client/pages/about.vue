<template>
  <section>
    <div>
      <h1>about.vue</h1>
      <button
        id="reload-btn"
        @click="reloadPage">
        Reload Page
      </button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>