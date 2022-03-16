<script>
  import Container from './Container.svelte';
</script>

<footer class="root">
  <Container>
    <div class="inner">
      <div>Created by Alexander Nicholson 2022</div>
      <div>•</div>
      <a href="https://github.com/alexn400/svelte-keep-clone" target="_blank">Github</a>
      <div class="grow" />
      <button class="button">Delete data</button>
    </div>
  </Container>
</footer>

<style lang="scss">
  .root {
    color: $text-muted;
    font-size: 0.875rem;
  }

  .grow {
    flex-grow: 1;
  }

  .inner {
    display: flex;
    padding: spacing(1.5) 0;

    & > * {
      margin-right: spacing(0.5);
    }
  }

  .button {
    background: none;
    color: $primary;
    border-radius: $border-radius;
    padding: spacing(0.5) spacing(1);
    transition: background 0.2s ease;
    font-weight: 600;

    &:hover {
      background: $surface;
    }
  }

  a {
    color: $primary;
  }
</style>
