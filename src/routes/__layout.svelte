<script>
  import Sidebar from '../components/Sidebar.svelte';
  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';
</script>

<div class="root">
  <Header />
  <div class="content-outer-wrapper">
    <Sidebar />
    <div class="content-inner-wrapper">
      <slot />
    </div>
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

  .content-outer-wrapper {
    margin-top: spacing(1);
    display: flex;
    flex-grow: 1;
  }

  .content-inner-wrapper {
    flex-grow: 1;
  }
</style>
