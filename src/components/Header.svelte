<script>
  import Logo from '../assets/Logo.svelte';
  import Container from './Container.svelte';
</script>

<header class="root">
  <Container>
    <div class="header">
      <div class="logo"><Logo size={32} /></div>
      <div class="title">Notes App</div>
    </div>
  </Container>
</header>

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

  .header {
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
