<script>
  import Logo from '../assets/Logo.svelte';
  import Container from './Container.svelte';
</script>

<header class="root">
  <div class="logo"><Logo size={32} /></div>
  <div class="title">Notes App</div>
</header>

<style lang="scss">
  .root {
    position: sticky;
    top: 0;
    width: 100%;
    height: $header-height;
    padding: spacing(1) spacing(2);
    border-bottom: $border-width solid $outline;
    background: $background;
    z-index: 100;
    display: flex;
    align-items: center;
  }

  .logo {
    color: $primary;
    margin-right: spacing(1);
  }

  .title {
    color: $primary;
    font-weight: 600;
    font-size: 1.25rem;
  }
</style>
