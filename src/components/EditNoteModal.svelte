<script lang="ts">
  export let open = false;
</script>

<div class="backdrop" />
<div class="container">
  <div class="modal">Content!</div>
</div>

<style lang="scss">
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 200;
    pointer-events: none;
    opacity: 0;

    &.open {
      opacity: 1;
    }
  }
</style>
