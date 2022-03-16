<script>
  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';
</script>

<div class="root">
  <Header />
  <div class="content">
    <slot />
  </div>
  <Footer />
</div>

<style lang="scss">
  @import '../theme/global.scss';

  .root {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100vh;
  }

  .content {
    flex-grow: 1;
  }
</style>
