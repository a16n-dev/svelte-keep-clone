<script lang="ts">
  import Note from '../components/Note/index.svelte';
  import Masonry from '../components/Masonry/index.svelte';
</script>

<div style="margin: 32px 64px" class="root">
  <Masonry>
    {#each new Array(10).fill(0).map((_, i) => i) as i}
      <Note><b>{i}</b></Note>
    {/each}
  </Masonry>
</div>

<style lang="scss">
</style>
