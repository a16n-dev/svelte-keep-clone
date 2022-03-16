<script>
  import Container from './Container.svelte';
</script>

<header class="root"><Container><div class="title">Notes App</div></Container></header>

<style lang="scss">
  .root {
    position: sticky;
    top: 0;
    width: 100%;
    padding: spacing(1);
    border-bottom: $border-width solid $outline;
    background: $background;
    z-index: 100;
  }

  .title {
    color: $primary;
    font-weight: 600;
    font-size: 1.25rem;
  }
</style>
